import { Flex, Circle, Square, circleStyles } from ".";
import React from "react";

const config = {
  title: "Design System/Circle",
  component: Circle,
  argTypes: {
    as: {
      control: "text",
      description: "What element to render as",
    },
    ref: {
      table: {
        disable: true,
      },
    },
    css: {
      control: "object",
      description: "Theme-aware CSS properties",
    },
  },
};

export default config;

export const basic = (args) => (
  <Flex gap="4" wrap="wrap" align="center" css={args.css}>
    {Object.keys(circleStyles.variants.size).map((size) => (
      <Circle key={size} size={size}>
        {size}
      </Circle>
    ))}
  </Flex>
);

basic.args = {
  css: {
    ".sui-circle": {
      fontWeight: "bold",
      bgc: "$yellow400",
      color: "$yellow800",
      "&:hover": { bgc: "$neutral800", color: "$neutral200" },
    },
  },
};
