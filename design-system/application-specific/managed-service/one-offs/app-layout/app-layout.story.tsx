import { Args } from "@storybook/addons";
import { Meta } from "@storybook/react";
import React from "react";
import "../styles.css";
import { AppLayout, Main } from "./app-layout";

export default {
  title: "Managed Service / App Layout / Navigation",
  argTypes: {
    navigationAccordionType: {
      options: ["single", "multiple"],
      control: { type: "radio" },
    },
  },
  args: {
    shouldAnimateNavigationAccordion: true,
  },
} as Meta<AppLayoutProps>;

type AppLayoutProps = React.ComponentProps<typeof AppLayout>;

export const WithSingleAccordionType = (args: AppLayoutProps) => {
  console.log(args);
  return (
    <AppLayout {...args}>
      <Main>Hello</Main>
    </AppLayout>
  );
};

WithSingleAccordionType.argTypes = {
  navigationAccordionType: { defaultValue: "single" },
};

export const WithMultipleAccordionType = (args: AppLayoutProps) => {
  console.log(args);
  return (
    <AppLayout {...args}>
      <Main>Hello</Main>
    </AppLayout>
  );
};

WithMultipleAccordionType.argTypes = {
  navigationAccordionType: { defaultValue: "multiple" },
};
