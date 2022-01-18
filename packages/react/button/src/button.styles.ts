import { styled } from "@singlestore-ui/core";

export const Button = styled("button", {
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

  // Custom reset?
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  // Custom
  height: "$5",
  px: "$2",
  fontFamily: "$untitled",
  fontSize: "$2",
  fontWeight: 500,
  fontVariantNumeric: "tabular-nums",

  "&:disabled": {
    backgroundColor: "$slate2",
    boxShadow: "inset 0 0 0 1px $colors$slate7",
    color: "$slate8",
    pointerEvents: "none",
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$1",
        height: "45px",
        minWidth: "97px",
        px: "24px",
        fontSize: "$1",
        lineHeight: "$sizes$5",
      },
      "2": {
        borderRadius: "$2",
        height: "$6",
        minWidth: "110px",
        px: "$3",
        fontSize: "$3",
        lineHeight: "$sizes$6",
      },
      "3": {
        borderRadius: "$2",
        height: "$7",
        minWidth: "122px",
        px: "$4",
        fontSize: "$4",
        lineHeight: "$sizes$7",
      },
    },
    variant: {
      "brand-primary": {
        backgroundImage:
          "linear-gradient(93.88deg, #FF00FF -44.2%, #311B92 157.32%)",
      },
    },
  },

  defaultVariants: {
    size: "1",
    variant: "brand-primary",
  },
});
