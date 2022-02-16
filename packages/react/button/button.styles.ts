import { css } from "../react-stitches";

const buttonCommon = css({
  // Reset
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
  border: "none",

  // Custom reset?
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  cursor: "pointer",

  transition: "all 0.15s ease-in-out",
});

const buttonStyleVariants = {
  primary: {
    bgc: "$purple900",
    borderColor: "$purple800",
    color: "white",
    "@hover": {
      "&:hover": {
        background: "$purple800",
      },
    },
    "&:focus": {
      background: "$purple900",
      boxShadow: "0px 0px 0px 2px $colors$purple400",
    },
    "&:active": {
      background: "$purple800",
      boxShadow: "0px 0px 0px 2px $colors$purple400",
    },
  },
  secondary: {
    bgc: "$neutral0",
    color: "$neutral800",
    border: "1px solid $colors$neutral500",
    "@hover": {
      "&:hover": {
        background: "$neutral100",
      },
    },
    "&:focus": {
      borderColor: "$neutral500",
      background: "$neutral200",
      boxShadow: "0px 0px 0px 2px $colors$neutral500",
    },
    "&:active": {
      background: "$neutral300",
      boxShadow: "0px 0px 0px 2px $colors$neutral500",
    },
  },
  "ghost-primary": {
    bgc: "transparent",
    color: "$purple900",
    "@hover": {
      "&:hover": {
        background: "$purple200",
      },
    },
    "&:focus": {
      borderColor: "$purple400",
      background: "$purple200",
      boxShadow: "0px 0px 0px 2px $colors$purple400",
    },
    "&:active": {
      background: "$purple100",
      boxShadow: "0px 0px 0px 2px $colors$purple400",
    },
  },
  "ghost-secondary": {
    bgc: "transparent",
    color: "$neutral800",
    "@hover": {
      "&:hover": {
        background: "$neutral100",
      },
    },
    "&:focus": {
      borderColor: "$neutral500",
      background: "$neutral200",
      boxShadow: "0px 0px 0px 2px $colors$neutral500",
    },
    "&:active": {
      background: "$neutral300",
      boxShadow: "0px 0px 0px 2px $colors$neutral500",
    },
  },
};

export const iconButton = css(buttonCommon, {
  p: 0,
  borderRadius: "$2",

  "&:disabled": {
    pointerEvents: "none",
    opacity: 0.4,
  },

  "&:hover, &:focus": {
    transform: "translateY(-1px)",
  },

  "&.active, &:active": {
    transform: "translateY(0px)",
  },

  variants: {
    isActive: {
      true: {},
      false: {},
    },
    /**
     * If `true`, the button will be perfectly round. Else, it'll be slightly round
     */
    isRound: {
      true: {
        borderRadius: "$round",
      },
    },
    variant: {
      ...buttonStyleVariants,
      contrast: {
        bgc: "$neutral800",
        color: "$neutral0",
        "@hover": {
          "&:hover": {
            background: "$neutral700",
          },
        },
        "&:focus": {
          bgc: "$neutral700",
          boxShadow: "0px 0px 0px 2px $colors$neutral900",
        },
        "&:active": {
          background: "$neutral800",
          boxShadow: "0px 0px 0px 2px $colors$neutral900",
        },
      },
    },
    size: {
      1: {
        height: "$6",
        width: "$6",
      },
      2: {
        height: "$8",
        width: "$8",
      },
      3: {
        height: "$12",
        width: "$12",
      },
    },
  },
  compoundVariants: [
    {
      isActive: true,
      variant: "primary",
      css: {
        background: "$purple800",
        boxShadow: "0px 0px 0px 2px $colors$purple400",
      },
    },
    {
      isActive: true,
      variant: "secondary",
      css: {
        background: "$neutral300",
        boxShadow: "0px 0px 0px 2px $colors$neutral500",
      },
    },
    {
      isActive: true,
      variant: "ghost-primary",
      css: {
        background: "$purple100",
        borderColor: "$purple400",
        boxShadow: "0px 0px 0px 2px $colors$purple400",
      },
    },
    {
      isActive: true,
      variant: "ghost-secondary",
      css: {
        background: "$neutral300",
        borderColor: "$neutral500",
        boxShadow: "0px 0px 0px 2px $colors$neutral500",
      },
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: 2,
  },
});

export const button = css(buttonCommon, {
  // Custom
  font: "$sans",
  fontSize: "$2",
  fontWeight: 700,

  "&:hover, &:focus": {
    transform: "translateY(-1px)",
  },

  "&.active, &:active": {
    transform: "translateY(0px)",
  },

  $$iconSpacing: "$space$2",

  ".sui-button__left-icon": {
    mr: "$$iconSpacing",
    svg: {
      width: "100%",
      height: "100%",
    },
  },
  ".sui-button__right-icon": {
    ml: "$$iconSpacing",
    svg: {
      width: "$$iconSize",
      height: "$$iconSize",
    },
  },
  variants: {
    isActive: {
      true: {},
      false: {},
    },
    // Size of the button
    size: {
      1: {
        borderRadius: "$2",
        height: "$6",
        px: "$2",
        fontSize: "$3",
        lineHeight: "$fontSizes$5",
        $$iconSize: "$4",
      },
      2: {
        borderRadius: "$2",
        height: "$8",
        px: "$4",
        fontSize: "$5",
        lineHeight: "$fontSizes$4",
        $$iconSize: "$4",
      },
      3: {
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
      ...buttonStyleVariants,
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
      isActive: true,
      variant: "primary",
      css: {
        background: "$purple800",
        boxShadow: "0px 0px 0px 2px $colors$purple400",
      },
    },
    {
      isActive: true,
      variant: "secondary",
      css: {
        background: "$neutral300",
        boxShadow: "0px 0px 0px 2px $colors$neutral500",
      },
    },
    {
      isActive: true,
      variant: "ghost-primary",
      css: {
        background: "$purple100",
        borderColor: "$purple400",
        boxShadow: "0px 0px 0px 2px $colors$purple400",
      },
    },
    {
      isActive: true,
      variant: "ghost-secondary",
      css: {
        background: "$neutral300",
        borderColor: "$neutral500",
        boxShadow: "0px 0px 0px 2px $colors$neutral500",
      },
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: 2,
  },
});
