import { Circle, Container, Flex } from ".";

export default {
  title: "Layout/Flex",
  decorators: [(Story: Function) => <Container>{Story()}</Container>],
};

export const Sizes = (args) => (
  <Flex
    gap="4"
    wrap="wrap"
    align="center"
    css={{
      ".sui-circle": {
        fontWeight: "bold",
        bgc: "$yellow400",
        color: "$yellow800",
        "&:hover": { bgc: "$neutral800", color: "$neutral200" },
      },
    }}
  >
    {/* Circles go from size 4 to 20 */}
    <Circle size={4}>4</Circle>
    <Circle size={5}>5</Circle>
    <Circle size={6}>6</Circle>
    <Circle size={7}>7</Circle>
    <Circle size={8}>8</Circle>
    <Circle size={9}>9</Circle>
    <Circle size={10}>10</Circle>
    <Circle size={11}>11</Circle>
    <Circle size={12}>12</Circle>
    <Circle size={13}>13</Circle>
    <Circle size={14}>14</Circle>
    <Circle size={15}>15</Circle>
    <Circle size={16}>16</Circle>
    <Circle size={17}>17</Circle>
    <Circle size={18}>18</Circle>
    <Circle size={19}>19</Circle>
    <Circle size={20}>20</Circle>
  </Flex>
);
