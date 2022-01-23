import { Container } from "@sui/react-layout";

export const parameters = {
  // disables Chromatic on a global level
  chromatic: { disable: true },
  decorator: [
    (Story) => (
      <Container size="3">
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    as: {
      control: "text",
      description: "What element to render as",
    },
    ref: {
      table: {
        disable: true,
      },
    },
    css: {
      control: "object",
      description: "CSS properties",
    },
  },
  docs: {
    source: {
      state: "open",
    },
  },
  options: {
    storySort: {
      order: [
        "Getting Started",
        [
          "Introduction",
          "Installing the UI Kit",
          "Using the UI Kit",
          "Recommended libraries",
          "Design resources",
          "Browser support",
          "Accessibility standards",
          "General guidelines",
          "Contribution, support and feedback",
        ],
        "Documentation",
        "Templates",
        "Components",
      ],
    },
  },
  // viewMode: process.env.NODE_ENV === "production" ? "docs" : "canvas",
};
