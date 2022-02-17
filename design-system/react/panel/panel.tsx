import { css, styled } from "../react-stitches";

export const panelStyles = css({
    backgroundColor: "$panel",
    borderRadius: "$3",
    boxShadow:
        "$colors$shadowLight 0px 10px 38px -10px, $colors$shadowDark 0px 10px 20px -15px",
    zIndex: "$3",
});

export const Panel = styled("div", panelStyles);
