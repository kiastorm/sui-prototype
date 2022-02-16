import * as React from "react";
import { styled, css, VariantProps, CSS } from "../react-stitches";
import merge from "lodash.merge";

// https://webaim.org/techniques/semanticstructure/
// https://discord.com/channels/752614004387610674/910871187826044978/928263845330427906

export const textStyles = {
  lineHeight: "1",
  margin: "0",
  fontWeight: 400,
  fontVariantNumeric: "tabular-nums",
  display: "block",
  color: "$hiContrast",

  // corrective letter-spacing and text-indent styles
  // should go here too, because they're determined by font-size.
  // You could also put line-height here too, if your devs prefer
  // a default line-height that works in some cases. But understand
  // that line-height is also a function of line-length, so the
  // default values here won't be optimal in many cases.
  variants: {
    weight: {
      medium: {
        fontWeight: 500,
      },
      bold: {
        fontWeight: 700,
      },
    },
    variant: {
      "body-short-1": {
        fontSize: 4, // 14px
        lineHeight: "$body-short-1", // 18px
      },
      "body-long-1": {
        fontSize: "$body-1", // 14px
        lineHeight: "$body-long-1", // 20px
      },
      "body-short-2": {
        fontSize: "$body-2", // 16px
        lineHeight: "$body-short-2", // 22px
      },
      "body-long-2": {
        fontSize: "$body-2", // 16px
        lineHeight: "$body-long-2", // 24px
      },
      "heading-1": {
        fontSize: "$heading-1", // 14px
        lineHeight: "$heading-1", // 18px
      },
      "heading-2": {
        fontSize: "$heading-2", // 14px
        lineHeight: "$heading-2", // 18px
      },
      "heading-3": {
        fontSize: "$heading-3", // 14px
        lineHeight: "$heading-3", // 18px
      },
      "heading-4": {
        fontSize: "$heading-4", // 14px
        lineHeight: "$heading-4", // 18px
      },
      "heading-5": {
        fontSize: "$heading-5", // 14px
        lineHeight: "$heading-5", // 18px
      },
      "heading-6": {
        fontSize: "$heading-6", // 14px
        lineHeight: "$heading-6", // 18px
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "3",
    variant: "contrast",
  },
};

export const text = css(textStyles);

export const Text = styled("span", text);

export const Paragraph = styled("p", text);

export const Quote = styled("q", text);
export const ListItem = styled("li", text);
export const Small = styled("small", text);
export const Deleted = styled("del", text);

export const H1 = styled("h1", text);
export const H2 = styled("h2", text);
export const H3 = styled("h3", text);
export const H4 = styled("h4", text);
export const H5 = styled("h5", text);
export const H6 = styled("h6", text);

export const Ins = styled("ins", text, { textDecoration: "none" });
export const Em = styled("em", text, { fontStyle: "italic" });
export const Strong = styled("strong", text, { fontWeight: 700 });
export const Mark = styled("mark", text, { backgroundColor: "$purple400" });

// Then export a second layer of pre-formatted components for application specific use-cases
export const Link = styled("a", text, {
  alignItems: "center",
  gap: "$1",
  flexShrink: 0,
  outline: "none",
  textDecorationLine: "none",
  textDecorationColor: "$indigo600",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  lineHeight: "inherit",
  cursor: "pointer",
  "@hover": {
    "&:hover": {
      textDecorationLine: "underline",
    },
  },
  "&:focus": {
    outlineWidth: "2px",
    outlineStyle: "solid",
    textDecorationLine: "none",
  },
  [`& ${Text}`]: {
    color: "inherit",
  },
  variants: {
    variant: {
      primary: {
        color: "$indigo600",
        textDecorationColor: "$indigo600",
        "&:focus": {
          outlineColor: "$purple800",
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
