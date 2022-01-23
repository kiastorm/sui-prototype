import { styled } from "@sui/react-stitches-config";
import { withClassName } from "@sui/react-utils";

export const squareStyles = {
  // Reset
  boxSizing: "border-box",

  flexShrink: 0,
  flexGrow: 0,

  variants: {
    shouldCenterContent: {
      true: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    /**
     * Used to set the size of the square.
     */
    size: {
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
      10: {
        width: "$10",
        height: "$10",
      },
      11: {
        width: "$11",
        height: "$11",
      },
      12: {
        width: "$12",
        height: "$12",
      },
      13: {
        width: "$13",
        height: "$13",
      },
      14: {
        width: "$14",
        height: "$14",
      },
      15: {
        width: "$15",
        height: "$15",
      },
      16: {
        width: "$16",
        height: "$16",
      },
      17: {
        width: "$17",
        height: "$17",
      },
      18: {
        width: "$18",
        height: "$18",
      },
      19: {
        width: "$19",
        height: "$19",
      },
      20: {
        width: "$20",
        height: "$20",
      },
    },
  },
  defaultVariants: {
    shouldCenterContent: true,
    size: "4",
  },
};

/**
 * `Square` renders a square-shaped `div` element.
 */
export const StyledSquare = styled("div", squareStyles);

export const Square = withClassName("sui-square", StyledSquare);
