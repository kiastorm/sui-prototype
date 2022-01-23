import { styled } from "@sui/react-stitches-config";
import { withClassName } from "@sui/react-utils";
import { squareStyles } from ".";

export const circleStyles = {
  ...squareStyles,
  borderRadius: "$round",
};

/**
 * `Circle` renders a circle-shaped `div` element.
 */
export const StyledCircle = styled("div", circleStyles);

export const Circle = withClassName("sui-circle", StyledCircle);
