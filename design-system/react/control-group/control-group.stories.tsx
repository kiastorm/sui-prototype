import { FaCheck, FaChevronDown, FaEllipsisH, FaPlus } from "react-icons/fa";
import { Button, ButtonGroup, IconButton } from "../button";
import { Container, Flex, InlineFlex } from "../layout";
import { ControlGroup } from "./control-group";

export default {
  title: "Design System/Forms/ControlGroup",
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
  },
  decorators: [
    (Story) => (
      <Container css={{ py: "$4" }}>
        <Flex gap={4} direction="column">
          <Story />
        </Flex>
      </Container>
    ),
  ],
};

/**
 * Control Groups visually attach a group of form controls (inputs, selects, buttons) together
 */
export const AttachedButtons = () => {
  return (
    <Flex gap={8} direction="column">
      <ControlGroup>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </ControlGroup>

      <ControlGroup>
        <Button>Hello</Button>
        <Button variant="secondary">Hello</Button>
        <IconButton aria-label="Open menu" variant="secondary">
          <FaEllipsisH />
        </IconButton>
      </ControlGroup>

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
