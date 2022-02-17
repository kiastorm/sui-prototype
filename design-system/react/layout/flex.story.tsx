import React from "react";

import { Box, Flex } from ".";

export default {
  title: "Design System / Layout / Flex",
  component: Flex,
};

export const Basic = (args) => (
  <Flex
    gap={6}
    css={{
      bgc: "$green400",
      px: "$2",
      py: "$4",
      ".sui-box": { bgc: "red" },
    }}
    {...args}
  >
    <Box>Flex item 1</Box>
    <Box>Flex item 2</Box>
    <Box>Flex item 3</Box>
  </Flex>
);
