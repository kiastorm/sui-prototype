import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { styled } from "../react-stitches";

export const Separator = styled(SeparatorPrimitive.Root, {
    border: "none",
    margin: 0,
    flexShrink: 0,
    backgroundColor: "$neutral300",
    cursor: "default",

    variants: {
        size: {
            full: {
                '&[data-orientation="horizontal"]': {
                    height: "1px",
                    width: "100%",
                },

                '&[data-orientation="vertical"]': {
                    width: "1px",
                    height: "100%",
                },
            },
        },
    },
    defaultVariants: {
        size: "full",
    },
});
