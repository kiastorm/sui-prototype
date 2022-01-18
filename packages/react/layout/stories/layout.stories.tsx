import { Box, Circle, Flex, Kbd, Spacer, Square } from "../src";

export default {
  title: "Packages / layout",
};

export const box = () => (
  <Box
    css={{
      bgc: "yellow",
      color: "tomato",
      px: "$1",
      py: "$3",
      "&:hover": { bgc: "blue", color: "white" },
    }}
  >
    Welcome to Box
  </Box>
);

export const square = () => (
  <Square size="9" css={{ backgroundColor: "$cyan800" }}>
    Square
  </Square>
);

export const circle = () => (
  <Circle size="9" css={{ backgroundColor: "$cyan800" }}>
    Circle
  </Circle>
);

export const kbd = () => <Kbd>Ctrl + L</Kbd>;

export const spacer = () => (
  <Flex>
    <Box css={{ bgc: "tomato" }}>Left Item</Box>
    <Spacer css={{ textAlign: "center", bgc: "yellow" }}>Spacer</Spacer>
    <Box css={{ bgc: "cyan" }}>Right Item</Box>
  </Flex>
);
