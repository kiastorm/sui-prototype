import * as TabsPrimitive from "@radix-ui/react-tabs";
import { default as React } from "react";
import { styled } from "../react-stitches";
import { Separator } from "../separator";

// import { Separator } from "./Separator";

export const Tabs = styled(TabsPrimitive.Root, {
  display: "flex",
  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
  },
});

export const TabsTrigger = styled(TabsPrimitive.Trigger, {
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

  "&:disabled": {
    pointerEvents: "none",
    opacity: 0.4,
  },

  "&:not(:disabled)": {
    "@hover": {
      "&:hover": {
        color: "$neutral900",
        borderBottomColor: "$purple900",
      },
    },
  },

  "&:focus": {
    bgc: "$purple200",
    boxShadow: "inset 0px 0px 0px 2px $colors$purple900",
  },

  '&[data-state="active"]': {
    color: "$neutral900",
    borderBottomColor: "$purple900",
    cursor: "default",
    // borderBottomColor: "transparent",
  },
});

const StyledTabsList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: "flex",
  gap: "$6",

  // '&[data-orientation="vertical"]': {
  //     flexDirection: "column",
  //     boxShadow: "inset -1px 0 0 $slate6",
  // },
});

type TabsListPrimitiveProps = React.ComponentProps<typeof StyledTabsList>;
type TabsListProps = TabsListPrimitiveProps & {
  shouldRenderSeparator?: boolean;
};

export const TabsList = React.forwardRef<
  React.ElementRef<typeof StyledTabsList>,
  TabsListProps
>((props, forwardedRef) => {
  const { shouldRenderSeparator = true, ...rest } = props;
  return (
    <>
      <StyledTabsList {...rest} ref={forwardedRef} />
      {shouldRenderSeparator && <Separator />}
    </>
  );
});

export const TabsContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  "&:focus": {
    outline: "none",
    boxShadow: "inset 0 0 0 1px $slate8, 0 0 0 1px $slate8",
  },
});
