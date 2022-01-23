import { styled } from "@sui/react-stitches-config";

export const buttonVariants = {
  size: {
    "1": {
      borderRadius: "$1",
      height: "$8",
      px: "$5",
      fontSize: "$1",
      lineHeight: "$sizes$5",
    },
    "2": {
      borderRadius: "$1",
      height: "$9",
      // Figma value was not an integer so I've rounded up to the next increment in spacing system
      px: "$6",
      fontSize: "$2",
      lineHeight: "$sizes$6",
    },
    "3": {
      borderRadius: "$2",
      height: "$10",
      // Figma value was not an integer so I've rounded up to the next increment in spacing system
      px: "$7",
      fontSize: "$3",
      lineHeight: "$sizes$7",
    },
  },
  variant: {
    "brand-primary": {
      background: "linear-gradient(93.88deg, #FF00FF -44.2%, #311B92 157.32%)",
      color: "white",
      "@hover": {
        "&:hover": {
          background:
            "linear-gradient(0deg, $colors$whiteA2, $colors$whiteA2), linear-gradient(93.88deg, #FF00FF -44.2%, #311B92 157.32%)",
          boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
        },
      },
      "&:focus": {
        background:
          "linear-gradient(0deg, $colors$whiteA2, $colors$whiteA2), linear-gradient(93.88deg, #FF00FF -44.2%, #311B92 157.32%)",
        boxShadow: "0px 0px 0px 3px $colors$purple400",
      },
      "&:active": {
        background:
          "linear-gradient(0deg, $colors$whiteA1, $colors$whiteA1), linear-gradient(93.88deg, #FF00FF -44.2%, #311B92 157.32%)",
        boxShadow: "0px 0px 0px 3px $colors$purple400",
      },
      "&:disabled": {
        background: "$colors$purple400",
      },
    },
    "brand-secondary": {
      boxShadow: "inset 0 0 0 2px $colors$purple900",
      color: "$purple900",
      "@hover": {
        "&:hover": {
          background: "$purple200",
          boxShadow: "inset 0 0 0 2px $colors$purple900",
        },
      },
      "&:focus": {
        background: "$purple200",
        boxShadow:
          "inset 0 0 0 2px $colors$purple900, 0px 0px 0px 3px $colors$purple400",
      },
      "&:active": {
        background: "$colors$purple400",
        boxShadow:
          "inset 0 0 0 2px $colors$purple900, 0px 0px 0px 3px $colors$purple400",
      },
      "&:disabled": {
        color: "$purple400",
        boxShadow: "0px 0px 0px 3px $colors$purple400",
      },
    },
    "alt-primary": {
      background:
        "linear-gradient(276.11deg, $colors$cyan800 10.24%, #00E0F7 130.22%)",
      color: "white",
      "@hover": {
        "&:hover": {
          background:
            "linear-gradient(0deg, $whiteA1, $whiteA1), linear-gradient(276.11deg, $colors$cyan800 10.24%, #00E0F7 130.22%)",
          boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
        },
      },
      "&:focus": {
        background:
          "linear-gradient(276.11deg, $colors$cyan800 10.24%, #00E0F7 130.22%)",
        boxShadow: "0px 0px 0px 3px $colors$cyan800",
      },
      "&:active": {
        background:
          "linear-gradient(0deg, $colors$whiteA1, $colors$whiteA1), linear-gradient(276.11deg, $colors$cyan800 10.24%, #00E0F7 130.22%)",
        boxShadow: "0px  0px 0px 3px $colors$cyan800",
      },
      "&:disabled": {
        background:
          "linear-gradient(276.11deg, $colors$cyan800 10.24%, #00E0F7 130.22%)",
        opacity: 0.4,
      },
    },
    "alt-secondary": {
      background: "white",
      color: "$neutral800",
      boxShadow: "0px 0px 0px 1px $colors$neutral500",
      "&:focus": {
        boxShadow:
          "0px 0px 0px 1px $colors$neutral500, 0px 0px 0px 3px #E6E5EA",
      },
      "&:disabled": {
        opacity: "0.4",
        boxShadow: "none",
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
  fontSize: "$2",
  fontWeight: 700,
  cursor: "pointer",

  "&:disabled": {
    pointerEvents: "none",
  },
  variants: buttonVariants,
  defaultVariants: {
    variant: "brand-primary",
    size: "1",
  },
});
