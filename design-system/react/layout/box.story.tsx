import { Box, Container } from ".";

export default {
  title: "Layout/Box",
  decorators: [(Story: Function) => <Container>{Story()}</Container>],
};
export const BasicUsage = () => (
  <Box
    css={{
      bgc: "$neutral300",
      color: "$neutral800",
      px: "$2",
      py: "$4",
      "&:hover": { bgc: "$neutral800", color: "$neutral300" },
    }}
  >
    I am a box
  </Box>
);
