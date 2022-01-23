import { styled } from "@sui/react-stitches-config";
import { cx } from "@sui/utils";
import { withClassName } from "@sui/react-utils";
import React from "react";

export const StyledBox = styled("div", {
  // Reset
  boxSizing: "border-box",
});

export const Box = withClassName("sui-box", StyledBox);
