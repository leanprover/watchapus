import { z } from "zod";

const zWatchdogInfo = z.object({
  duration: z.number(),
  times: z.number(),
  pid: z.number(),
  uss: z.number(),
  pss: z.number(),
  pmem: z.number(),
  workers: z.array(
    z.object({
      duration: z.number(),
      times: z.number(),
      pid: z.number(),
      uss: z.number(),
      pss: z.number(),
      pmem: z.number(),
    }),
  ),
});
export type WatchdogInfo = z.infer<typeof zWatchdogInfo>;

export const zLspInfoByUser = z.record(z.string(), z.array(zWatchdogInfo));
export type LspInfoByUser = z.infer<typeof zLspInfoByUser>;
