import { Flex } from "@sui/react-layout";
import { Button, buttonVariants } from ".";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";

export const basic = () => (
  <>
    {Object.keys(buttonVariants.variant).map(
      (variant: keyof typeof buttonVariants["variant"]) => {
        return (
          <Flex gap="3">
            <Flex
              gap="6"
              css={{
                flexDirection: "column",
                p: "$6",
              }}
            >
              <Flex gap="3">
                <Button variant={variant}>Button</Button>
                <Button variant={variant} size="2">
                  Button
                </Button>
                <Button variant={variant} size="3">
                  Button
                </Button>
              </Flex>
              <Flex gap="3">
                <Button variant={variant} disabled>
                  Button
                </Button>
                <Button variant={variant} disabled size="2">
                  Button
                </Button>
                <Button variant={variant} disabled size="3">
                  Button
                </Button>
              </Flex>
            </Flex>
            <Flex
              gap="6"
              css={{
                flexDirection: "column",
                p: "$6",
                backgroundColor: "black",
              }}
            >
              <Flex gap="3">
                <Button variant={variant}>Button</Button>
                <Button variant={variant} size="2">
                  Button
                </Button>
                <Button variant={variant} size="3">
                  Button
                </Button>
              </Flex>
              <Flex gap="3">
                <Button variant={variant} disabled>
                  Button
                </Button>
                <Button variant={variant} disabled size="2">
                  Button
                </Button>
                <Button variant={variant} disabled size="3">
                  Button
                </Button>
              </Flex>
            </Flex>
          </Flex>
        );
      }
    )}
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
