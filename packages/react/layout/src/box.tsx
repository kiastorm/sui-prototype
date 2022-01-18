import { css, styled } from "@singlestore-ui/core";

export const Box = styled("div", {
  // Reset
  boxSizing: "border-box",
});

export const square = css({
  // Reset
  boxSizing: "border-box",

  flexShrink: 0,
  flexGrow: 0,

  variants: {
    shouldCenterContent: {
      true: { display: "flex", alignItems: "center", justifyContent: "center" },
    },
    size: {
      1: {
        width: "$1",
        height: "$1",
      },
      2: {
        width: "$2",
        height: "$2",
      },
      3: {
        width: "$3",
        height: "$3",
      },
      4: {
        width: "$4",
        height: "$4",
      },
      5: {
        width: "$5",
        height: "$5",
      },
      6: {
        width: "$6",
        height: "$6",
      },
      7: {
        width: "$7",
        height: "$7",
      },
      8: {
        width: "$8",
        height: "$8",
      },
      9: {
        width: "$9",
        height: "$9",
      },
    },
  },
  defaultVariants: {
    shouldCenterContent: true,
  },
});

export const Square = styled("div", square);

export const Circle = styled("div", square, { borderRadius: "$round" });
