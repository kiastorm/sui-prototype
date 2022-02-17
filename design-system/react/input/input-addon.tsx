import * as React from "react";

import { __DEV__, cx } from "../../core/utils";
import { css, VariantProps } from "../react-stitches";

const inputAddon = css({
    flex: "0 0 auto",
    width: "auto",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    variats: {
        side: {
            left: {
                marginEnd: "-1px",
                borderEndRadius: 0,
                borderEndColor: "transparent",
            },
            right: {
                marginStart: "-1px",
                borderStartRadius: 0,
                borderStartColor: "transparent",
            },
        },
    },
});

export interface InputAddonProps
    extends React.ComponentProps<"div">,
        VariantProps<typeof inputAddon> {}

/**
 * InputAddon
 *
 * Element to append or prepend to an input
 */
export const InputAddon = React.forwardRef<
    React.ElementRef<"div">,
    InputAddonProps
>((props, ref) => {
    const { side = "left", ...rest } = props;

    return (
        <div
            ref={ref}
            {...rest}
            className={cx(
                "sui-input__addon",
                inputAddon({ side }),
                props.className
            )}
        />
    );
});

if (__DEV__) {
    InputAddon.displayName = "InputAddon";
}

/**
 * InputLeftAddon
 *
 * Element to append to the left of an input
 */
export const InputLeftAddon = React.forwardRef<
    React.ElementRef<"div">,
    InputAddonProps
>((props, ref) => (
    <div
        ref={ref}
        side="left"
        {...props}
        className={cx("sui-input__left-addon", props.className)}
    />
));

if (__DEV__) {
    InputLeftAddon.displayName = "InputLeftAddon";
}

// This is used in `input-group.tsx`
InputLeftAddon.id = "InputLeftAddon";

/**
 * InputRightAddon
 *
 * Element to append to the right of an input
 */
export const InputRightAddon = React.forwardRef<
    React.ElementRef<"div">,
    InputAddonProps
>((props, ref) => (
    <div
        ref={ref}
        side="right"
        {...props}
        className={cx("sui-input__right-addon", props.className)}
    />
));

if (__DEV__) {
    InputRightAddon.displayName = "InputRightAddon";
}

// This is used in `input-group.tsx`
InputRightAddon.id = "InputRightAddon";
