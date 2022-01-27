import { useEffect } from "@storybook/addons";
import React from "react";
import { button, Button, ButtonAsLink, buttonStyles } from ".";
import { InlineFlex, Flex, Container } from "../layout";
import { useBooleanToggleLoop } from "../react-utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEnvelope, FaPhone, FaPlus, FaTwitter } from "react-icons/fa";
import { Meta } from "@storybook/react";

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
};

export default config;

export const Variants = () => (
  <Container css={{ py: "$4" }}>
    <InlineFlex gap={4}>
      <Button variant="primary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="ghost-primary">Button</Button>
      <Button variant="ghost-secondary">Button</Button>
    </InlineFlex>
  </Container>
);

export const RenderAsLink = () => (
  <Container css={{ py: "$4" }}>
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
  </Container>
);
export const Disabled = () => (
  <Container css={{ py: "$4" }}>
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
  </Container>
);

export const Loading = () => {
  const isLoadingToggleLoop = useBooleanToggleLoop(true);
  const isLoading = true;

  return (
    <Container css={{ py: "$4" }}>
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
    </Container>
  );
};

/**
 * `isActive` is useful for dropdown menus
 */
export const Active = () => (
  <Container css={{ py: "$4" }}>
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
  </Container>
);

export const WithIcon = () => (
  <Container css={{ py: "$4" }}>
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
  </Container>
);
