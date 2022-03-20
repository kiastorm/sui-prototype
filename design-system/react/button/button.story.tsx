import {
  FaChevronDown,
  FaEllipsisH,
  FaEllipsisV,
  FaEnvelope,
  FaPhone,
  FaPlus,
} from "react-icons/fa";
import { Button, LinkWithButtonStyles } from ".";
import { ControlGroup } from "../control-group";
import { Container, Flex, InlineFlex } from "../layout";
import { useBooleanToggleLoop } from "../react-utils";
import { ButtonGroup } from "./button-group";
import { IconButton } from "./icon-button";

const config = {
  title: "Forms/Button",
  component: Button,
  decorators: [
    (Story) => (
      <Container css={{ py: "$4" }}>
        <Story />
      </Container>
    ),
  ],
};

export default config;

export const BasicUsage = () => (
  <InlineFlex gap={4}>
    <Button variant="primary">Submit</Button>
    <Button variant="secondary">Cancel</Button>
    <Button variant="ghost-primary">Edit</Button>
    <Button variant="ghost-secondary">user@email.com</Button>
    <Button variant="danger">user@email.com</Button>
  </InlineFlex>
);

export const Sizes = () => (
  <Flex gap={4} direction="column">
    <InlineFlex gap={4}>
      <Button size={1} variant="primary">
        Submit
      </Button>
      <Button size={1} variant="secondary">
        Cancel
      </Button>
      <Button size={1} variant="ghost-primary">
        Edit
      </Button>
      <Button size={1} variant="ghost-secondary">
        user@email.com
      </Button>
      <Button size={1} variant="danger">
        Delete
      </Button>
    </InlineFlex>
    <InlineFlex gap={4}>
      <Button size={2} variant="primary">
        Submit
      </Button>
      <Button size={2} variant="secondary">
        Cancel
      </Button>
      <Button size={2} variant="ghost-primary">
        Edit
      </Button>
      <Button size={2} variant="ghost-secondary">
        user@email.com
      </Button>
      <Button size={2} variant="danger">
        Delete
      </Button>
    </InlineFlex>
    <InlineFlex gap={4}>
      <Button size={3} variant="primary">
        Submit
      </Button>
      <Button size={3} variant="secondary">
        Cancel
      </Button>
      <Button size={3} variant="ghost-primary">
        Edit
      </Button>
      <Button size={3} variant="ghost-secondary">
        user@email.com
      </Button>
      <Button size={3} variant="danger">
        Delete
      </Button>
    </InlineFlex>
  </Flex>
);

export const RenderAsLink = () => (
  <Flex gap={4}>
    <LinkWithButtonStyles variant="primary" href="javascript:;">
      Button
    </LinkWithButtonStyles>
    <LinkWithButtonStyles variant="secondary" href="javascript:;">
      Button
    </LinkWithButtonStyles>
    <LinkWithButtonStyles variant="ghost-primary" href="javascript:;">
      Button
    </LinkWithButtonStyles>
    <LinkWithButtonStyles variant="ghost-secondary" href="javascript:;">
      Button
    </LinkWithButtonStyles>
    <LinkWithButtonStyles variant="danger" href="javascript:;">
      Button
    </LinkWithButtonStyles>
  </Flex>
);

export const Disabled = () => (
  <InlineFlex gap={4}>
    <Button disabled variant="primary">
      Button
    </Button>
    <Button disabled variant="secondary">
      Button
    </Button>
    <Button disabled variant="ghost-primary">
      Button
    </Button>
    <Button disabled variant="ghost-secondary">
      Button
    </Button>
    <Button disabled variant="danger">
      Button
    </Button>
  </InlineFlex>
);

export const Loading = () => {
  const loadingToggleLoop = useBooleanToggleLoop(true);

  return (
    <Flex gap={4} direction="column">
      <InlineFlex gap={4}>
        <Button loading variant="primary">
          Action
        </Button>
        <Button loading variant="secondary">
          Action
        </Button>
        <Button loading variant="ghost-primary">
          Action
        </Button>
        <Button loading variant="ghost-secondary">
          Action
        </Button>
        <Button loading variant="danger">
          Action
        </Button>
      </InlineFlex>
      <InlineFlex gap={4}>
        <Button spinnerPlacement="right" loading variant="primary">
          Action
        </Button>
        <Button spinnerPlacement="right" loading variant="secondary">
          Action
        </Button>
        <Button spinnerPlacement="right" loading variant="ghost-primary">
          Action
        </Button>
        <Button spinnerPlacement="right" loading variant="ghost-secondary">
          Action
        </Button>
        <Button spinnerPlacement="right" loading variant="danger">
          Action
        </Button>
      </InlineFlex>

      <InlineFlex gap={4}>
        <Button
          spinnerPlacement="right"
          loading={loadingToggleLoop}
          loadingText="Loading..."
          variant="primary"
          rightIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          spinnerPlacement="right"
          loading={loadingToggleLoop}
          loadingText="Loading..."
          variant="secondary"
          rightIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          spinnerPlacement="right"
          loading={loadingToggleLoop}
          loadingText="Loading..."
          variant="ghost-primary"
          rightIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          spinnerPlacement="right"
          loading={loadingToggleLoop}
          loadingText="Loading..."
          variant="ghost-secondary"
          rightIcon={<FaPlus />}
        >
          Action
        </Button>
      </InlineFlex>

      <InlineFlex gap={4}>
        <Button
          loading={loadingToggleLoop}
          loadingText="Loading..."
          variant="primary"
          leftIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          loading={loadingToggleLoop}
          loadingText="Loading..."
          variant="secondary"
          leftIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          loading={loadingToggleLoop}
          loadingText="Loading..."
          variant="ghost-primary"
          leftIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          loading={loadingToggleLoop}
          loadingText="Loading..."
          variant="ghost-secondary"
          leftIcon={<FaPlus />}
        >
          Action
        </Button>
      </InlineFlex>

      <InlineFlex gap={4}>
        <Button
          spinnerPlacement="left"
          loading={loadingToggleLoop}
          variant="primary"
          rightIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          spinnerPlacement="left"
          loading={loadingToggleLoop}
          variant="secondary"
          rightIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          spinnerPlacement="left"
          loading={loadingToggleLoop}
          variant="ghost-primary"
          rightIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          spinnerPlacement="left"
          loading={loadingToggleLoop}
          variant="ghost-secondary"
          rightIcon={<FaPlus />}
        >
          Action
        </Button>
      </InlineFlex>

      <InlineFlex gap={4}>
        <Button
          spinnerPlacement="right"
          loading={loadingToggleLoop}
          variant="primary"
          leftIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          spinnerPlacement="right"
          loading={loadingToggleLoop}
          variant="secondary"
          leftIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          spinnerPlacement="right"
          loading={loadingToggleLoop}
          variant="ghost-primary"
          leftIcon={<FaPlus />}
        >
          Action
        </Button>
        <Button
          spinnerPlacement="right"
          loading={loadingToggleLoop}
          variant="ghost-secondary"
          leftIcon={<FaPlus />}
        >
          Action
        </Button>
      </InlineFlex>
    </Flex>
  );
};

export const FullWidth = () => (
  <Flex direction="column" gap={4}>
    <Button fullWidth variant="primary">
      Button
    </Button>
    <Button fullWidth variant="secondary">
      Button
    </Button>
    <Button fullWidth variant="ghost-primary">
      Button
    </Button>
    <Button fullWidth variant="ghost-secondary">
      Button
    </Button>
  </Flex>
);

/**
 * `active` is useful for dropdown menus
 */
export const Active = () => (
  <InlineFlex gap={4}>
    <Button active variant="primary">
      Button
    </Button>
    <Button active variant="secondary">
      Button
    </Button>
    <Button active variant="ghost-primary">
      Button
    </Button>
    <Button active variant="ghost-secondary">
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
      <Button variant="ghost-secondary" rightIcon={<FaChevronDown />}>
        user@email.com
      </Button>
    </InlineFlex>
  </InlineFlex>
);

export const IconOnly = () => (
  <InlineFlex gap={4}>
    <IconButton aria-label="Open menu">
      <FaEllipsisV />
    </IconButton>
    <IconButton variant="secondary" aria-label="Open menu">
      <FaEllipsisV />
    </IconButton>
    <IconButton variant="ghost-primary" aria-label="Open menu">
      <FaEllipsisV />
    </IconButton>
    <IconButton variant="ghost-secondary" aria-label="Open menu">
      <FaEllipsisV />
    </IconButton>
  </InlineFlex>
);

export const WithAttachedIconButton = () => (
  <InlineFlex gap={4}>
    <ControlGroup>
      <Button>Button</Button>
      <IconButton aria-label="IconButton">
        <FaChevronDown />
      </IconButton>
    </ControlGroup>
    <ControlGroup>
      <Button variant="secondary">Button</Button>
      <IconButton variant="secondary" aria-label="IconButton">
        <FaChevronDown />
      </IconButton>
    </ControlGroup>
  </InlineFlex>
);

/**
 * Button Groups allow you to pass the same props to a group of buttons
 */
export const WithButtonGroup = () => {
  return (
    <Flex gap={4} direction="column">
      <ButtonGroup disabled>
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
    <Flex gap={8} direction="column">
      <ControlGroup>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </ControlGroup>

      <ControlGroup>
        <ButtonGroup gap={0} disabled>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </ButtonGroup>
      </ControlGroup>

      <ControlGroup>
        <Button>Hello</Button>
        <Button variant="secondary">Hello</Button>
        <IconButton aria-label="Open menu" variant="secondary">
          <FaEllipsisH />
        </IconButton>
      </ControlGroup>

      <ControlGroup>
        <ButtonGroup gap={0} disabled>
          <Button>Hello</Button>
          <Button variant="secondary">Hello</Button>
          <IconButton aria-label="Open menu" variant="secondary">
            <FaEllipsisH />
          </IconButton>
        </ButtonGroup>
      </ControlGroup>

      <InlineFlex gap={2}>
        <ControlGroup>
          <Button>Button</Button>
          <IconButton aria-label="IconButton">
            <FaChevronDown />
          </IconButton>
        </ControlGroup>
        <ControlGroup>
          <Button variant="secondary">Button</Button>
          <IconButton variant="secondary" aria-label="IconButton">
            <FaChevronDown />
          </IconButton>
        </ControlGroup>
      </InlineFlex>

      <InlineFlex gap={2}>
        <ControlGroup>
          {/* When using a `ButtonGroup` within a `ControlGroup`, you must override the `ButtonGroup`'s default `gap` prop to equal `0` */}
          <ButtonGroup gap={0} disabled>
            <Button>Button</Button>
            <IconButton aria-label="IconButton">
              <FaChevronDown />
            </IconButton>
          </ButtonGroup>
        </ControlGroup>
        <ControlGroup>
          {/* When using a `ButtonGroup` within a `ControlGroup`, you must override the `ButtonGroup`'s default `gap` prop to equal `0` */}
          <ButtonGroup gap={0} disabled>
            <Button variant="secondary">Button</Button>
            <IconButton variant="secondary" aria-label="IconButton">
              <FaChevronDown />
            </IconButton>
          </ButtonGroup>
        </ControlGroup>
      </InlineFlex>
    </Flex>
  );
};
