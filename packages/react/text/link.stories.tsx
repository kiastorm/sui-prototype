import { Meta, Story } from "@storybook/react";
import React from "react";
import {
  LinkStyles,
  Link,
  Quote,
  Paragraph,
  ListItem,
  Small,
  Deleted,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from ".";
import { Container, InlineFlex } from "../layout";

const config: Meta<React.ComponentProps<typeof Link>> = {
  title: "Typography/Link",
  component: Link,
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
  },
  decorators: [
    (Story: Story) => (
      <Container css={{ py: "$4" }}>
        <Story />
      </Container>
    ),
  ],
};

export default config;

export const BasicUsage = () => (
  <InlineFlex gap={4}>
    <Link href="javascript:;">I am a link</Link>
  </InlineFlex>
);
