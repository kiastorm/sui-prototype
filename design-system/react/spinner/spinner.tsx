import { css } from "@stitches/react";
import * as React from "react";

import { __DEV__, cx } from "../../core/utils";
import { Box } from "../layout";
import { keyframes } from "../react-stitches";
import { VisuallyHidden } from "../visually-hidden";

const spin = keyframes({
    "0%": {
        transform: "rotate(0deg)",
    },
    "100%": {
        transform: "rotate(360deg)",
    },
});

interface SpinnerOptions {
    /**
     * For accessibility, it is important to add a fallback loading text.
     * This text will be visible to screen readers.
     */
    label?: string;
}

export interface SpinnerProps
    extends React.ComponentProps<"div">,
        SpinnerOptions {}

type SpinnerElement = React.ElementRef<typeof Box>;

const spinner = css({
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: "$2",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
    animation: `${spin} 0.45s linear infinite`,
});

/**
 * Spinner is used to indicate the loading state of a page or a component,
 * It renders a `div` by default.
 *
 */
export const Spinner = React.forwardRef<SpinnerElement, SpinnerProps>(
    (props, ref) => {
        const { label = "Loading...", className, ...rest } = props;

        return (
            <span
                ref={ref}
                className={cx("sui-spinner", spinner(), className)}
                {...rest}
            >
                {label && <VisuallyHidden>{label}</VisuallyHidden>}
            </span>
        );
    }
);

if (__DEV__) {
    Spinner.displayName = "Spinner";
}
