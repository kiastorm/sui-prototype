import { styled } from "../react-stitches";

export const buttonVariants = {
  size: {
    "1": {
      borderRadius: "$2",
      height: "$8",
      minWidth: "$19",
      px: "$4",
      fontSize: "$4",
      lineHeight: "$sizes$5",
    },
    "2": {
      borderRadius: "$2",
      height: "$10",
      minWidth: "97px",
      px: "$6",
      fontSize: "$2",
      lineHeight: "$sizes$6",
    },
  },
  variant: {
    primary: {
      bgc: "$purple900",
      color: "white",
      "@hover": {
        "&:hover": {
          background: "$purple800",
        },
      },
      "&:active": {
        background: "$purple700",
        boxShadow: "0px 0px 0px 3px $colors$purple400",
      },
      "&:focus": {
        background: "$purple800",
        boxShadow:
          "inset 0 0 0 1px $colors$purple400, 0px 0px 0px 3px $colors$purple400",
      },
      "&:disabled": {
        background: "$colors$purple400",
      },
    },
  },
} as const;

export const StyledButton = styled("button", {
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
  transition: "all 0.2s ease-in-out",

  "&:disabled": {
    pointerEvents: "none",
  },
  variants: buttonVariants,
  defaultVariants: {
    variant: "primary",
    size: "1",
  },
});
