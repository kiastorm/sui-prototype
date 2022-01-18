import { Box } from "../src";

export default {
  title: "Packages/layout/Text",
};

export const basic = () => (
  <Box
    css={{
      bgc: "yellow",
      color: "tomato",
      "&:hover": { bgc: "blue", color: "white" },
    }}
  >
    Welcome to Box
  </Box>
);
