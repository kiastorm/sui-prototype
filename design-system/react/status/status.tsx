import { styled } from "../react-stitches";

export const Status = styled("div", {
    borderRadius: "50%",
    flexShrink: 0,

    variants: {
        size: {
            "1": {
                width: 5,
                height: 5,
            },
            "2": {
                width: 8,
                height: 8,
            },
        },
        variant: {
            lightGray: {
                backgroundColor: "$neutral500",
            },
            gray: {
                backgroundColor: "$neutral700",
            },
            green: {
                backgroundColor: "$green900",
            },
            // blue: {
            // 		backgroundColor: "$blue9",
            // },
            // yellow: {
            //     backgroundColor: "$yellow9",
            // },
            // red: {
            //     backgroundColor: "$red9",
            // },
        },
    },
    defaultVariants: {
        size: "2",
        variant: "green",
    },
});
