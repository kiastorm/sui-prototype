import { styled } from "../react-stitches";

export const ControlGroup = styled("div", {
  display: "flex",

  // Make sure ControlGroup and its children don't affect normal stacking order
  position: "relative",
  zIndex: 0,

  ["& .sui-button, & .sui-icon-button, &.sui-button-as-link"]: {
    borderRadius: "0",
    "&:focus": {
      zIndex: 1,
      boxShadow:
        "inset 0 0 0 1px $colors$purple400, 0 0 0 1px $colors$purple400",
    },
    "&:first-child": {
      borderTopLeftRadius: "$2",
      borderBottomLeftRadius: "$2",
      borderRight: "none",
      "&:focus": {
        boxShadow:
          "inset 0 0 0 1px $colors$purple400, 0 0 0 1px $colors$purple400",
      },
    },
    "&:last-child": {
      borderTopRightRadius: "$2",
      borderBottomRightRadius: "$2",
      borderLeft: "none",
      "&:focus": {
        boxShadow:
          "inset 0 0 0 1px $colors$purple400, 0 0 0 1px $colors$purple400",
      },
    },
  },
  ["& .sui-input"]: {
    borderRadius: 0,
    "&:focus": {
      zIndex: 1,
      boxShadow:
        "inset 0 0 0 1px $colors$purple400, 0 0 0 1px $colors$purple400",
    },
    "&:first-child": {
      borderTopLeftRadius: "$2",
      borderBottomLeftRadius: "$2",
      borderRight: "none",
      "&:focus": {
        boxShadow:
          "inset 0 0 0 1px $colors$purple400, 0 0 0 1px $colors$purple400",
      },
    },
    "&:last-child": {
      borderTopRightRadius: "$2",
      borderBottomRightRadius: "$2",
      borderLeft: "none",
      "&:focus": {
        boxShadow:
          "inset 0 0 0 1px $colors$purple400, 0 0 0 1px $colors$purple400",
      },
    },
  },
  ["& .sui-select"]: {
    borderRadius: 0,
    "&:focus": {
      boxShadow:
        "inset 0 0 0 1px $colors$purple400, 0 0 0 -1px $colors$purple400",
    },
    "&:first-child": {
      borderTopLeftRadius: "$2",
      borderBottomLeftRadius: "$2",
      borderRight: "none",
      "&:focus": {
        boxShadow:
          "inset 0 0 0 1px $colors$purple400, 0 0 0 1px $colors$purple400",
      },
    },
    "&:last-child": {
      borderTopRightRadius: "$2",
      borderBottomRightRadius: "$2",
      borderLeft: "none",
      "&:focus": {
        boxShadow:
          "inset 0 0 0 1px $colors$purple400, 0 0 0 1px $colors$purple400",
      },
    },
  },
});
