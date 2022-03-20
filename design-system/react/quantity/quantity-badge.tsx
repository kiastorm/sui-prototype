import React from "react";

import { cx } from "../../core/utils";
import { CSS, css, VariantProps } from "../react-stitches";

const quantityBadge = css({
    // Reset
    alignItems: "center",
    appearance: "none",
    borderWidth: "0",
    boxSizing: "border-box",
    display: "inline-flex",
    flexShrink: 0,
    fontFamily: "inherit",
    justifyContent: "center",
    lineHeight: "1",
    verticalAlign: "middle",
    outline: "none",
    padding: "0",
    textDecoration: "none",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    "&:disabled": {
        backgroundColor: "$slate3",
        pointerEvents: "none",
        color: "$slate8",
    },
    "&::before": {
        boxSizing: "border-box",
        content: '""',
    },
    "&::after": {
        boxSizing: "border-box",
        content: '""',
    },

    // Custom
    backgroundColor: "$slate3",
    borderRadius: "$2",
    color: "$slate11",
    whiteSpace: "nowrap",
    fontVariantNumeric: "tabular-nums",

    variants: {
        size: {
            "1": {
                height: "$4",
                minWidth: "1.4375rem", // 23px
                fontSize: "$tag-1",
            },
            "2": {
                height: "$5",
                px: "$2",
                fontSize: "$2",
            },
        },
        variant: {
            purple: {
                backgroundColor: "$purple900",
                color: "$textInverse",
                "&:focus": {
                    boxShadow:
                        "inset 0 0 0 1px $colors$purple400, 0 0 0 1px $colors$purple400",
                },
            },
            gray: {
                backgroundColor: "$neutral300",
                color: "$neutral800",
                "&:focus": {
                    boxShadow:
                        "inset 0 0 0 1px $colors$neutral800, 0 0 0 1px $colors$neutral800",
                },
            },
        },
        interactive: {
            true: {},
        },
    },
    compoundVariants: [
        {
            interactive: true,
            variant: "purple",
            css: {
                "@hover": {
                    "&:hover": {
                        bgc: "$purple800",
                    },
                },
                "&:focus": {
                    bgc: "$purple900",
                    boxShadow: "0px 0px 0px 2px $colors$purple400",
                },
                "&:active": {
                    bgc: "$purple800",
                    boxShadow: "0px 0px 0px 2px $colors$purple400",
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    bgc: "$purple800",
                },
            },
        },
    ],
});

interface QuantityBadgeProps
    extends Omit<React.ComponentProps<"span">, "className" | "children">,
        VariantProps<typeof quantityBadge> {
    variant?: VariantProps<typeof quantityBadge>["variant"];
    quantity: number;
    css?: CSS;
}

export const QuantityBadge = (props: QuantityBadgeProps) => {
    const {
        quantity,
        size = "1",
        interactive,
        variant = "purple",
        css,
        ...rest
    } = props;
    return (
        <span
            {...rest}
            className={cx(
                "sui-quantity-badge",
                quantityBadge({ size, variant, interactive, css })
            )}
        >
            {quantity}
        </span>
    );
};
