import React from "react";
import { FaSort } from "react-icons/fa";
import { cx } from "../../core/utils";
import { styled } from "../react-stitches";

const StyledSelectWrapper = styled("div", {
  backgroundColor: "$loContrast",
  borderRadius: "$2",
  boxSizing: "border-box",
  border: "1px solid $colors$neutral500",
  color: "$hiContrast",
  // fontFamily: "$sans",
  fontSize: "$1",
  fontVariantNumeric: "tabular-nums",
  fontWeight: 400,
  flexShrink: 0,

  "&:focus-within": {
    zIndex: 1,
    boxShadow:
      "inset 0 0 0 1px $colors$purple400, 0px 0px 0px 2px $colors$purple400",
  },
  variants: {
    size: {
      1: {
        borderRadius: "$2",
        height: "$6",
        minWidth: "$12",
        px: "$2",
        fontSize: "$3",
        lineHeight: "$fontSizes$5",
        $$iconSize: "$3",
        ".sui-select--icon": {
          // Use margins instead of top/left to avoid setting "position: relative" on parent,
          // which would make stacking context tricky with Select used in a control group.
          marginTop: "$2",
          marginLeft: -16,
        },
      },
      2: {
        borderRadius: "$2",
        height: "$8",
        minWidth: "$16",
        px: "$4",
        fontSize: "$5",
        lineHeight: "$fontSizes$4",
        $$iconSize: "$4",
        ".sui-select--icon": {
          // Use margins instead of top/left to avoid setting "position: relative" on parent,
          // which would make stacking context tricky with Select used in a control group.
          marginTop: "$2",
          marginLeft: "-$2",
        },
      },
      3: {
        borderRadius: "$2",
        height: "$9",
        px: "$6",
        fontSize: "$5",
        lineHeight: "$fontSizes$4",
        $$iconSize: "$4",
        ".sui-select--icon": {
          // Use margins instead of top/left to avoid setting "position: relative" on parent,
          // which would make stacking context tricky with Select used in a control group.
          marginTop: 5,
          marginLeft: -16,
        },
      },
    },
  },

  defaultVariants: {
    size: 2,
  },
});

const StyledSelect = styled("select", {
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "inherit",
  color: "inherit",
  font: "inherit",
  outline: "none",
  width: "100%",
  height: "100%",
  pl: "$1",
  pr: "$3",
  lineHeight: "25px",
});

const StyledCaretSortIcon = styled(FaSort, {
  position: "absolute",
  pointerEvents: "none",
  display: "inline",
});

interface SelectProps
  extends Omit<React.ComponentProps<typeof StyledSelect>, "size"> {
  size?: React.ComponentProps<typeof StyledSelectWrapper>["size"];
}

export const Select = React.forwardRef<
  React.ElementRef<typeof StyledSelect>,
  SelectProps
>(({ css, size, className, ...props }, forwardedRef) => (
  <StyledSelectWrapper
    className={cx("sui-select", className)}
    size={size}
    css={css}
  >
    <StyledSelect
      className="sui-select--select"
      ref={forwardedRef}
      {...props}
    />
    <StyledCaretSortIcon className="sui-select--icon" />
  </StyledSelectWrapper>
));

Select.toString = () => ".sui-select";
