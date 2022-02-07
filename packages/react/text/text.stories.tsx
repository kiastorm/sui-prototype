import { Meta, Story } from "@storybook/react";
import React from "react";
import {
  textStyles,
  Text,
  Quote,
  Ins,
  Em,
  Strong,
  Link,
  Mark,
  Paragraph,
  ListItem,
  Heading,
  Small,
  Deleted,
} from ".";
import { Container, InlineFlex } from "../layout";

const config: Meta<React.ComponentProps<typeof Text>> = {
  title: "Typography/Text",
  component: Text,
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
    ...Object.keys(textStyles.variants).reduce((prev, current) => {
      prev[current] = {
        control: "string",
        table: {
          // type: null,
          ...(textStyles.defaultVariants[current]
            ? {
                defaultValue: {
                  summary: textStyles.defaultVariants[current],
                },
              }
            : {}),
        },
      };

      return prev;
    }, {}),
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
    <Text>Text (span)</Text>
    <Ins>Ins</Ins>
    <Em>Em</Em>
    <Strong>Strong</Strong>
    <Quote>Quote</Quote>
    <Paragraph>Paragraph</Paragraph>
    <ListItem>ListItem</ListItem>
    <Small>Small</Small>
    <Deleted>Deleted</Deleted>
    <Mark>Mark</Mark>
    <Link href="javascript:;">Link</Link>
  </InlineFlex>
);

export const Headings = () => (
  <InlineFlex direction="column" gap={0}>
    <Heading size={1} as="h1">
      Heading Size 1
    </Heading>
    <Heading size={2} as="h2">
      Heading Size 2
    </Heading>
    <Heading size={3} as="h3">
      Heading Size 3
    </Heading>
    <Heading size={4} as="h4">
      Heading Size 4
    </Heading>
  </InlineFlex>
);
