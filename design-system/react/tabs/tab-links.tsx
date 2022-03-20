import { cx } from "../../core/utils";
import { Separator } from "../separator/separator";
import React from "react";
import { css } from "../react-stitches";

export const tabLinksList = css({
  flexShrink: 0,
  display: "flex",
  gap: "$6",
});

export const tabLink = css({
  all: "unset",
  boxSizing: "border-box",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
  border: "none",
  cursor: "pointer",
  transition: "all 0.15s ease-in-out",
  gap: "$2",

  flexShrink: 0,
  height: "2.25rem", // 36px
  display: "inline-flex",
  lineHeight: 1,
  fontSize: "$label-2",
  fontWeight: "bold",
  px: "$2",

  userSelect: "none",
  outline: "none",
  alignItems: "center",
  justifyContent: "center",
  color: "$neutral800",
  borderBottom: "2px solid transparent",
  zIndex: "10",

  "&:not(:disabled)": {
    "@hover": {
      "&:hover": {
        color: "$neutral900",
        borderBottomColor: "$purple900",
      },
    },
  },

  "&:hover, &:focus, &:active": { textDecoration: "none" },

  "&:focus": {
    boxShadow: "0px 0px 0px 2px $colors$purple900",
  },

  variants: {
    active: {
      true: {
        pointerEvents: "none",
        color: "$neutral900",
        borderBottomColor: "$purple900",
      },
    },
    disabled: {
      true: {
        pointerEvents: "none",
        opacity: 0.4,
      },
    },
  },
});

export const TabLinks = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentProps<"div"> & { shouldRenderSeparator?: boolean }
>((props, forwardedRef) => {
  const { shouldRenderSeparator = true, className, ...rest } = props;
  return (
    <>
      <div
        ref={forwardedRef}
        className={cx("sui-tab-links", tabLinksList(), className)}
        {...rest}
      />
      {shouldRenderSeparator && <Separator />}
    </>
  );
});

export const TabLink = (props) => {
  const { active, disabled, ...rest } = props;
  const Comp = active || disabled ? "span" : "a";

  return (
    <Comp
      {...rest}
      className={cx("sui-tab-links__link", tabLink({ active, disabled }))}
    />
  );
};
