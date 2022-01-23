import { Box, Flex, flexStyles } from "../src";
import { Meta } from "@storybook/react";
import React from "react";

const config: Meta<React.ComponentProps<typeof Flex>> = {
  title: "Design System/Flex",
  component: Flex,
  subcomponents: { Box },
  argTypes: {
    ref: {
      table: {
        type: null,
        disable: true,
      },
    },
    as: {
      control: "text",
      description: "What element to render as",
      table: {
        type: null,
        defaultValue: { summary: "div" },
      },
    },
    css: {
      control: "object",
      table: {
        type: null,
      },
      description: "Theme-aware CSS",
    },
    ...Object.keys(flexStyles.variants).reduce((prev, current) => {
      prev[current] = {
        control: "string",
        table: {
          type: null,
          ...(!!flexStyles.defaultVariants[current]
            ? { defaultValue: { summary: flexStyles.defaultVariants[current] } }
            : {}),
        },
      };

      return prev;
    }, {}),
  },
};

export default config;

export const basic = (args) => (
  <Flex {...args}>
    <Box>Flex item 1</Box>
    <Box>Flex item 2</Box>
    <Box>Flex item 3</Box>
  </Flex>
);

basic.args = {
  css: {
    bgc: "$green400",
    px: "$2",
    py: "$4",
    ".sui-box": { bgc: "$yellow400" },
  },
};
