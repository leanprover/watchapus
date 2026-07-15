import express from "express";

import { execFile } from "child_process";
import { promisify } from "util";

export const app = express();
app.use(express.json());

const execFileAsync = promisify(execFile);

async function callPS() {
  let stdout: string;

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
  } catch (e) {
    console.error(`ps returned ${e instanceof Error ? e.message : String(e)}`);
    stdout = "";
  }

  const [_start, ...rest] = stdout.trim().split("\n");

  return rest.map((line) => {
    const lineparts = line.match(
      /^([^ ]+) +(\d+) +(\d+) +([^ ]+ +[^ ]+ +[0-9]+ +[0-9:]+ +[0-9]+) +(\d+) +(\d+) +(\d+) +([0-9.]+)+ +(.*)$/,
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
      lstart: new Date(lstart!),
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

  return userMap;
}

app.get("/watchapus/api/info", async (req, res) => {
  const psData = await callPS();
  res.send(processPS(psData));
});
