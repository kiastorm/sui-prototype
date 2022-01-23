import { Box, Circle, Flex, Kbd, Spacer, Square } from "../src";

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
