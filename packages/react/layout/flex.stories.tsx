import { Box, Flex, flexStyles } from ".";
import { Meta } from "@storybook/react";
import React from "react";

const config: Meta<React.ComponentProps<typeof Flex>> = {
  title: "Layout/Flex",
  component: Flex,
  argTypes: {
    ref: {
      table: {
        type: null,
        disable: true,
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
          ...(flexStyles.defaultVariants[current]
            ? { defaultValue: { summary: flexStyles.defaultVariants[current] } }
            : {}),
        },
      };

      return prev;
    }, {}),
  },
};

export default config;

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
