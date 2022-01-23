import React from "react";
import { Box, Circle, Square } from "../src";

const config = {
  title: "Design System/Box",
  component: Box,
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

const Template = (props) => <Box {...props} />;

export const basic = Template.bind({});

basic.args = {
  as: "marquee",
  css: {
    bgc: "$neutral200",
    color: "$neutral800",
    px: "$2",
    py: "$4",
    "&:hover": { bgc: "$neutral800", color: "$neutral200" },
  },
  children: "I am a Box",
};
