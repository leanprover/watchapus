import { Box, Grid } from "@chakra-ui/react";

interface RightPillProps {
  maxPss: number;
  maxPerc: number;
  uss: number;
  pss: number;
  pmem: number;
}

const K_PER_G = 1024 * 1024;
const K_PER_M = 1024;

/** Kinda ad-hoc kb-to-human-readable converter */
function memStr(kb: number) {
  if (kb >= K_PER_M * 1000) {
    return `${(kb / K_PER_G).toFixed(2)} GiB`;
  } else if (kb > 10 * K_PER_M) {
    return `${(kb / K_PER_M).toFixed(0)} MiB`;
  } else if (kb > K_PER_M) {
    return `${(kb / K_PER_M).toFixed(2)} MiB`;
  } else {
    return `${kb.toFixed(0)} KiB`;
  }
}

export default function RightPill({ maxPss, maxPerc, uss, pss, pmem }: RightPillProps) {
  if (!pss) {
    return (
      <Grid
        gridTemplateAreas='"is-bar not-bar"'
        gridTemplateColumns={`${pmem}fr ${maxPerc - pmem}fr`}
      >
        <Box
          gridArea="is-bar"
          minWidth="0"
          minHeight="1.5rem"
          bgColor="blue.subtle"
          borderInlineEndRadius="1em"
        />
        <Box
          gridRow="is-bar"
          gridColumn="is-bar / not-bar"
          alignContent="center"
          fontSize="sm"
          paddingInline="1em"
          textWrap="nowrap"
          textOverflow="ellipsis"
          overflow="hidden"
          maxWidth="100%"
        >
          {`${pmem}% of system memory`}
        </Box>
      </Grid>
    );
  }
  return (
    <Grid
      gridTemplateAreas='"is-unshared is-shared not-bar"'
      gridTemplateColumns={`${uss}fr ${pss - uss}fr ${maxPss - pss}fr`}
    >
      <Box gridArea="is-unshared" minWidth="0" minHeight="1.5rem" bgColor="blue.subtle" />
      <Box gridArea="is-shared" minWidth="0" minHeight="1.5rem" bgColor="green.subtle" />
      <Box
        gridRow="is-unshared"
        gridColumn="is-unshared / not-bar"
        alignContent="center"
        fontSize="sm"
        paddingInline="1em"
        textWrap="nowrap"
        textOverflow="ellipsis"
        overflow="hidden"
        maxWidth="100%"
      >
        {`${memStr(pss)} used, ${memStr(uss)} unshared`}
      </Box>
    </Grid>
  );
}
