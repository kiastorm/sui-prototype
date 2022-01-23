import React from "react";
import { cx } from "../../core/utils";
import { styled } from "../react-stitches";

export const StyledBox = styled("div", {
  // Reset
  boxSizing: "border-box",
});

export const Box = React.forwardRef((props, forwardedRef) => (
  <StyledBox
    ref={forwardedRef}
    className={cx("sui-box", props.className)}
    {...props}
  />
)) as typeof StyledBox;
