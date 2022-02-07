import { Meta, Story } from "@storybook/react";
import React from "react";
import { Heading, Title, H1, H2, H3, H4, H5, H6, textStyles } from ".";
import { Container, InlineFlex } from "../layout";

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements

const config: Meta<React.ComponentProps<typeof H1>> = {
  title: "Typography/Heading",
  component: H1,
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
  <InlineFlex direction="column" gap={0}>
    <Heading size={1}>Heading Size 1</Heading>
    <Heading size={2}>Heading Size 2</Heading>
    <Heading size={3}>Heading Size 3</Heading>
    <Heading size={4}>Heading Size 4</Heading>
    <Heading size={5}>Heading Size 5</Heading>
    <Heading size={6}>Heading Size 6</Heading>
    <Heading size={7}>Heading Size 7</Heading>
    <Heading size={8}>Heading Size 8</Heading>
    <Heading size={9}>Heading Size 9</Heading>
  </InlineFlex>
);

export const Titles = () => (
  <InlineFlex direction="column" gap={0}>
    <Title>I am a title. There should only be one of me per page.</Title>
  </InlineFlex>
);
// `H1`, `H2` are lower-level components that render the wanted HTML element
// but, unlike `Heading`, it has access to all the same variants as `Text`.
// It is identical to the `Text` component except in what HTML element it renders.
// This is useful if you want to render a <h2> for semanticity that has a different visual style to other headings
export const Custom = () => (
  <InlineFlex direction="column" gap={4}>
    <H1 size={1} css={{ color: "tomato" }}>
      Heading 1
    </H1>
    <H2 size={11}>Heading 2</H2>
    <H3 size={1}>Heading 3</H3>
    <H4 size={13} css={{ color: "$neutral900" }}>
      Heading 4
    </H4>
    <H5 size={2} css={{ fontWeight: "bold" }}>
      Heading 5
    </H5>
    <H6 size={12}>Heading 6</H6>
  </InlineFlex>
);
