import { Flex, Square, Circle, squareStyles } from ".";
import React from "react";
import { Meta } from "@storybook/react";

export default {
  title: "Design System/Layout/Square",
  component: Square,
};

export const Basic = ({ css, ...rest }) => (
  <Flex gap="4" wrap="wrap" align="center" css={css}>
    <Square {...rest}>{rest.size}</Square>
  </Flex>
);

Basic.args = {
  css: {
    ".sui-square": {
      fontWeight: "bold",
      bgc: "$purple400",
      color: "$purple800",
      "&:hover": { bgc: "$neutral800", color: "$neutral200" },
    },
  },
};
