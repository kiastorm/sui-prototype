import * as React from "react";

import { __DEV__, cx } from "../../core/utils";
import { css, VariantProps } from "../react-stitches";

export interface InputElementProps
    extends React.ComponentProps<"div">,
        VariantProps<typeof inputElement> {}

const inputElement = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    zIndex: 2,
    variants: {
        side: {
            left: {
                width: "$8",
                height: "$8",
            },
            right: {},
        },
    },
});

const InputElement = React.forwardRef<
    React.ElementRef<"div">,
    InputElementProps
>((props, ref) => {
    const { side = "left", className, ...rest } = props;

    // const attr = side === "left" ? "insetStart" : "insetEnd";

    // const elementStyles: SystemStyleObject = {
    //     [attr]: "0",
    //     width: input?.height ?? input?.h,
    //     height: input?.height ?? input?.h,
    //     fontSize: input?.fontSize,
    // };

    return (
        <div
            ref={ref}
            className={cx(
                "sui-input__element",
                inputElement({ side }),
                className
            )}
            // __css={elementStyles}
            {...rest}
        />
    );
});

// This is used in `input-group.tsx`
InputElement.id = "InputElement";

if (__DEV__) {
    InputElement.displayName = "InputElement";
}

export const InputLeftElement = React.forwardRef<
    React.ElementRef<"div">,
    InputElementProps
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <InputElement
            ref={ref}
            side="left"
            className={cx("sui-input__left-element", className)}
            {...rest}
        />
    );
});

// This is used in `input-group.tsx`
InputLeftElement.id = "InputLeftElement";

if (__DEV__) {
    InputLeftElement.displayName = "InputLeftElement";
}

export const InputRightElement = React.forwardRef<
    React.ElementRef<"div">,
    InputElementProps
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <InputElement
            ref={ref}
            side="right"
            className={cx("sui-input__right-element", className)}
            {...rest}
        />
    );
});

// This is used in `input-group.tsx`
InputRightElement.id = "InputRightElement";

if (__DEV__) {
    InputRightElement.displayName = "InputRightElement";
}
