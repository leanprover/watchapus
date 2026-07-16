import { Box, Grid } from "@chakra-ui/react";

interface LeftPillProps {
  sub?: true;
  duration: number;
  times: number;
}

/** Kinda ad-hoc kb-to-human-readable converter */
function timeStr(sec: number) {
  if (sec >= 60 * 60) {
    return `${(sec / (60 * 60)).toFixed(2)}h`;
  } else if (sec > 10 * 60) {
    return `${(sec / 60).toFixed(0)}m`;
  } else if (sec > 60) {
    return `${(sec / 60).toFixed(2)}m`;
  } else {
    return `${sec.toFixed(0)}s`;
  }
}

const FULL_SEC = 60 * 60 * 24;

export default function LeftPill({ sub, duration, times }: LeftPillProps) {
  const proporition = Math.min(FULL_SEC, duration);
  const isMax = proporition === FULL_SEC;

  const consts = sub
    ? ({ bgColor: "pink.subtle" } as const)
    : ({ bgColor: "purple.subtle" } as const);

  return (
    <Grid
      gridTemplateAreas='"not-bar is-bar"'
      gridTemplateColumns={`${FULL_SEC - proporition}fr ${proporition}fr`}
    >
      <Box
        gridArea="is-bar"
        minWidth="0"
        minHeight="1.5rem"
        bgColor={consts.bgColor}
        borderInlineStartRadius={isMax ? 0 : "1em"}
      />
      <Box
        gridRow="is-bar"
        gridColumn="not-bar / is-bar"
        alignContent="center"
        justifySelf="end"
        fontSize="sm"
        paddingInline="1em"
        textWrap="nowrap"
        textOverflow="ellipsis"
        overflow="hidden"
        maxWidth="100%"
      >
        {timeStr(duration)} clock, {timeStr(times)} active
      </Box>
    </Grid>
  );
}
