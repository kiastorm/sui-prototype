import { Flex, Square, Circle, squareStyles } from ".";
import React from "react";
import { Meta } from "@storybook/react";

const config: Meta<React.ComponentProps<typeof Square>> = {
  title: "Layout/Square",
  component: Square,
  subcomponents: { Circle },
  argTypes: {
    ref: {
      table: {
        disable: true,
      },
    },
    css: {
      control: "object",
      description: "Theme-aware CSS properties",
    },
    size: {
      control: "select",
      options: Object.keys(squareStyles.variants.size),
      defaultValue: squareStyles.defaultVariants.size,
    },
    shouldCenterContent: {
      control: "boolean",
      table: {
        defaultValue: !!squareStyles.defaultVariants.shouldCenterContent,
      },
    },
  },
};

export default config;

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
