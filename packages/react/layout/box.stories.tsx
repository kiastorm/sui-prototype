import { Story } from "@storybook/react";
import { Box } from ".";

const config = {
  title: "Layout/Box",
  component: Box,
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
  },
};

export default config;

const Template: Story = (props: any) => <Box {...props} />;

export const Basic = Template.bind({});

Basic.args = {
  css: {
    bgc: "$neutral200",
    color: "$neutral800",
    px: "$2",
    py: "$4",
    "&:hover": { bgc: "$neutral800", color: "$neutral200" },
  },
  children: "I am a Box",
};
