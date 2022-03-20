import { styled } from "../react-stitches";

export const Code = styled("code", {
    fontFamily: "$mono",
    fontSize: "max(12px, 85%)",
    whiteSpace: "nowrap",

    variants: {
        variant: {
            gray: {
                backgroundColor: "$neutral200",
                color: "$neutral900",
            },
            // violet: {
            //     backgroundColor: "$violet3",
            //     color: "$violet11",
            // },
        },
    },
    defaultVariants: {
        variant: "gray",
    },
});

export const Pre = styled("pre", {
    m: 0,
    p: "$4",
    backgroundColor: "$neutral200",
    code: {
        whiteSpace: "inherit",
        lineHeight: "1.6",
    },
});
