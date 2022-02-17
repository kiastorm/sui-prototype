import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cx } from "../../core/utils";
import { text } from "../text";
import React from "react";

import { CloseButton } from "../close-button/close-button";
import { container } from "../layout";
import { overlayStyles } from "../overlay";
import { CSS, css, keyframes, styled, VariantProps } from "../react-stitches";
import { Separator } from "../separator";

const fadeIn = keyframes({
  from: { opacity: "0" },
  to: { opacity: "1" },
});

const fadeOut = keyframes({
  from: { opacity: "1" },
  to: { opacity: "0" },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, overlayStyles, {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,

  zIndex: "$1",
  '&[data-state="open"]': {
    animation: `${fadeIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },
});

type DrawerProps = React.ComponentProps<typeof DialogPrimitive.Root>;

export function Drawer({ children, ...props }: DrawerProps) {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledOverlay />
      {children}
    </DialogPrimitive.Root>
  );
}

const slideIn = keyframes({
  from: { transform: "$$transformValue" },
  to: { transform: "translate3d(0,0,0)" },
});

const slideOut = keyframes({
  from: { transform: "translate3d(0,0,0)" },
  to: { transform: "$$transformValue" },
});

const drawerContent = css({
  display: "flex",
  flexDirection: "column",

  backgroundColor: "$panel",
  boxShadow:
    "$colors$shadowLight 0 0 38px -10px, $colors$shadowDark 0 0 35px -15px",
  position: "fixed",
  top: 0,
  bottom: 0,
  overflowY: "auto",
  zIndex: "$2",

  // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
  // Affects animated and non-animated dialogs alike.
  willChange: "transform",

  // '&:focus': {
  //   outline: 'none',
  // },

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  variants: {
    side: {
      top: {
        $$transformValue: "translate3d(0,-100%,0)",
        width: "100%",
        height: 300,
        bottom: "auto",
      },
      right: {
        $$transformValue: "translate3d(100%,0,0)",
        right: 0,
      },
      bottom: {
        $$transformValue: "translate3d(0,100%,0)",
        width: "100%",
        height: 300,
        bottom: 0,
        top: "auto",
      },
      left: {
        $$transformValue: "translate3d(-100%,0,0)",
        left: 0,
      },
    },
    size: {
      1: {},
      2: {},
    },
  },
  compoundVariants: [
    {
      size: 1,
      side: "left",
      css: {
        maxWidth: "100vw",
        "@bp1": {
          width: 480,
        },
      },
    },
    {
      size: 1,
      side: "right",
      css: {
        maxWidth: "100vw",
        "@bp1": {
          width: 480,
        },
      },
    },
    {
      size: 2,
      side: "left",
      css: {
        maxWidth: "100vw",
        "@bp1": {
          width: 800,
        },
      },
    },
    {
      size: 2,
      side: "right",
      css: {
        maxWidth: "100vw",
        "@bp1": {
          width: 800,
        },
      },
    },

    // // Top & Bottom
    // {
    //     size: 1,
    //     side: "top",
    //     css: {
    //         maxHeight: "100vh",
    //         "@bp1": {
    //             height: 480,
    //         },
    //     },
    // },
    // {
    //     size: 1,
    //     side: "bottom",
    //     css: {
    //         maxHeight: "100vh",
    //         "@bp1": {
    //             height: 480,
    //         },
    //     },
    // },
    // {
    //     size: 2,
    //     side: "top",
    //     css: {
    //         maxHeight: "100vh",
    //         "@bp1": {
    //             height: 800,
    //         },
    //     },
    // },
    // {
    //     size: 2,
    //     side: "bottom",
    //     css: {
    //         maxHeight: "100vh",
    //         "@bp1": {
    //             height: 800,
    //         },
    //     },
    // },
  ],

  defaultVariants: {
    side: "right",
    size: 2,
  },
});

const StyledCloseButton = styled(DialogPrimitive.Close, {
  position: "absolute",
  top: "$4",
  right: "$4",
});

export const DrawerHeader = React.forwardRef<
  React.ElementRef<"header">,
  React.ComponentProps<"header"> & { shouldRenderSeparator?: boolean }
>((props, forwardedRef) => {
  const { children, className, shouldRenderSeparator = true, ...rest } = props;
  return (
    <>
      <header
        className={cx(
          "sui-drawer__header",
          container({ css: { width: "100%", pr: "$15" } }),
          className
        )}
        {...rest}
        ref={forwardedRef}
      >
        {children}
      </header>
      {shouldRenderSeparator && <Separator />}
    </>
  );
});

export const DrawerMain = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentProps<"div">
>((props, forwardedRef) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={cx(
        "sui-drawer__main",
        container({ css: { flexGrow: 1, width: "100%" } }),
        className
      )}
      {...rest}
      ref={forwardedRef}
    >
      {children}
    </div>
  );
});

export const DrawerFooter = React.forwardRef<
  React.ElementRef<"footer">,
  React.ComponentProps<"footer"> & { shouldRenderSeparator?: boolean }
>((props, forwardedRef) => {
  const { children, shouldRenderSeparator = true, className, ...rest } = props;
  return (
    <>
      {shouldRenderSeparator && <Separator />}
      <footer
        className={cx(
          "sui-drawer__footer",
          container({ css: { width: "100%", py: "$2" } }),
          className
        )}
        {...rest}
        ref={forwardedRef}
      >
        {children}
      </footer>
    </>
  );
});

type DrawerContentVariants = VariantProps<typeof drawerContent>;
type DialogContentPrimitiveProps = React.ComponentProps<
  typeof DialogPrimitive.Content
>;
type DrawerContentProps = DialogContentPrimitiveProps & DrawerContentVariants;

export const DrawerContent = React.forwardRef<
  React.ElementRef<"section">,
  Omit<DrawerContentProps, "asChild">
>((props, forwardedRef) => {
  const { children, className, side, size, ...rest } = props;
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Content asChild {...rest}>
        <section
          className={cx(
            "sui-drawer__content",
            drawerContent({ side, size }),
            className
          )}
          ref={forwardedRef}
        >
          {children}
          <StyledCloseButton asChild>
            <CloseButton />
          </StyledCloseButton>
        </section>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});

export const DrawerTrigger = DialogPrimitive.Trigger;
export const DrawerClose = DialogPrimitive.Close;

export const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentProps<typeof DialogPrimitive.Title> & VariantProps<typeof text>
>((props, forwardedRef) => {
  const {
    children,
    className,
    variant = "heading-3",
    color,
    weight,
    ...rest
  } = props;
  return (
    <DialogPrimitive.Title
      className={cx(
        "sui-drawer__title",
        text({ variant, color, weight }),
        className
      )}
      {...rest}
      ref={forwardedRef}
    >
      {children}
    </DialogPrimitive.Title>
  );
});
export const DrawerDescription = DialogPrimitive.Description;
