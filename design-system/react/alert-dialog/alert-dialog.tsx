import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cx } from "../../core/utils";
import React from "react";

import { overlayStyles } from "../overlay";
import { panelStyles } from "../panel";
import { css, styled } from "../react-stitches";

type AlertDialogProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Root
> & {
  children: React.ReactNode;
};

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, overlayStyles, {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: "$3",
});

export function AlertDialog({ children, ...props }: AlertDialogProps) {
  return (
    <AlertDialogPrimitive.Root {...props}>{children}</AlertDialogPrimitive.Root>
  );
}

export const alertDialogContent = css(panelStyles, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 200,
  maxHeight: "85vh",
  marginTop: "-5vh",

  "&:focus": {
    outline: "none",
  },
});

export const AlertDialogContent = React.forwardRef<
  React.ElementRef<"section">,
  Omit<AlertDialogContentProps, "asChild">
>((props, forwardedRef) => {
  const { children, className, ...rest } = props;
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <AlertDialogPrimitive.Content asChild {...rest}>
        <section
          className={cx(
            "sui-alert-dialog__content",
            alertDialogContent(),
            className
          )}
          ref={forwardedRef}
        >
          {children}
        </section>
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Portal>
  );
});

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogTitle = AlertDialogPrimitive.Title;
export const AlertDialogDescription = AlertDialogPrimitive.Description;
export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
