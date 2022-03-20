import React from "react";

import { cx } from "../../core/utils";
import { css, VariantProps } from "../react-stitches";

const badge = css({
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
    fontWeight: "bold",

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
    borderRadius: "$2",
    whiteSpace: "nowrap",
    fontVariantNumeric: "tabular-nums",

    variants: {
        uppercase: {
            true: {
                textTransform: "uppercase",
            },
        },
        size: {
            "1": {
                height: "$5",
                px: "$2",
                fontSize: "$tag-1",
            },
        },
        variant: {
            indigo: {
                backgroundColor: "$indigo100",
                color: "$indigo600",
                "&:focus": {
                    boxShadow:
                        "inset 0 0 0 1px $colors$indigo800, 0 0 0 1px $colors$indigo800",
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
            variant: "indigo",
            css: {
                "@hover": {
                    "&:hover": {
                        backgroundColor: "$indigo200",
                    },
                },
                "&:active": {
                    backgroundColor: "$indigo100",
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: "$indigo200",
                },
            },
        },
    ],
});

interface BadgeProps
    extends Omit<React.ComponentProps<"span">, "className">,
        VariantProps<typeof badge> {}

export const Badge = (props: BadgeProps) => {
    const {
        size = "1",
        interactive,
        variant = "indigo",
        uppercase = true,
        ...rest
    } = props;
    return (
        <span
            {...rest}
            className={cx(
                "sui-badge",
                badge({ size, variant, interactive, uppercase })
            )}
        />
    );
};
