import { useAtomValue } from "jotai";
import { infoQueryAtom, tz, type DP, type TZ } from "./query.ts";
import {
  Box,
  Card,
  CodeBlock,
  createShikiAdapter,
  Grid,
  GridItem,
  Stack,
  StackSeparator,
} from "@chakra-ui/react";

const shikiAdapter = createShikiAdapter({
  async load() {
    const { createHighlighter } = await import("shiki");
    const highlighter = await createHighlighter({
      langs: ["json"],
      themes: ["github-dark", "github-light"],
    });
    return highlighter;
  },
  theme: { light: "github-light", dark: "github-dark" },
});

interface PillProps {
  sub?: true;
  duration: number;
  contents?: string;
}

function Pill({ sub, duration, contents }: PillProps) {
  const consts = sub
    ? ({ minHeight: "1em", bgColor: "pink.subtle", fontSize: "sm" } as const)
    : ({ minHeight: "2em", bgColor: "purple.subtle", fontSize: "md" } as const);

  const label = (
    <Box
      alignContent="center"
      minWidth="0"
      maxWidth="100%"
      overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
      height="100%"
      paddingInline="1em"
      fontSize={consts.fontSize}
    >
      {contents}
    </Box>
  );

  if (duration >= 24) {
    return (
      <Box
        minWidth="0"
        minHeight="2em"
        bgColor={consts.bgColor}
        display="flex"
        justifyContent="flex-end"
      >
        {label}
      </Box>
    );
  }

  return (
    <Grid gridTemplateColumns={`${24 - duration}fr ${duration}fr`}>
      <GridItem />
      <Box
        minWidth="0"
        minHeight="2em"
        bgColor={consts.bgColor}
        borderInlineStartRadius="1em"
        display="flex"
        justifyContent="flex-end"
      >
        {duration > 1 && label}
      </Box>
    </Grid>
  );
}

interface ReportUserProps {
  user: string;
  data: DP[];
}

function ReportUser({ user, data }: ReportUserProps) {
  return (
    <Card.Root>
      <Card.Title>{user}</Card.Title>
      <Card.Body>
        <Grid rowGap="2">
          {data.map(({ pid, duration, times, workers, ...rest }) => (
            <Grid key={String(pid)} gridTemplateColumns="1fr">
              <Pill duration={duration} contents={`${Math.floor(duration)}h, ${times}s active`} />
              {workers.map(({ pid, duration, times }) => (
                <Pill
                  sub
                  key={String(pid)}
                  duration={duration}
                  contents={`${Math.floor(duration)}h, ${times}s active`}
                />
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
          <ReportUser key={user} user={user} data={data} />
        ))}
      </Stack>
      <CodeBlock.AdapterProvider value={shikiAdapter}>
        <CodeBlock.Root code={JSON.stringify(query.data.json, undefined, 3)} language={"json"}>
          <CodeBlock.Header>
            <CodeBlock.Title />
            <CodeBlock.Control>
              <CodeBlock.CopyTrigger />
              <CodeBlock.CollapseTrigger />
            </CodeBlock.Control>
          </CodeBlock.Header>
          <CodeBlock.Content>
            <CodeBlock.Code>
              <CodeBlock.CodeText />
            </CodeBlock.Code>
          </CodeBlock.Content>
        </CodeBlock.Root>
      </CodeBlock.AdapterProvider>
    </>
  );
}
