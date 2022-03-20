import { styled } from "../react-stitches";

//  https:/Usage/css-tricks.com/accessible-simple-responsive-tables/

export const Caption = styled("caption", {
    textAlign: "start",
    marginBottom: "$5",
});

export const Tbody = styled("tbody", {
    width: "100%",
});

export const Tfoot = styled("tfoot", {});

export const Tr = styled("tr", {});

export const Th = styled("th", {
    fontWeight: "bold",
    textAlign: "start",
    fontSize: "$label-2",
    py: "$2",
    px: "$3",
    borderBottom: "1px solid $neutral300",
    bgc: "$neutral100",
    variants: {
        align: {
            start: {
                textAlign: "start",
            },
            center: {
                textAlign: "center",
            },
            end: {
                textAlign: "end",
            },
        },
        border: {
            solid: {
                borderBottom: "1px solid $neutral300",
            },
            dashed: {
                borderBottom: "1px dashed $gray8",
            },
        },
    },
    defaultVariants: {
        align: "start",
        border: "solid",
    },
});

export const Td = styled("td", {
    p: "$3",
    borderBottom: "1px solid $neutral300",
    fontSize: "$body-short-1",
    variants: {
        align: {
            start: {
                textAlign: "start",
            },
            center: {
                textAlign: "center",
            },
            end: {
                textAlign: "end",
            },
        },
        border: {
            solid: {
                borderBottom: "1px solid $neutral300",
            },
            dashed: {
                borderBottom: "1px dashed $gray8",
            },
        },
    },
    defaultVariants: {
        align: "start",
        border: "solid",
    },
});

export const Thead = styled("thead", {
    [`& ${Th}`]: {
        fontSize: "$label-2",
        color: "$neutral800",
    },
    [`& ${Td}`]: {
        fontSize: "$label-2",
        color: "$neutral800",
    },
});

export const Table = styled("table", {
    width: "100%",
    tableLayout: "fixed",
    borderSpacing: 0,
    variants: {
        striped: {
            true: {
                [`& ${Tbody}`]: {
                    [`& ${Tr}`]: {
                        "&:nth-child(odd)": {
                            bc: "$gray2",
                        },
                    },
                },
            },
        },
    },
    // size: {
    //     1: {
    //         $$thPaddingX: "$3",
    //         $$thPaddingY: "$2",
    //         $$tdPaddingX: "$3",
    //         $$tdPaddingY: "$3",
    //     },
    // },
});
