import { css, styled } from "../react-stitches";

export const container = css({
    // Reset
    boxSizing: "border-box",
    flexShrink: 0,

    // Custom
    ml: "auto",
    mr: "auto",
    p: "$6",
    variants: {
        size: {
            "1": {
                maxWidth: "430px",
            },
            "2": {
                maxWidth: "715px",
            },
            "3": {
                maxWidth: "1145px",
            },
            "4": {
                maxWidth: "none",
            },
        },
    },
    defaultVariants: {
        size: "4",
    },
});

export const Container = styled("div", container);
