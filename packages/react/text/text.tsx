import { styled } from "../react-stitches";

export const Text = styled("span", {
  // Reset
  lineHeight: "1",
  margin: "0",
  fontWeight: 400,
  fontVariantNumeric: "tabular-nums",
  display: "block",

  variants: {
    size: {
      "1": {
        fontSize: "$1",
      },
      "2": {
        fontSize: "$2",
      },
      "3": {
        fontSize: "$3",
      },
      "4": {
        fontSize: "$4",
      },
      "5": {
        fontSize: "$5",
      },
      "6": {
        fontSize: "$6",
      },
      "7": {
        fontSize: "$7",
      },
      "8": {
        fontSize: "$8",
      },
      "9": {
        fontSize: "$9",
      },
      "10": {
        fontSize: "$10",
      },
      "11": {
        fontSize: "$11",
      },
      "12": {
        fontSize: "$12",
      },
      "13": {
        fontSize: "$13",
      },
    },
    variant: {
      contrast: {
        color: "$hiContrast",
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "3",
    variant: "contrast",
  },
});
