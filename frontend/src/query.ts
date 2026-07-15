import { atomWithQuery } from "jotai-tanstack-query";
import { z } from "zod";

export const dp = z.object({
  duration: z.number(),
  times: z.number(),
  pid: z.number(),
  workers: z.array(z.object({ duration: z.number(), times: z.number(), pid: z.number() })),
});
export type DP = z.infer<typeof dp>;

export const tz = z.record(z.string(), z.array(dp));
export type TZ = z.infer<typeof tz>;

export const infoQueryAtom = atomWithQuery((get) => ({
  queryKey: ["api-info"],
  queryFn: async () => {
    const res = await fetch("/watchapus/api/info");
    const json: any = await res.json();

    return {
      data: Object.entries(tz.parse(json)).toSorted((a, b) => a[0].localeCompare(b[0])),
      json,
    };
  },
}));
