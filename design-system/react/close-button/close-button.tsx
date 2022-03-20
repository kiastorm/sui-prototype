import { cx } from "../../core/utils";
import { IconButton, IconButtonVariants } from "../button";
import React from "react";
import { FaCross, FaTimes } from "react-icons/fa";

interface CloseButtonProps
  extends React.ComponentProps<"button">,
    Pick<IconButtonVariants, "variant" | "size" | "round"> {}

export const CloseButton = React.forwardRef<
  React.ElementRef<"button">,
  CloseButtonProps
>((props, forwardedRef) => {
  const { className, ...rest } = props;
  return (
    <IconButton
      className={cx("sui-close-button", className)}
      aria-label="Close"
      round
      type="button"
      variant="ghost-secondary"
      ref={forwardedRef}
      {...rest}
    >
      <FaTimes />
    </IconButton>
  );
});
