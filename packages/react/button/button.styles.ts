import { css, styled } from "../react-stitches";

export const buttonStyles = {
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  // Custom reset?
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",

  // Custom
  height: "$5",
  px: "$2",
  font: "untitled",
  fontSize: "$2",
  fontWeight: 700,
  cursor: "pointer",
  // transition: "box-shadow 50ms ease-in-out",

  "&:disabled": {
    pointerEvents: "none",
    opacity: 0.4,
  },

  $$iconSpacing: "$space$2",

  ".button__icon--start": {
    mr: "$$iconSpacing",
    svg: {
      width: "$$iconSize",
      height: "$$iconSize",
    },
  },
  ".button__icon--end": {
    ml: "$$iconSpacing",
    svg: {
      width: "$$iconSize",
      height: "$$iconSize",
    },
  },
  variants: {
    active: {
      true: {},
      false: {},
    },
    // Size of the button
    size: {
      "1": {
        borderRadius: "$2",
        height: "$6",
        minWidth: "$12",
        px: "$2",
        fontSize: "$3",
        lineHeight: "$fontSizes$5",
        $$iconSize: "$3",
      },
      "2": {
        borderRadius: "$2",
        height: "$8",
        minWidth: "$16",
        px: "$4",
        fontSize: "$5",
        lineHeight: "$fontSizes$4",
        $$iconSize: "$4",
      },
      "3": {
        borderRadius: "$2",
        height: "$9",
        px: "$6",
        fontSize: "$5",
        lineHeight: "$fontSizes$4",
        $$iconSize: "$4",
      },
    },
    // Visual style and colour of the button
    variant: {
      primary: {
        bgc: "$purple900",
        color: "white",
        "@hover": {
          "&:hover": {
            background: "$purple800",
          },
        },
        "&:focus": {
          background: "$purple900",
          boxShadow:
            "inset 0 0 0 1px $colors$purple400, 0px 0px 0px 2px $colors$purple400",
        },
        "&:active": {
          background: "$purple800",
          boxShadow:
            "inset 0px 0px 0px 1px $colors$purple400, 0px 0px 0px 2px $colors$purple400",
        },
      },
      secondary: {
        bgc: "$neutral0",
        color: "$neutral800",
        boxShadow: "inset 0 0 0 1px $colors$neutral500",
        "@hover": {
          "&:hover": {
            background: "$neutral100",
          },
        },
        "&:focus": {
          background: "$neutral200",
          boxShadow:
            "inset 0 0 0 1px $colors$neutral500, 0px 0px 0px 2px $colors$neutral500",
        },
        "&:active": {
          background: "$neutral300",
          boxShadow:
            "inset 0 0 0 1px $colors$neutral500, 0px 0px 0px 2px $colors$neutral500",
        },
      },
      "ghost-primary": {
        bgc: "transparent",
        color: "$purple900",
        minWidth: "unset",
        "@hover": {
          "&:hover": {
            background: "$purple200",
          },
        },
        "&:focus": {
          background: "$purple200",
          boxShadow:
            "inset 0 0 0 1px $colors$purple400, 0px 0px 0px 2px $colors$purple400",
        },
        "&:active": {
          background: "$purple100",
          boxShadow:
            "inset 0px 0px 0px 1px $colors$purple400, 0px 0px 0px 2px $colors$purple400",
        },
      },
      "ghost-secondary": {
        bgc: "transparent",
        color: "$neutral800",
        minWidth: "unset",
        "@hover": {
          "&:hover": {
            background: "$neutral100",
          },
        },
        "&:focus": {
          background: "$neutral200",
          boxShadow:
            "inset 0 0 0 1px $colors$neutral500, 0px 0px 0px 2px $colors$neutral500",
        },
        "&:active": {
          background: "$neutral300",
          boxShadow:
            "inset 0 0 0 1px $colors$neutral500, 0px 0px 0px 2px $colors$neutral500",
        },
      },
    },
  },
  compoundVariants: [
    {
      size: 1,
      variant: "ghost-primary",
      css: {
        px: "$2",
      },
    },
    {
      size: 2,
      variant: "ghost-primary",
      css: {
        px: "$2",
      },
    },
    {
      size: 3,
      variant: "ghost-primary",
      css: {
        px: "$2",
      },
    },
    {
      size: 1,
      variant: "ghost-secondary",
      css: {
        px: "$2",
      },
    },
    {
      size: 2,
      variant: "ghost-secondary",
      css: {
        px: "$2",
      },
    },
    {
      size: 3,
      variant: "ghost-secondary",
      css: {
        px: "$2",
      },
    },
    {
      active: true,
      variant: "primary",
      css: {
        background: "$purple800",
        boxShadow:
          "inset 0px 0px 0px 1px $colors$purple400, 0px 0px 0px 2px $colors$purple400",
      },
    },
    {
      active: true,
      variant: "secondary",
      css: {
        background: "$neutral300",
        boxShadow:
          "inset 0 0 0 1px $colors$neutral500, 0px 0px 0px 2px $colors$neutral500",
      },
    },
    {
      active: true,
      variant: "ghost-primary",
      css: {
        background: "$purple100",
        boxShadow:
          "inset 0px 0px 0px 1px $colors$purple400, 0px 0px 0px 2px $colors$purple400",
      },
    },
    {
      active: true,
      variant: "ghost-secondary",
      css: {
        background: "$neutral300",
        boxShadow:
          "inset 0 0 0 1px $colors$neutral500, 0px 0px 0px 2px $colors$neutral500",
      },
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "2",
  },
};

export const button = css(buttonStyles);

export const StyledButtonAsLink = styled("a", buttonStyles);

export const StyledButton = styled("button", buttonStyles);
