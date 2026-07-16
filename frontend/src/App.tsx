import { Card, Clipboard, Grid, IconButton, Stack } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { Fragment } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons/faCopy";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

import LeftPill from "./LeftPill.tsx";
import { infoQueryAtom } from "./query.ts";
import RightPill from "./RightPill.tsx";
import type { WatchdogInfo } from "@repo/shared";

function PidButton({ pid }: { pid: number }) {
  return (
    <Clipboard.Root value={String(pid)}>
      <Clipboard.Trigger asChild>
        <IconButton
          size="2xs"
          variant="subtle"
          title={`PID ${pid} (click to copy)`}
          aria-label={`Copy PID ${pid}`}
        >
          <Clipboard.Indicator copied={<FontAwesomeIcon icon={faCheck} />}>
            <FontAwesomeIcon icon={faCopy} />
          </Clipboard.Indicator>
        </IconButton>
      </Clipboard.Trigger>
    </Clipboard.Root>
  );
}

interface ReportUserProps {
  user: string;
  data: WatchdogInfo[];
  maxPerc: number;
  maxPss: number;
}

function ReportUser({ user, data, maxPerc, maxPss }: ReportUserProps) {
  return (
    <Card.Root>
      <Card.Title>{user}</Card.Title>
      <Card.Body>
        <Grid rowGap="2">
          {data.map(({ pid, duration, times, workers, uss, pss, pmem, ...rest }) => (
            <Grid key={String(pid)} gridTemplateColumns="1fr auto 1fr" gridGap="2">
              <LeftPill duration={duration} times={times} />
              <PidButton pid={pid} />
              <RightPill uss={uss} pss={pss} pmem={pmem} maxPerc={maxPerc} maxPss={maxPss} />
              {workers.map(({ pid, duration, times, uss, pss, pmem }) => (
                <Fragment key={String(pid)}>
                  <LeftPill sub duration={duration} times={times} />
                  <PidButton pid={pid} />
                  <RightPill uss={uss} pss={pss} pmem={pmem} maxPerc={maxPerc} maxPss={maxPss} />
                </Fragment>
              ))}
            </Grid>
          ))}
        </Grid>
      </Card.Body>
    </Card.Root>
  );
}

export default function App() {
  const query = useAtomValue(infoQueryAtom);
  if (query.status === "pending") return "Loading...";
  if (query.status === "error") return "Error loading query";

  return (
    <>
      <Stack maxWidth="4xl">
        {query.data.data.map(([user, data]) => (
          <ReportUser
            key={user}
            user={user}
            data={data}
            maxPerc={query.data.maxPerc}
            maxPss={query.data.maxPss}
          />
        ))}
      </Stack>
    </>
  );
}
