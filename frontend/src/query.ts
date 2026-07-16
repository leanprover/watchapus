import { type WatchdogInfo, zLspInfoByUser } from "@repo/shared";
import { atomWithQuery } from "jotai-tanstack-query";

function findMaxMem(entriess: WatchdogInfo[][]) {
  const maxPss = entriess.reduce(
    (soFar, entries) =>
      entries.reduce(
        (soFar, entry) =>
          Math.max(
            entry.pss,
            entry.workers.reduce((soFar, entry) => Math.max(entry.pss, soFar), soFar),
          ),
        soFar,
      ),
    0.01,
  );
  const maxPerc = entriess.reduce(
    (soFar, entries) =>
      entries.reduce(
        (soFar, entry) =>
          Math.max(
            entry.pmem,
            entry.workers.reduce((soFar, entry) => Math.max(entry.pmem, soFar), soFar),
          ),
        soFar,
      ),
    0.01,
  );

  return { maxPss, maxPerc };
}

export const infoQueryAtom = atomWithQuery((get) => ({
  queryKey: ["api-info"],
  queryFn: async () => {
    const result = await fetch("/watchapus/api/info");
    const userInfo = zLspInfoByUser.parse(await result.json());

    const { maxPss, maxPerc } = findMaxMem(Object.values(userInfo));

    return {
      data: Object.entries(userInfo).toSorted((a, b) => a[0].localeCompare(b[0])),
      maxPss,
      maxPerc,
    };
  },
}));
