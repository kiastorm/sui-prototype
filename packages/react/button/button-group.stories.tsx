import { Meta, Story } from "@storybook/react";
import { useBooleanToggleLoop } from "../react-utils";
import React from "react";
import { Button, buttonStyles } from ".";
import { Container, Flex, flexStyles } from "../layout";
import { ButtonGroup } from "./button-group";
import { pick } from "../../core/utils";

const config: Meta<React.ComponentProps<typeof Button>> = {
  title: "Forms/ButtonGroup",
  component: ButtonGroup,
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
    ...Object.keys(pick(buttonStyles.variants, ["variant", "size"])).reduce(
      (prev, current) => {
        prev[current] = {
          control: "string",
          table: {
            type: null,
            ...(buttonStyles.defaultVariants[current]
              ? {
                  defaultValue: {
                    summary: buttonStyles.defaultVariants[current],
                  },
                }
              : {}),
          },
        };

        return prev;
      },
      {}
    ),
  },
  decorators: [
    (Story: Story) => (
      <Container css={{ py: "$4" }}>
        <Flex gap={4} direction="column">
          <Story />
        </Flex>
      </Container>
    ),
  ],
};

export default config;

export const BasicUsage = () => {
  const isDisabledLoop = useBooleanToggleLoop(true);
  return (
    <>
      <ButtonGroup isDisabled={isDisabledLoop}>
        <Button>Grouped Action</Button>
        <Button variant="secondary">Grouped Action</Button>
      </ButtonGroup>
    </>
  );
};

/**
 * What happens if the user sets the same prop on both an individual button and it's group?
 * The individual button props should override the group's prop value.
 */
export const OverrideGroupProps = () => {
  return (
    <>
      <ButtonGroup
        variant="secondary"
        size="3"
        isDisabled={false}
        isLoading={false}
        align="center"
      >
        <Button>No overrides</Button>

        <Button size="1" variant="primary">
          Override size and variant
        </Button>

        <Button isDisabled={true}>Override isDisabled</Button>

        <Button isLoading={true}>Override isLoading</Button>
      </ButtonGroup>
    </>
  );
};

export const WithCustomFlexProps = () => (
  <>
    <ButtonGroup>
      <Button variant="secondary">Default</Button>
      <Button>Default</Button>
    </ButtonGroup>

    <ButtonGroup isLoading gap={8}>
      <Button variant="secondary">Custom Gap</Button>
      <Button>Custom Gap</Button>
    </ButtonGroup>

    <ButtonGroup justify="between">
      <Button variant="secondary">Cancel</Button>
      <Button>Submit</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button variant="secondary">Cancel</Button>
      <Button variant="ghost-primary" css={{ ml: "auto" }}>
        Some Other Action
      </Button>
      <Button>Submit</Button>
    </ButtonGroup>
  </>
);
