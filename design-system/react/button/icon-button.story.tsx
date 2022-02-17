import {
  FaCheck,
  FaChevronDown,
  FaEllipsisH,
  FaPen,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import { Button, IconButton, LinkWithIconButtonStyles } from ".";
import { ControlGroup } from "../control-group";
import { Container, Flex, InlineFlex } from "../layout";
import { useBooleanToggleLoop } from "../react-utils";
import { ButtonGroup } from "./button-group";

export default {
  title: "Forms/IconButton",
  decorators: [(Story: Function) => <Container>{Story()}</Container>],
};

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
    <IconButton round aria-label="Open menu" variant="primary">
      <FaCheck />
    </IconButton>
    <IconButton round aria-label="Open menu" variant="secondary">
      <FaEllipsisH />
    </IconButton>
    <IconButton round aria-label="Edit something" variant="ghost-primary">
      <FaPen />
    </IconButton>
    <IconButton round aria-label="Close menu" variant="ghost-secondary">
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
      <IconButton size={3} round variant="secondary" aria-label="">
        <FaEllipsisH />
      </IconButton>
      <IconButton size={3} round variant="contrast" aria-label="">
        <FaPen />
      </IconButton>
    </InlineFlex>
  </Flex>
);

export const RenderAsLink = () => (
  <Flex gap={4}>
    <LinkWithIconButtonStyles
      aria-label="Open menu"
      variant="primary"
      href="javascript:;"
    >
      <FaEllipsisH />
    </LinkWithIconButtonStyles>
    <LinkWithIconButtonStyles
      aria-label="Open menu"
      variant="secondary"
      href="javascript:;"
    >
      <FaEllipsisH />
    </LinkWithIconButtonStyles>
    <LinkWithIconButtonStyles
      aria-label="Open menu"
      variant="ghost-primary"
      href="javascript:;"
    >
      <FaEllipsisH />
    </LinkWithIconButtonStyles>
    <LinkWithIconButtonStyles
      aria-label="Open menu"
      variant="ghost-secondary"
      href="javascript:;"
    >
      <FaEllipsisH />
    </LinkWithIconButtonStyles>
  </Flex>
);

export const Disabled = () => {
  return (
    <Flex gap={4} direction="column">
      <InlineFlex gap={4}>
        <IconButton aria-label="Open menu" disabled variant="primary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" disabled variant="secondary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" disabled variant="ghost-primary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" disabled variant="ghost-secondary">
          <FaEllipsisH />
        </IconButton>
      </InlineFlex>
    </Flex>
  );
};

export const Loading = () => {
  const loadingToggleLoop = useBooleanToggleLoop(true);

  return (
    <Flex gap={4} direction="column">
      <InlineFlex gap={4}>
        <IconButton aria-label="Open menu" loading variant="primary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" loading variant="secondary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" loading variant="ghost-primary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" loading variant="ghost-secondary">
          <FaEllipsisH />
        </IconButton>
      </InlineFlex>

      <InlineFlex gap={4}>
        <IconButton
          aria-label="Open menu"
          loading={loadingToggleLoop}
          variant="primary"
        >
          <FaEllipsisH />
        </IconButton>
        <IconButton
          aria-label="Open menu"
          loading={loadingToggleLoop}
          variant="secondary"
        >
          <FaEllipsisH />
        </IconButton>
        <IconButton
          aria-label="Open menu"
          loading={loadingToggleLoop}
          variant="ghost-primary"
        >
          <FaEllipsisH />
        </IconButton>
        <IconButton
          aria-label="Open menu"
          loading={loadingToggleLoop}
          variant="ghost-secondary"
        >
          <FaEllipsisH />
        </IconButton>
      </InlineFlex>
    </Flex>
  );
};

/**
 * `active` is useful for dropdown menus
 */

export const Active = () => {
  return (
    <Flex gap={4} direction="column">
      <InlineFlex gap={4}>
        <IconButton aria-label="Open menu" active variant="primary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" active variant="secondary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" active variant="ghost-primary">
          <FaEllipsisH />
        </IconButton>
        <IconButton aria-label="Open menu" active variant="ghost-secondary">
          <FaEllipsisH />
        </IconButton>
      </InlineFlex>
    </Flex>
  );
};

export const WithButtonGroup = () => {
  return (
    <Flex gap={4} direction="column">
      <ButtonGroup disabled>
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
        <ButtonGroup gap={0} disabled>
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
