import { styled } from "@sui/react-stitches-config";
import { cx } from "@sui/utils";
import React from "react";

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
