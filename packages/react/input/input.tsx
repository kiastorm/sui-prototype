import { styled, omitThemingProps, ThemingProps } from "../react-stitches";
import { cx } from "../../core/utils";
import { FormControlOptions, useFormControl } from "../form-control";
import * as React from "react";

export const StyledInput = styled("input", {
  // Reset
  appearance: "none",
  borderWidth: "0",
  boxSizing: "border-box",
  fontFamily: "inherit",
  margin: "0",
  outline: "none",
  padding: "0",
  width: "100%",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  // Custom
  //  background-color: rgba($color-neutral-500, 0.13);
  //       border-radius: 4px;
  //       border: 2px solid transparent;
  //       @include placeholder {
  //           color: $color-neutral-500;
  //       }

  //       &:hover:not(:disabled) {
  //           background: rgba($color-neutral-500, 0.2);
  //       }

  //       &:focus:not(:disabled),
  //       &:active:not(:disabled) {
  //           background: $color-neutral-0;
  //           border-color: $color-purple-600;
  //       }
  // backgroundColor: "$neutral200",
  color: "$hiContrast",
  fontVariantNumeric: "tabular-nums",
  border: "1px solid $colors$neutral500",

  "&:-webkit-autofill": {
    boxShadow: "0 0 0 1px $colors$blue6, 0 0 0 100px $colors$blue3",
  },

  "&:-webkit-autofill::first-line": {
    fontFamily: "$untitled",
    color: "$hiContrast",
  },

  "&:focus": {
    backgroundColor: "$neutral0",
    boxShadow:
      "0px 0px 0px 1px $colors$purple600, 0px 0px 0px 1px $colors$purple600",
    "&:-webkit-autofill": {
      boxShadow:
        "0px 0px 0px 1px $colors$$colors$purple600, 0px 0px 0px 1px $colors$$colors$purple600, 0 0 0 100px $colors$blue3",
    },
  },
  "&::placeholder": {
    color: "$neutral700",
  },
  "&:disabled": {
    pointerEvents: "none",
    backgroundColor: "$slate2",
    color: "$slate8",
    cursor: "not-allowed",
    "&::placeholder": {
      color: "$slate7",
    },
  },
  "&:read-only": {
    backgroundColor: "$slate2",
    "&:focus": {
      boxShadow: "0px 0px 0px 1px $colors$slate7",
    },
  },

  variants: {
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
    variant: {
      ghost: {
        boxShadow: "none",
        backgroundColor: "transparent",
        "@hover": {
          "&:hover": {
            boxShadow: "0 0 0 1px $colors$slateA7",
          },
        },
        "&:focus": {
          backgroundColor: "$loContrast",
          boxShadow:
            "0px 0px 0px 1px $colors$$colors$purple600, 0px 0px 0px 1px $colors$$colors$purple600",
        },
        "&:disabled": {
          backgroundColor: "transparent",
        },
        "&:read-only": {
          backgroundColor: "transparent",
        },
      },
    },
    state: {
      invalid: {
        boxShadow: "0 0 0 1px $colors$red7",
        "&:focus": {
          boxShadow:
            "0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8",
        },
      },
      valid: {
        boxShadow: "0 0 0 1px $colors$green7",
        "&:focus": {
          boxShadow:
            "0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8",
        },
      },
    },
    cursor: {
      default: {
        cursor: "default",
        "&:focus": {
          cursor: "text",
        },
      },
      text: {
        cursor: "text",
      },
    },
  },
  defaultVariants: {
    size: "2",
  },
});

const BUTTON_NAME = "Input";
type Omitted = "disabled" | "required" | "readOnly" | "size";

type InputElement = React.ElementRef<typeof StyledInput>;

interface InputProps
  extends Omit<React.ComponentProps<typeof StyledInput>, Omitted>,
    ThemingProps,
    FormControlOptions {}

export const Input = React.forwardRef<InputElement, InputProps>(
  (props, ref) => {
    const _className = cx("sui-input", props.className);

    return <StyledInput ref={ref} {...props} className={_className} />;
  }
);

Input.displayName = BUTTON_NAME;
Input.toString = () => ".sui-input";
