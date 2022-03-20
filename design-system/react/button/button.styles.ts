import { css } from "../react-stitches";

const buttonCommon = css({
    // Reset
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
    border: "none",

    // Custom reset?
    display: "inline-flex",
    flexShrink: 0,
    justifyContent: "center",
    lineHeight: "1",
    cursor: "pointer",

    transition: "all 0.15s ease-in-out",
});

const buttonStyleVariants = {
    primary: {
        bgc: "$purple900",
        borderColor: "$purple800",
        color: "$textInverse",
        "@hover": {
            "&:hover": {
                bgc: "$purple800",
            },
        },
        "&:focus": {
            bgc: "$purple900",
            boxShadow: "0px 0px 0px 2px $colors$purple400",
        },
        '&:active, &[aria-haspopup="menu"][data-state="open"]': {
            bgc: "$purple800",
            boxShadow: "0px 0px 0px 2px $colors$purple400",
        },
    },
    secondary: {
        bgc: "$neutral0",
        color: "$neutral800",
        border: "1px solid $colors$neutral500",
        "@hover": {
            "&:hover": {
                bgc: "$neutral100",
            },
        },
        "&:focus": {
            borderColor: "$neutral500",
            bgc: "$neutral200",
            boxShadow: "0px 0px 0px 2px $colors$neutral500",
        },
        '&:active, &[aria-haspopup="menu"][data-state="open"]': {
            bgc: "$neutral300",
            // boxShadow: "0px 0px 0px 2px $colors$neutral500",
        },
        "&:active": {
            bgc: "$neutral300",
            boxShadow: "0px 0px 0px 2px $colors$neutral500",
        },
    },
    "ghost-primary": {
        bgc: "transparent",
        color: "$purple900",
        "@hover": {
            "&:hover": {
                bgc: "$purple200",
            },
        },
        "&:focus": {
            borderColor: "$purple400",
            bgc: "$purple200",
            boxShadow: "0px 0px 0px 2px $colors$purple400",
        },
        '&:active, &[aria-haspopup="menu"][data-state="open"]': {
            bgc: "$purple200",
            boxShadow: "0px 0px 0px 2px $colors$purple400",
        },
        "&:active": {
            bgc: "$purple200",
            boxShadow: "0px 0px 0px 2px $colors$purple400",
        },
    },
    "ghost-secondary": {
        bgc: "transparent",
        color: "$neutral800",
        "@hover": {
            "&:hover": {
                bgc: "$neutral100",
            },
        },
        "&:focus": {
            borderColor: "$neutral500",
            bgc: "$neutral200",
            boxShadow: "0px 0px 0px 2px $colors$neutral500",
        },
        '&:active, &[aria-haspopup="menu"][data-state="open"]': {
            bgc: "$neutral300",
            boxShadow: "0px 0px 0px 2px $colors$neutral500",
        },
        "&:active": {
            bgc: "$neutral300",
            boxShadow: "0px 0px 0px 2px $colors$neutral500",
        },
    },
    danger: {
        bgc: "transparent",
        color: "$red900",
        boxShadow: "0px 0px 0px 2px $colors$red900",
        "@hover": {
            "&:hover": {
                bgc: "$red200",
            },
        },
        "&:focus": {
            borderColor: "$red900",
            bgc: "$red200",
            boxShadow: "0px 0px 0px 2px $colors$red900",
        },
        "&:active": {
            bgc: "$red400",
            boxShadow: "0px 0px 0px 2px $colors$red900",
        },
    },
};

export const iconButton = css(buttonCommon, {
    p: 0,
    borderRadius: "$2",

    "&:disabled": {
        pointerEvents: "none",
        opacity: 0.4,
    },

    '&:not([data-state="open"])': {
        "&:hover, &:focus": {
            transform: "translateY(-1px)",
        },
    },

    "&.active, &:active, &[aria-haspopup=menu][data-state=open]": {
        transform: "translateY(0px)",
    },

    ".sui-icon-button__spinner, .sui-icon-button__icon": {
        width: "$$spinnerSize",
        height: "$$spinnerSize",
        flexShrink: 0,
        display: "inline-flex",
        alignSelf: "center",
    },

    variants: {
        active: {
            true: {},
            false: {},
        },
        /**
         * If `true`, the button will be perfectly round. Else, it'll be slightly round
         */
        round: {
            true: {
                borderRadius: "$round",
            },
        },
        variant: {
            ...buttonStyleVariants,
            contrast: {
                bgc: "$neutral800",
                color: "$neutral0",
                "@hover": {
                    "&:hover": {
                        bgc: "$neutral700",
                    },
                },
                "&:focus": {
                    bgc: "$neutral700",
                    boxShadow: "0px 0px 0px 2px $colors$neutral900",
                },
                "&:active": {
                    bgc: "$neutral800",
                    boxShadow: "0px 0px 0px 2px $colors$neutral900",
                },
            },
        },
        size: {
            1: {
                height: "$6",
                width: "$6",
                $$spinnerSize: "$sizes$3",
            },
            2: {
                height: "$8",
                width: "$8",
                $$spinnerSize: "$sizes$4",
            },
            3: {
                height: "$12",
                width: "$12",
                $$spinnerSize: "$sizes$4",
            },
        },
    },
    compoundVariants: [
        {
            active: true,
            variant: "primary",
            css: {
                bgc: "$purple800",
                boxShadow: "0px 0px 0px 2px $colors$purple400",
            },
        },
        {
            active: true,
            variant: "secondary",
            css: {
                bgc: "$neutral300",
                boxShadow: "0px 0px 0px 2px $colors$neutral500",
            },
        },
        {
            active: true,
            variant: "ghost-primary",
            css: {
                bgc: "$purple100",
                borderColor: "$purple400",
                boxShadow: "0px 0px 0px 2px $colors$purple400",
            },
        },
        {
            active: true,
            variant: "ghost-secondary",
            css: {
                bgc: "$neutral300",
                borderColor: "$neutral500",
                boxShadow: "0px 0px 0px 2px $colors$neutral500",
            },
        },
    ],
    defaultVariants: {
        variant: "primary",
        size: 2,
    },
});

export const button = css(buttonCommon, {
    // Custom
    font: "$sans",
    fontSize: "$body-1",
    fontWeight: 700,
    gap: "$2",

    "&:disabled": {
        pointerEvents: "none",
        opacity: 0.4,
    },

    "&:hover, &:focus": {
        transform: "translateY(-1px)",
    },

    "&.active, &:active, &[aria-haspopup=menu][data-state=open]": {
        transform: "translateY(0px)",
    },

    ".sui-button__spinner, .sui-button__icon": {
        flexShrink: 0,
        display: "inline-flex",
        alignSelf: "center",
    },
    ".sui-button__spinner": {
        width: "$$spinnerSize",
        height: "$$spinnerSize",
    },

    variants: {
        active: {
            true: {},
            false: {},
        },
        fullWidth: {
            true: {
                width: "100%",
            },
        },
        // Size of the button
        size: {
            1: {
                borderRadius: "$2",
                height: "$6",
                px: "$2",
                fontSize: "$body-1",
                lineHeight: "$fontSizes$5",
                $$spinnerSize: "$sizes$3",
            },
            2: {
                borderRadius: "$2",
                height: "$8",
                px: "$4",
                fontSize: "$body-1",
                lineHeight: "$fontSizes$4",
                $$spinnerSize: "$sizes$4",
            },
            3: {
                borderRadius: "$2",
                height: "$9",
                px: "$6",
                fontSize: "$body-1",
                lineHeight: "$fontSizes$4",
                $$spinnerSize: "$sizes$4",
            },
        },
        // Visual style and colour of the button
        variant: {
            ...buttonStyleVariants,
        },
    },
    compoundVariants: [
        {
            size: 1,
            variant: "ghost-primary",
            css: {
                px: "$2",
            },
        },
        {
            size: 2,
            variant: "ghost-primary",
            css: {
                px: "$2",
            },
        },
        {
            size: 3,
            variant: "ghost-primary",
            css: {
                px: "$2",
            },
        },
        {
            size: 1,
            variant: "ghost-secondary",
            css: {
                px: "$2",
            },
        },
        {
            size: 2,
            variant: "ghost-secondary",
            css: {
                px: "$2",
            },
        },
        {
            size: 3,
            variant: "ghost-secondary",
            css: {
                px: "$2",
            },
        },
        {
            active: true,
            variant: "primary",
            css: {
                bgc: "$purple800",
                boxShadow: "0px 0px 0px 2px $colors$purple400",
            },
        },
        {
            active: true,
            variant: "secondary",
            css: {
                bgc: "$neutral300",
                boxShadow: "0px 0px 0px 2px $colors$neutral500",
            },
        },
        {
            active: true,
            variant: "ghost-primary",
            css: {
                bgc: "$purple100",
                borderColor: "$purple400",
                boxShadow: "0px 0px 0px 2px $colors$purple400",
            },
        },
        {
            active: true,
            variant: "ghost-secondary",
            css: {
                bgc: "$neutral300",
                borderColor: "$neutral500",
                boxShadow: "0px 0px 0px 2px $colors$neutral500",
            },
        },
    ],
    defaultVariants: {
        variant: "primary",
        size: 2,
    },
});

export const linkWithButtonStyles = css(button, {
    "&:hover, &:focus, &:active": { textDecoration: "none" },
});
