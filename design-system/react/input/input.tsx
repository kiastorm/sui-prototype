import * as React from "react";

import { __DEV__, cx } from "../../core/utils";
import { FormControlOptions, useFormControl } from "../form-control";
import { css } from "../react-stitches";

export const input = css({
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
    backgroundColor: "$neutral200",
    // boxShadow: "inset 0 0 0 1px $colors$purple600",
    color: "$neutral900",
    fontVariantNumeric: "tabular-nums",
    transition: "all 0.15s ease-in-out",

    "&:-webkit-autofill": {
        boxShadow:
            "inset 0 0 0 1px $colors$blue6, inset 0 0 0 100px $colors$blue3",
    },

    "&:-webkit-autofill::first-line": {
        fontFamily: "$sans",
        color: "$neutral700",
    },

    "@hover": {
        "&:hover": {
            bgc: "$neutral300",
        },
    },

    "&:focus": {
        bgc: "$neutral0",
        boxShadow:
            "inset 0px 0px 0px 2px $colors$purple600, 0px 0px 0px 1px $colors$purple400",
        "&:-webkit-autofill": {
            boxShadow:
                "inset 0px 0px 0px 1px $colors$purple600, 0px 0px 0px 1px $colors$purple400",
        },
    },
    "&::placeholder": {
        color: "$neutral700",
    },
    "&:disabled": {
        pointerEvents: "none",
        cursor: "not-allowed",
        opacity: 0.4,
    },
    "&:read-only": {
        // backgroundColor: "$slate2",
        "&:focus": {
            boxShadow: "inset 0px 0px 0px 1px $colors$purple600",
        },
    },

    variants: {
        size: {
            "1": {
                borderRadius: "$2",
                height: "$8",
                fontSize: "$body-1",
                px: "$3",
                pt: "$1",
                lineHeight: "$8",
                "&:-webkit-autofill::first-line": {
                    fontSize: "$body-1",
                },
            },
            // "2": {
            //     borderRadius: "$2",
            //     height: "$6",
            //     fontSize: "$3",
            //     px: "$2",
            //     lineHeight: "$sizes$6",
            //     "&:-webkit-autofill::first-line": {
            //         fontSize: "$3",
            //     },
            // },
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
                    backgroundColor: "$neutral200",
                    boxShadow:
                        "inset 0px 0px 0px 1px $colors$purple600, 0px 0px 0px 1px $colors$purple400",
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
                boxShadow: "inset 0 0 0 1px $colors$red900",
                "&:focus": {
                    boxShadow:
                        "inset 0px 0px 0px 1px $colors$red900, 0px 0px 0px 1px $colors$red900",
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

export interface InputProps
    extends React.ComponentProps<"input">,
        FormControlOptions {}

/**
 * Input
 *
 * Element that allows users enter single valued data.
 */
export const Input = React.forwardRef<"input", InputProps>((props, ref) => {
    const { className, css, ...rest } = useFormControl<HTMLInputElement>(props);

    return (
        <input
            {...rest}
            ref={ref}
            className={cx("sui-input", input({ css }), className)}
        />
    );
});

if (__DEV__) {
    Input.displayName = "Input";
}

// This is used in `input-group.tsx`
Input.id = "Input";
