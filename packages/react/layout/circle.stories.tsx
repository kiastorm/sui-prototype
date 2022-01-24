import { Flex, Circle, Square, circleStyles } from ".";
import React from "react";
import { Meta } from "@storybook/react";

const config: Meta = {
  title: "Design System/Circle",
  component: Circle,
  argTypes: false,
};

export default config;

export const Basic = (args) => (
  <Flex gap="4" wrap="wrap" align="center" css={args.css}>
    {Object.keys(circleStyles.variants.size).map((size) => (
      <Circle key={size} size={size}>
        {size}
      </Circle>
    ))}
  </Flex>
);

Basic.args = {
  css: {
    ".sui-circle": {
      fontWeight: "bold",
      bgc: "$yellow400",
      color: "$yellow800",
      "&:hover": { bgc: "$neutral800", color: "$neutral200" },
    },
  },
};
