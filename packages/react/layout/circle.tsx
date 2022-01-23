import { styled } from "@sui/react-stitches";
import { cx } from "@sui/utils";
import React from "react";

import { squareStyles } from ".";

export const circleStyles = {
  ...squareStyles,
  borderRadius: "$round",
};

/**
 * `Circle` renders a circle-shaped `div` element.
 */
export const StyledCircle = styled("div", circleStyles);

export const Circle = React.forwardRef((props, forwardedRef) => (
  <StyledCircle
    ref={forwardedRef}
    className={cx("sui-circle", props.className)}
    {...props}
  />
)) as typeof StyledCircle;
