import { Meta, Story } from "@storybook/react";
import { ButtonGroup } from "./button-group";
import React from "react";
import { FaEnvelope, FaPhone, FaPlus } from "react-icons/fa";
import { Button, ButtonAsLink, buttonStyles } from ".";
import { ControlGroup } from "../control-group";
import { Container, Flex, InlineFlex } from "../layout";
import { useBooleanToggleLoop } from "../react-utils";
import { Select } from "../select";
import { Input } from "../input";

const config: Meta<React.ComponentProps<typeof Button>> = {
  title: "Forms/Button",
  component: Button,
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
    ...Object.keys(buttonStyles.variants).reduce((prev, current) => {
      prev[current] = {
        control: "string",
        table: {
          // type: null,
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

export const Variants = () => (
  <InlineFlex gap={4}>
    <Button variant="primary">Button</Button>
    <Button variant="secondary">Button</Button>
    <Button variant="ghost-primary">Button</Button>
    <Button variant="ghost-secondary">Button</Button>
  </InlineFlex>
);

export const RenderAsLink = () => (
  <Flex gap={4}>
    <ButtonAsLink variant="primary" href="javascript:;">
      Button
    </ButtonAsLink>
    <ButtonAsLink variant="secondary" href="javascript:;">
      Button
    </ButtonAsLink>
    <ButtonAsLink variant="ghost-primary" href="javascript:;">
      Button
    </ButtonAsLink>
    <ButtonAsLink variant="ghost-secondary" href="javascript:;">
      Button
    </ButtonAsLink>
  </Flex>
);
export const Disabled = () => (
  <InlineFlex gap={4}>
    <Button isDisabled variant="primary">
      Button
    </Button>
    <Button isDisabled variant="secondary">
      Button
    </Button>
    <Button isDisabled variant="ghost-primary">
      Button
    </Button>
    <Button isDisabled variant="ghost-secondary">
      Button
    </Button>
  </InlineFlex>
);

export const Loading = () => {
  const isLoadingToggleLoop = useBooleanToggleLoop(true);
  const isLoading = true;

  return (
    <Flex gap={4} direction="column">
      <InlineFlex gap={4}>
        <Button isLoading variant="primary">
          Action
        </Button>
        <Button isLoading variant="secondary">
          Action
        </Button>
        <Button isLoading variant="ghost-primary">
          Action
        </Button>
        <Button isLoading variant="ghost-secondary">
          Action
        </Button>
      </InlineFlex>
      <InlineFlex gap={4}>
        <Button spinnerPlacement="end" isLoading variant="primary">
          Action
        </Button>
        <Button spinnerPlacement="end" isLoading variant="secondary">
          Action
        </Button>
        <Button spinnerPlacement="end" isLoading variant="ghost-primary">
          Action
        </Button>
        <Button spinnerPlacement="end" isLoading variant="ghost-secondary">
          Action
        </Button>
      </InlineFlex>

      <InlineFlex gap={4}>
        <Button
          spinnerPlacement="end"
          isLoading={isLoadingToggleLoop}
          loadingText="Loading..."
          variant="primary"
          rightIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          spinnerPlacement="end"
          isLoading={isLoadingToggleLoop}
          loadingText="Loading..."
          variant="secondary"
          rightIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          spinnerPlacement="end"
          isLoading={isLoadingToggleLoop}
          loadingText="Loading..."
          variant="ghost-primary"
          rightIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          spinnerPlacement="end"
          isLoading={isLoadingToggleLoop}
          loadingText="Loading..."
          variant="ghost-secondary"
          rightIcon={<FaPlus />}
        >
          Action
        </Button>
      </InlineFlex>

      <InlineFlex gap={4}>
        <Button
          isLoading={isLoadingToggleLoop}
          loadingText="Loading..."
          variant="primary"
          leftIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          isLoading={isLoadingToggleLoop}
          loadingText="Loading..."
          variant="secondary"
          leftIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          isLoading={isLoadingToggleLoop}
          loadingText="Loading..."
          variant="ghost-primary"
          leftIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          isLoading={isLoadingToggleLoop}
          loadingText="Loading..."
          variant="ghost-secondary"
          leftIcon={<FaPlus />}
        >
          Action
        </Button>
      </InlineFlex>

      <InlineFlex gap={4}>
        <Button
          spinnerPlacement="start"
          isLoading={isLoadingToggleLoop}
          variant="primary"
          rightIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          spinnerPlacement="start"
          isLoading={isLoadingToggleLoop}
          variant="secondary"
          rightIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          spinnerPlacement="start"
          isLoading={isLoadingToggleLoop}
          variant="ghost-primary"
          rightIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          spinnerPlacement="start"
          isLoading={isLoadingToggleLoop}
          variant="ghost-secondary"
          rightIcon={<FaPlus />}
        >
          Action
        </Button>
      </InlineFlex>

      <InlineFlex gap={4}>
        <Button
          spinnerPlacement="end"
          isLoading={isLoadingToggleLoop}
          variant="primary"
          leftIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          spinnerPlacement="end"
          isLoading={isLoadingToggleLoop}
          variant="secondary"
          leftIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          spinnerPlacement="end"
          isLoading={isLoadingToggleLoop}
          variant="ghost-primary"
          leftIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          spinnerPlacement="end"
          isLoading={isLoadingToggleLoop}
          variant="ghost-secondary"
          leftIcon={<FaPlus />}
        >
          Action
        </Button>
      </InlineFlex>
    </Flex>
  );
};

/**
 * `isActive` is useful for dropdown menus
 */
export const Active = () => (
  <InlineFlex gap={4}>
    <Button isActive variant="primary">
      Button
    </Button>
    <Button isActive variant="secondary">
      Button
    </Button>
    <Button isActive variant="ghost-primary">
      Button
    </Button>
    <Button isActive variant="ghost-secondary">
      Button
    </Button>
  </InlineFlex>
);

export const WithIcon = () => (
  <InlineFlex direction="column" gap={4}>
    <InlineFlex gap={4}>
      <Button leftIcon={<FaEnvelope />}>Email</Button>
      <Button rightIcon={<FaPhone />}>Call us</Button>
    </InlineFlex>
    <InlineFlex gap={4}>
      <Button variant="secondary" leftIcon={<FaEnvelope />}>
        Email
      </Button>
      <Button variant="secondary" rightIcon={<FaPhone />}>
        Call us
      </Button>
    </InlineFlex>
    <InlineFlex gap={4}>
      <Button variant="ghost-primary" leftIcon={<FaEnvelope />}>
        Email
      </Button>
      <Button variant="ghost-primary" rightIcon={<FaPhone />}>
        Call us
      </Button>
    </InlineFlex>
    <InlineFlex gap={4}>
      <Button variant="ghost-secondary" leftIcon={<FaEnvelope />}>
        Email
      </Button>
      <Button variant="ghost-secondary" rightIcon={<FaPhone />}>
        Call us
      </Button>
    </InlineFlex>
  </InlineFlex>
);

/**
 * Button Groups allow you to pass the same props to a group of buttons
 */
export const WithButtonGroup = () => {
  return (
    <Flex gap={4} direction="column">
      <ButtonGroup isDisabled>
        <Button variant="secondary">Hello</Button>
        <Button>Hello</Button>
      </ButtonGroup>

      <ButtonGroup gap={6}>
        <Button variant="secondary">Hello</Button>
        <Button variant="secondary">Hello</Button>
        <Button>Hello</Button>
      </ButtonGroup>
    </Flex>
  );
};

/**
 * Control Groups visually attach a group of form controls (inputs, selects, buttons) together
 */
export const WithControlGroup = () => {
  return (
    <Flex gap={4} direction="column">
      <ControlGroup>
        <Button>Hello</Button>
        <Button variant="secondary">Hello</Button>
        <Button variant="secondary">Hello</Button>
      </ControlGroup>

      <ControlGroup>
        {/* When using a `ButtonGroup` within a `ControlGroup`, you must override the `ButtonGroup`'s default `gap` prop to equal `0` */}
        <ButtonGroup gap={0} isDisabled>
          <Button>Hello</Button>
          <Button variant="secondary">Hello</Button>
        </ButtonGroup>
      </ControlGroup>

      <ControlGroup>
        <Select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </Select>
        <Input />
        <Button variant="primary">Hello</Button>
      </ControlGroup>
      <ControlGroup>
        <Input />
        <Select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </Select>
        <Button variant="primary">Hello</Button>
      </ControlGroup>

      <ControlGroup>
        <Button variant="primary">Hello</Button>
        <Input />
        <Select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </Select>
      </ControlGroup>
    </Flex>
  );
};
