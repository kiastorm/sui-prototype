import React from "react";

import { cx } from "../../core/utils";
import { css, styled } from "../react-stitches";

export const flex = css({
    display: "flex",
    boxSizing: "border-box",
    variants: {
        /**
         * Shorthand prop for `flex-direction` css attribute.
         */
        direction: {
            row: {
                flexDirection: "row",
            },
            column: {
                flexDirection: "column",
            },
            rowReverse: {
                flexDirection: "row-reverse",
            },
            columnReverse: {
                flexDirection: "column-reverse",
            },
        },
        /**
         * Shorthand prop for `align-items` css attribute.
         */
        align: {
            start: {
                alignItems: "flex-start",
            },
            center: {
                alignItems: "center",
            },
            end: {
                alignItems: "flex-end",
            },
            stretch: {
                alignItems: "stretch",
            },
            baseline: {
                alignItems: "baseline",
            },
        },
        /**
         * Shorthand prop for `justify-content` css attribute.
         */
        justify: {
            start: {
                justifyContent: "flex-start",
            },
            center: {
                justifyContent: "center",
            },
            end: {
                justifyContent: "flex-end",
            },
            between: {
                justifyContent: "space-between",
            },
        },
        /**
         * Shorthand prop for `flex-wrap` css attribute.
         */
        wrap: {
            noWrap: {
                flexWrap: "nowrap",
            },
            wrap: {
                flexWrap: "wrap",
            },
            wrapReverse: {
                flexWrap: "wrap-reverse",
            },
        },
        /**
         * Shorthand prop for `gap`  css attribute.
         */
        gap: {
            0: {},
            1: {
                gap: "$1",
            },
            2: {
                gap: "$2",
            },
            3: {
                gap: "$3",
            },
            4: {
                gap: "$4",
            },
            5: {
                gap: "$5",
            },
            6: {
                gap: "$6",
            },
            7: {
                gap: "$7",
            },
            8: {
                gap: "$8",
            },
            9: {
                gap: "$9",
            },
        },
    },
    defaultVariants: {
        direction: "row",
        align: "stretch",
        justify: "start",
        wrap: "noWrap",
    },
});

export const inlineFlex = css(flex, { display: "inline-flex" });

const StyledFlex = styled("div", flex);
const StyledInlineFlex = styled("div", inlineFlex);

/**
 * `Flex` provides shorthand props for common flexbox css properties.
 *
 * It renders a `div` element with `display: flex` applied.
 *
 * The `gap` prop is particularly useful for adding spacing between flex items.
 */
export const Flex = React.forwardRef((props, forwardedRef) => (
    <StyledFlex
        ref={forwardedRef}
        {...props}
        className={cx("sui-flex", props.className)}
    />
)) as typeof StyledFlex;

Flex.displayName = "Flex";

/**
 * `InlineFlex` provides shorthand props for common flexbox css properties.
 *
 * It renders a `div` element with `display: inline-flex` applied.
 *
 * The `gap` prop is particularly useful for adding spacing between flex items.
 */
export const InlineFlex = React.forwardRef((props, forwardedRef) => (
    <StyledInlineFlex
        ref={forwardedRef}
        {...props}
        className={cx("sui-inline-flex", props.className)}
    />
)) as typeof StyledInlineFlex;

InlineFlex.displayName = "InlineFlex";

/**
 * A spacer component that can be used to space out elements in a flex container.
 */
export const Spacer = styled("div", {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch",
});

Spacer.displayName = "Spacer";
