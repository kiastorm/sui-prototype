import { styled } from "@sui/react-stitches";
import { cx, omitThemingProps, ThemingProps } from "@sui/utils";
import { FormControlOptions, useFormControl } from "@sui/react-form-control";
import * as React from "react";

export const StyledTextField = styled("input", {
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
  boxShadow: "inset 0 0 0 1px $colors$neutral500",

  "&:-webkit-autofill": {
    boxShadow: "inset 0 0 0 1px $colors$blue6, inset 0 0 0 100px $colors$blue3",
  },

  "&:-webkit-autofill::first-line": {
    fontFamily: "$untitled",
    color: "$hiContrast",
  },

  "&:focus": {
    backgroundColor: "$neutral0",
    boxShadow:
      "inset 0px 0px 0px 1px $colors$purple600, 0px 0px 0px 1px $colors$purple600",
    "&:-webkit-autofill": {
      boxShadow:
        "inset 0px 0px 0px 1px $colors$$colors$purple600, 0px 0px 0px 1px $colors$$colors$purple600, inset 0 0 0 100px $colors$blue3",
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
      boxShadow: "inset 0px 0px 0px 1px $colors$slate7",
    },
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$1",
        height: "$5",
        fontSize: "$1",
        px: "$1",
        lineHeight: "$sizes$5",
        "&:-webkit-autofill::first-line": {
          fontSize: "$1",
        },
      },
      "2": {
        borderRadius: "$2",
        height: "$6",
        fontSize: "$3",
        px: "$2",
        lineHeight: "$sizes$6",
        "&:-webkit-autofill::first-line": {
          fontSize: "$3",
        },
      },
    },
    variant: {
      ghost: {
        boxShadow: "none",
        backgroundColor: "transparent",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$slateA7",
          },
        },
        "&:focus": {
          backgroundColor: "$loContrast",
          boxShadow:
            "inset 0px 0px 0px 1px $colors$$colors$purple600, 0px 0px 0px 1px $colors$$colors$purple600",
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
        boxShadow: "inset 0 0 0 1px $colors$red7",
        "&:focus": {
          boxShadow:
            "inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8",
        },
      },
      valid: {
        boxShadow: "inset 0 0 0 1px $colors$green7",
        "&:focus": {
          boxShadow:
            "inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8",
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
    size: "1",
  },
});

const BUTTON_NAME = "TextField";
type Omitted = "disabled" | "required" | "readOnly" | "size";

type TextFieldElement = React.ElementRef<typeof StyledTextField>;

interface TextFieldProps
  extends Omit<React.ComponentProps<typeof StyledTextField>, Omitted>,
    ThemingProps,
    FormControlOptions {}

export const TextField = React.forwardRef<TextFieldElement, TextFieldProps>(
  (props, ref) => {
    const ownProps = omitThemingProps(props);
    const inputProps = useFormControl<HTMLInputElement>(props);
    const _className = cx("chakra-input", props.className);

    return <StyledTextField ref={ref} {...inputProps} />;
  }
);

TextField.displayName = BUTTON_NAME;
