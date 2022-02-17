import { FaCheck, FaTimes } from "react-icons/fa";
import { Button, IconButton } from ".";
import { Container, Flex, Spacer } from "../layout";
import { useBooleanToggleLoop } from "../react-utils";
import { ButtonGroup } from "./button-group";

export default {
  title: "Forms/ButtonGroup",
  decorators: [
    (Story: Function) => (
      <Container>
        <Flex gap={4} direction="column">
          {Story()}
        </Flex>
      </Container>
    ),
  ],
};

export const DisableGroup = () => {
  const disabledLoop = useBooleanToggleLoop(true);
  return (
    <>
      <ButtonGroup disabled={disabledLoop}>
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
      <ButtonGroup disabled align="center">
        <Button>No overrides</Button>
        <IconButton aria-label="No overrides">
          <FaTimes />
        </IconButton>

        <Button disabled={false}>Overrides disabled</Button>
        <IconButton disabled={false} aria-label="Overrides disabled">
          <FaCheck />
        </IconButton>
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

    <ButtonGroup gap={8}>
      <Button variant="secondary">Custom Gap</Button>
      <Button>Custom Gap</Button>
    </ButtonGroup>

    <ButtonGroup justify="between">
      <Button variant="secondary">Cancel</Button>
      <Button>Submit</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button variant="secondary">Cancel</Button>
      <Spacer />
      <Button variant="ghost-primary">Some Other Action</Button>
      <Button>Submit</Button>
    </ButtonGroup>
  </>
);
