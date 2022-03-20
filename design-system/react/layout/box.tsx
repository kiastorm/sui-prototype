import React from "react";

import { cx } from "../../core/utils";
import { css, styled } from "../react-stitches";

export const box = css({
    boxSizing: "border-box",
});

const StyledBox = styled("div", box);

export const Box = React.forwardRef((props, forwardedRef) => (
    <StyledBox
        ref={forwardedRef}
        className={cx("sui-box", props.className)}
        {...props}
    />
)) as typeof StyledBox;
