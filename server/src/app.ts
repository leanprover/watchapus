import { zLspInfoByUser } from "@repo/shared";
import { execFile } from "child_process";
import express from "express";
import { env } from "process";
import { promisify } from "util";

import { MOCK_PS, mockNow } from "./mock.ts";

export const app = express();
app.use(express.json());

const execFileAsync = promisify(execFile);

async function callPS() {
  let stdout: string;
  let now: number;

  if (env.MOCK_PS) {
    stdout = MOCK_PS;
    now = mockNow();
  } else {
    try {
      const ps = await execFileAsync("ps", [
        "-C",
        "lean,lake",
        "-o",
        "user,pid,ppid,lstart,times,uss,pss,pmem,command",
      ]);

      if (ps.stderr.trim() !== "") {
        throw new Error(`Failing lsp infodump due to output on stderr: ${ps.stderr}`);
      }
      stdout = ps.stdout;
      now = Date.now();
    } catch (e) {
      console.error(`ps returned ${e instanceof Error ? e.message : String(e)}`);
      stdout = "";
      now = Date.now();
    }
  }

  const [_start, ...rest] = stdout.trim().split("\n");

  return rest.map((line) => {
    const lineparts = line.match(
      /^([^ ]+) +(\d+) +(\d+) +([^ ]+ +[^ ]+ +[0-9]+ +[0-9:]+ +[0-9]+) +(\d+) +(\d+) +(\d+) +([0-9.]+) +(.*)$/,
    );
    if (!lineparts) {
      console.error(`Failing lsp infodump due to unexpected ps output: ${line}`);
      throw new Error("ps output did not have expected format '" + line);
    }
    const [_match, user, pid, ppid, lstart, times, uss, pss, pmem, command] = lineparts;
    return {
      user: user!,
      pid: Number(pid),
      ppid: Number(ppid),
      duration: (now - new Date(lstart!).getTime()) / 1000,
      times: Number(times),
      uss: Number(uss),
      pss: Number(pss),
      pmem: Number(pmem),
      command: command!,
    };
  });
}

type PSData = Awaited<ReturnType<typeof callPS>>[number];
type ServerData = PSData & { lake?: PSData; workers: PSData[] };

function processPS(data: PSData[]) {
  const lakes = data.filter(({ command }) => command.match(/^(\/?([^ /]+\/)*lake serve*)/));
  const servers = data.filter(({ command }) => command.match(/^(\/?([^ /]+\/)*lean --server*)/));
  const workers = data.filter(({ command }) => command.match(/^(\/?([^ /]+\/)*lean --worker*)/));

  const lakesMap: Map<number, PSData> = new Map();
  for (const lake of lakes) {
    lakesMap.set(lake.pid, lake);
  }

  const serverMap: Map<number, ServerData> = new Map();
  for (const server of servers) {
    serverMap.set(server.pid, { ...server, lake: lakesMap.get(server.ppid), workers: [] });
  }

  for (const worker of workers) {
    const serverWorkers = serverMap.get(worker.ppid)?.workers;
    if (serverWorkers) {
      serverWorkers.push(worker);
    }
  }

  const userMap: { [user: string]: ServerData[] } = {};
  for (const server of serverMap.values()) {
    const user = userMap[server.user] ?? [];
    userMap[server.user] = user;
    user.push(server);
  }

  for (const watchdogs of Object.values(userMap)) {
    watchdogs.sort((r1, r2) => r2.duration - r1.duration);
    for (const watchdog of watchdogs) {
      watchdog.workers.sort((r1, r2) => r2.duration - r1.duration);
    }
  }

  return zLspInfoByUser.parse(userMap);
}

app.get("/watchapus/api/info", async (req, res) => {
  const psData = await callPS();
  res.send(processPS(psData));
});

app.get("/watchapus/api/metrics.prom", async (req, res) => {
  res.set("Content-Type", "text/plain; charset=ascii");
  const data = processPS(await callPS())["lean4web"] ?? [];
  const watchdogUSS = data.reduce((uss, e) => uss + e.uss, 0);
  const watchdogPSS = data.reduce((pss, e) => pss + e.pss, 0);
  const watcherUSS = data.reduce((uss, e) => e.workers.reduce((uss, e) => uss + e.uss, uss), 0);
  const watcherPSS = data.reduce((pss, e) => e.workers.reduce((pss, e) => pss + e.pss, pss), 0);
  res.send(
    Object.entries({
      lean4web_lsp_server_watchdog_count: data.length,
      lean4web_lsp_server_watchdog_uss_bytes: watchdogUSS * 1024,
      lean4web_lsp_server_watchdog_shared_bytes: (watchdogPSS - watchdogUSS) * 1024,
      lean4web_lsp_server_watcher_uss_bytes: watcherUSS * 1024,
      lean4web_lsp_server_watcher_shared_bytes: (watcherPSS - watcherUSS) * 1024,
    })
      .map(([key, value]) => `${key} ${value}\n`)
      .toSorted()
      .join(""),
  );
});
