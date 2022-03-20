import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { isString } from "../../core/utils";
import React from "react";

import { Box } from "../layout";
import { css, VariantProps } from "../react-stitches";
import { Paragraph } from "../text";

interface TooltipProps
  extends React.ComponentProps<typeof TooltipPrimitive.Root>,
    React.ComponentProps<typeof TooltipPrimitive.Content>,
    VariantProps<typeof tooltipContent> {
  content: React.ReactNode;
}

const tooltipContent = css({
  backgroundColor: "$neutral800",
  borderRadius: "$3",
  padding: "$2",

  "&[data-side=top][data-align=start]": {
    borderBottomLeftRadius: 0,
  },

  "&[data-side=top][data-align=end]": {
    borderBottomRightRadius: 0,
  },
  "&[data-side=bottom][data-align=start]": {
    borderTopLeftRadius: 0,
  },

  "&[data-side=bottom][data-align=end]": {
    borderTopRightRadius: 0,
  },

  variants: {
    multiline: {
      true: {
        maxWidth: 250,
        pb: 7,
      },
    },
  },
});

export const Tooltip2Content = (props) => (
  <TooltipPrimitive.Content
    className={tooltipContent({})}
    side="top"
    align="center"
    sideOffset={5}
    {...props}
  >
    {props.children}
    <Box css={{ color: "$transparentExtreme" }}>
      <TooltipPrimitive.Arrow
        width={16}
        height={8}
        style={{
          fill: "currentColor",
        }}
      />
    </Box>
  </TooltipPrimitive.Content>
);
export const Tooltip2Trigger = TooltipPrimitive.Trigger;
export const Tooltip2Root = TooltipPrimitive.Root;

export function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  multiline = true,
  ...props
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

      <TooltipPrimitive.Content
        className={tooltipContent({ multiline })}
        side="top"
        align="center"
        sideOffset={5}
        {...props}
      >
        {isString(content) ? (
          <Paragraph
            variant={multiline ? "body-long-1" : "body-short-1"}
            color="inverse"
          >
            {content}
          </Paragraph>
        ) : (
          content
        )}
        <Box css={{ color: "$transparentExtreme" }}>
          <TooltipPrimitive.Arrow
            width={16}
            height={8}
            style={{
              fill: "currentColor",
            }}
          />
        </Box>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
}
