import { Flex } from "@singlestore-ui/react-layout";
import { Button } from "../src";

export default {
  title: "Packages/button/Button",
};

export const basic = () => (
  <>
    <Button>Button</Button>
  </>
);

export const WithIcon = () => (
  <Flex gap={4}>
    <Button leftIcon={<div>icon</div>}>Email</Button>
    <Button rightIcon={<div>icon</div>}>Call us</Button>
  </Flex>
);

export const withReactIcons = () => (
  <Flex direction="row" gap={4} align="center">
    <Button leftIcon={<div>icon</div>}>Settings</Button>
    <Button rightIcon={<div>icon</div>}>Call us</Button>
  </Flex>
);

export const WithLoading = () => (
  <Flex gap={4} align="center">
    <Button size="lg" isLoading>
      Email
    </Button>

    <Button isLoading spinner={<div>icon</div>}>
      Click me
    </Button>

    <Button isLoading loadingText="Submitting...">
      Submit
    </Button>
  </Flex>
);

export const WithLoadingSpinnerPlacement = () => (
  <Flex direction="row" gap={4} align="center">
    <Button isLoading loadingText="Loading" spinnerPosition="start">
      Submit
    </Button>
    <Button isLoading loadingText="Loading" spinnerPlacement="end">
      Continue
    </Button>
  </Flex>
);

export const withDisabled = () => (
  <Flex gap={4}>
    <Button isDisabled>Button</Button>
    <Button isDisabled>Button</Button>
    <Button isDisabled>Button</Button>
    <Button isDisabled>Button</Button>
  </Flex>
);

export const customComposition = () => (
  <Button
    css={{
      size: "md",
      height: "48px",
      width: "200px",
      border: "5px solid",
      borderColor: "yellow",
    }}
  >
    Button
  </Button>
);
