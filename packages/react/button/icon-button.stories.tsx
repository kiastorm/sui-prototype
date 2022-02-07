import { Meta, Story } from "@storybook/react";
import React from "react";
import {
  FaCheck,
  FaChevronDown,
  FaEllipsisH,
  FaPen,
  FaPlus,
  FaQuestion,
  FaTimes,
} from "react-icons/fa";
import { Button, IconButton, IconButtonAsLink, iconButtonStyles } from ".";
import { ControlGroup } from "../control-group";
import { Container, Flex, InlineFlex } from "../layout";
import { useBooleanToggleLoop } from "../react-utils";
import { ButtonGroup } from "./button-group";

const config: Meta<React.ComponentProps<typeof IconButton>> = {
  title: "Forms/IconButton",
  component: IconButton,
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
    ...Object.keys(iconButtonStyles.variants).reduce((prev, current) => {
      prev[current] = {
        control: "string",
        table: {
          // type: null,
          ...(iconButtonStyles.defaultVariants[current]
            ? {
                defaultValue: {
                  summary: iconButtonStyles.defaultVariants[current],
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
    <IconButton aria-label="Open menu" variant="primary">
      <FaCheck />
    </IconButton>
    <IconButton aria-label="Open menu" variant="secondary">
      <FaEllipsisH />
    </IconButton>
    <IconButton aria-label="Edit something" variant="ghost-primary">
      <FaPen />
    </IconButton>
    <IconButton aria-label="Close menu" variant="ghost-secondary">
      <FaTimes />
    </IconButton>
  </InlineFlex>
);

export const Round = () => (
  <InlineFlex gap={4}>
    <IconButton isRound aria-label="Open menu" variant="primary">
      <FaCheck />
    </IconButton>
    <IconButton isRound aria-label="Open menu" variant="secondary">
      <FaEllipsisH />
    </IconButton>
    <IconButton isRound aria-label="Edit something" variant="ghost-primary">
      <FaPen />
    </IconButton>
    <IconButton isRound aria-label="Close menu" variant="ghost-secondary">
      <FaTimes />
    </IconButton>
  </InlineFlex>
);

export const Sizes = () => (
  <Flex gap={4} direction="column">
    <InlineFlex gap={4}>
      <IconButton size={1} variant="primary" aria-label="">
        <FaCheck />
      </IconButton>
      <IconButton size={1} variant="secondary" aria-label="">
        <FaEllipsisH />
      </IconButton>
      <IconButton size={1} variant="ghost-primary" aria-label="">
        <FaPen />
      </IconButton>
      <IconButton size={1} variant="ghost-secondary" aria-label="">
        <FaTimes />
      </IconButton>
    </InlineFlex>
    <InlineFlex gap={4}>
      <IconButton size={2} variant="primary" aria-label="">
        <FaCheck />
      </IconButton>
      <IconButton size={2} variant="secondary" aria-label="">
        <FaEllipsisH />
      </IconButton>
      <IconButton size={2} variant="ghost-primary" aria-label="">
        <FaPen />
      </IconButton>
      <IconButton size={2} variant="ghost-secondary" aria-label="">
        <FaTimes />
      </IconButton>
    </InlineFlex>
    <InlineFlex gap={4}>
      <IconButton size={3} variant="primary" aria-label="">
        <FaCheck />
      </IconButton>
      <IconButton size={3} variant="secondary" aria-label="">
        <FaEllipsisH />
      </IconButton>
      <IconButton size={3} variant="ghost-primary" aria-label="">
        <FaPen />
      </IconButton>
      <IconButton size={3} variant="ghost-secondary" aria-label="">
        <FaTimes />
      </IconButton>
    </InlineFlex>
  </Flex>
);

export const RenderAsLink = () => (
  <Flex gap={4}>
    <IconButtonAsLink
      aria-label="Open menu"
      variant="primary"
      href="javascript:;"
    >
      <FaEllipsisH />
    </IconButtonAsLink>
    <IconButtonAsLink
      aria-label="Open menu"
      variant="secondary"
      href="javascript:;"
    >
      <FaEllipsisH />
    </IconButtonAsLink>
    <IconButtonAsLink
      aria-label="Open menu"
      variant="ghost-primary"
      href="javascript:;"
    >
      <FaEllipsisH />
    </IconButtonAsLink>
    <IconButtonAsLink
      aria-label="Open menu"
      variant="ghost-secondary"
      href="javascript:;"
    >
      <FaEllipsisH />
    </IconButtonAsLink>
  </Flex>
);

export const Disabled = () => {
  const isDisabledToggleLoop = useBooleanToggleLoop(true);

  return (
    <Flex gap={4} direction="column">
      <InlineFlex gap={4}>
        <IconButton aria-label="Open menu" isDisabled variant="primary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" isDisabled variant="secondary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" isDisabled variant="ghost-primary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" isDisabled variant="ghost-secondary">
          <FaEllipsisH />
        </IconButton>
      </InlineFlex>

      <InlineFlex gap={4}>
        <IconButton
          aria-label="Open menu"
          isDisabled={isDisabledToggleLoop}
          variant="primary"
        >
          <FaEllipsisH />
        </IconButton>
        <IconButton
          aria-label="Open menu"
          isDisabled={isDisabledToggleLoop}
          variant="secondary"
        >
          <FaEllipsisH />
        </IconButton>
        <IconButton
          aria-label="Open menu"
          isDisabled={isDisabledToggleLoop}
          variant="ghost-primary"
        >
          <FaEllipsisH />
        </IconButton>
        <IconButton
          aria-label="Open menu"
          isDisabled={isDisabledToggleLoop}
          variant="ghost-secondary"
        >
          <FaEllipsisH />
        </IconButton>
      </InlineFlex>
    </Flex>
  );
};

export const Loading = () => {
  const isLoadingToggleLoop = useBooleanToggleLoop(true);

  return (
    <Flex gap={4} direction="column">
      <InlineFlex gap={4}>
        <IconButton aria-label="Open menu" isLoading variant="primary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" isLoading variant="secondary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" isLoading variant="ghost-primary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" isLoading variant="ghost-secondary">
          <FaEllipsisH />
        </IconButton>
      </InlineFlex>

      <InlineFlex gap={4}>
        <IconButton
          aria-label="Open menu"
          isLoading={isLoadingToggleLoop}
          variant="primary"
        >
          <FaEllipsisH />
        </IconButton>
        <IconButton
          aria-label="Open menu"
          isLoading={isLoadingToggleLoop}
          variant="secondary"
        >
          <FaEllipsisH />
        </IconButton>
        <IconButton
          aria-label="Open menu"
          isLoading={isLoadingToggleLoop}
          variant="ghost-primary"
        >
          <FaEllipsisH />
        </IconButton>
        <IconButton
          aria-label="Open menu"
          isLoading={isLoadingToggleLoop}
          variant="ghost-secondary"
        >
          <FaEllipsisH />
        </IconButton>
      </InlineFlex>
    </Flex>
  );
};

/**
 * `isActive` is useful for dropdown menus
 */

export const Active = () => {
  const isActiveToggleLoop = useBooleanToggleLoop(true);

  return (
    <Flex gap={4} direction="column">
      <InlineFlex gap={4}>
        <IconButton aria-label="Open menu" isActive variant="primary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" isActive variant="secondary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" isActive variant="ghost-primary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" isActive variant="ghost-secondary">
          <FaEllipsisH />
        </IconButton>
      </InlineFlex>

      <InlineFlex gap={4}>
        <IconButton
          aria-label="Open menu"
          isActive={isActiveToggleLoop}
          variant="primary"
        >
          <FaEllipsisH />
        </IconButton>
        <IconButton
          aria-label="Open menu"
          isActive={isActiveToggleLoop}
          variant="secondary"
        >
          <FaEllipsisH />
        </IconButton>
        <IconButton
          aria-label="Open menu"
          isActive={isActiveToggleLoop}
          variant="ghost-primary"
        >
          <FaEllipsisH />
        </IconButton>
        <IconButton
          aria-label="Open menu"
          isActive={isActiveToggleLoop}
          variant="ghost-secondary"
        >
          <FaEllipsisH />
        </IconButton>
      </InlineFlex>
    </Flex>
  );
};

export const WithButtonGroup = () => {
  return (
    <Flex gap={4} direction="column">
      <ButtonGroup isDisabled>
        <IconButton aria-label="Open menu" variant="secondary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu">
          <FaEllipsisH />
        </IconButton>
      </ButtonGroup>

      <ButtonGroup gap={6}>
        <IconButton aria-label="Open menu" variant="secondary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" variant="secondary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu">
          <FaEllipsisH />
        </IconButton>
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
        <IconButton aria-label="Open menu">
          <FaCheck />
        </IconButton>
        <IconButton aria-label="Open menu" variant="secondary">
          <FaPlus />
        </IconButton>
        <IconButton aria-label="Open menu" variant="secondary">
          <FaEllipsisH />
        </IconButton>
      </ControlGroup>

      <ControlGroup>
        <Button>Action</Button>
        <IconButton aria-label="Open menu">
          <FaChevronDown />
        </IconButton>
      </ControlGroup>

      <ControlGroup>
        <Button variant="secondary">Action</Button>
        <IconButton variant="secondary" aria-label="Open menu">
          <FaChevronDown />
        </IconButton>
      </ControlGroup>

      <ControlGroup>
        {/* When using a `ButtonGroup` within a `ControlGroup`, you must override the `ButtonGroup`'s default `gap` prop to equal `0` */}
        <ButtonGroup gap={0} isDisabled>
          <IconButton aria-label="Open menu">
            <FaEllipsisH />
          </IconButton>
          <IconButton aria-label="Open menu" variant="secondary">
            <FaEllipsisH />
          </IconButton>
        </ButtonGroup>
      </ControlGroup>
    </Flex>
  );
};

export const Custom = () => {
  const isActive = useBooleanToggleLoop(true);
  return (
    <IconButton
      aria-label=""
      variant={0}
      size={0}
      isRound
      css={{
        width: "$12",
        height: "$12",
        bgc: "$neutral800",
        color: "$neutral0",

        "&:hover": {
          bgc: "$neutral700",
        },
        "&:focus": {
          background: "$neutral900",
          boxShadow: "0px 0px 0px 2px $colors$purple400",
        },
        "&:active": {
          bgc: "$neutral800",
          boxShadow: "0px 0px 0px 2px $colors$purple400",
        },

        ...(isActive
          ? {
              bgc: "$neutral800",
            }
          : {}),
      }}
    >
      <FaQuestion />
    </IconButton>
  );
};
