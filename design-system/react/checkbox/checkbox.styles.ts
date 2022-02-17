import { css } from "../react-stitches";

export const checkbox = css({
    all: "unset",
    boxSizing: "border-box",
    userSelect: "none",
    "&::before": {
        boxSizing: "border-box",
    },
    "&::after": {
        boxSizing: "border-box",
    },

    alignItems: "center",
    appearance: "none",
    display: "inline-flex",
    justifyContent: "center",
    lineHeight: "1",
    margin: "0",
    gap: "$2",
    outline: "none",
    padding: "0",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",

    color: "white",
    boxShadow: "inset 0 0 0 1px $colors$neutral700",
    overflow: "hidden",
    "@hover": {
        "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$neutral900",
        },
    },
    "&:focus": {
        outline: "none",
        borderColor: "$red7",
        boxShadow: "0 0 0 2px $colors$neutral900",
        ".sui-checkbox__indicator": {
            bgc: "$purple800",
        },
    },

    variants: {
        size: {
            "1": {
                width: "$4",
                height: "$4",
                borderRadius: "$2",
            },
            "2": {
                width: "$5",
                height: "$5",
                borderRadius: "$2",
            },
        },
    },
    defaultVariants: {
        size: "1",
    },
});

export const checkboxIndicator = css({
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    bgc: "$purple900",
    p: "0.1875rem", // 3px
    color: "white",
    width: "100%",
});
