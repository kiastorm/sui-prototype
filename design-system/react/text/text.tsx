import React from "react";
import { cx } from "../../core/utils";
import { VariantProps, css, styled } from "../react-stitches";

// https://webaim.org/techniques/semanticstructure/
// https://discord.com/channels/752614004387610674/910871187826044978/928263845330427906

export const textStyles = {
  lineHeight: "1",
  margin: "0",
  fontWeight: 400,
  fontVariantNumeric: "tabular-nums",
  display: "block",
  color: "$neutral900",

  // corrective letter-spacing and text-indent styles
  // should go here too, because they're determined by font-size.
  // You could also put line-height here too, if your devs prefer
  // a default line-height that works in some cases. But understand
  // that line-height is also a function of line-length, so the
  // default values here won't be optimal in many cases.
  variants: {
    uppercase: {
      true: {
        textTransform: "uppercase",
      },
    },
    weight: {
      medium: {
        fontWeight: 500,
      },
      bold: {
        fontWeight: 700,
      },
    },
    color: {
      hiContrast: {
        color: "$textHiContrast",
      },
      purple: {
        color: "$purple900",
      },
      danger: {},
      inverse: {
        color: "$neutral0",
      },
    },
    variant: {
      "annotation-1": {
        fontSize: "$annotation-1", // 11px
        lineHeight: "$annotation-1", // 16px
      },
      "label-1": {
        fontSize: "$label-1", // 11px
        lineHeight: "$label-1", // 16px
      },
      "label-2": {
        fontSize: "$label-2", // 14px
        lineHeight: "$label-2", // 16px
      },
      "body-1": {
        fontSize: "$body-1", // 14px
      },
      "body-2": {
        fontSize: "$body-2", // 14px
      },
      "body-short-1": {
        fontSize: "$body-1", // 14px
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
        fontWeight: "bold",
      },
      "heading-2": {
        fontSize: "$heading-2", // 14px
        lineHeight: "$heading-2", // 18px
        fontWeight: "bold",
      },
      "heading-3": {
        fontSize: "$heading-3", // 14px
        lineHeight: "$heading-3", // 18px
        fontWeight: "bold",
      },
      "heading-4": {
        fontSize: "$heading-4", // 14px
        lineHeight: "$heading-4", // 18px
        fontWeight: "bold",
      },
      "heading-5": {
        fontSize: "$heading-5", // 14px
        lineHeight: "$heading-5", // 18px
        fontWeight: "bold",
      },
      "heading-6": {
        fontSize: "$heading-6", // 14px
        lineHeight: "$heading-6", // 18px
        fontWeight: "bold",
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "3",
    variant: "body-long-2",
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

// Then export a second layer of pre-formatted components

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Heading = React.forwardRef<
  React.ElementRef<HeadingElement>,
  React.ComponentProps<HeadingElement> &
    Omit<VariantProps<typeof text>, "variant"> & {
      size?: "1" | 1 | "2" | 2 | "3" | 3 | "4" | 4 | "5" | 5 | "6" | 6;
      as: HeadingElement;
    }
>((props) => {
  const {
    as: Comp,
    className,
    children,
    size = 2,
    color,
    weight,
    uppercase,
    ...rest
  } = props;

  return (
    <Comp
      className={cx(
        "sui-heading",
        text({
          variant: `heading-${size}`,
          color,
          weight,
          uppercase,
        }),
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
});

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
  color: "$indigo600",
  "&:focus": {
    borderRadius: "$2",
    outline: "none",
    bgc: "$neutral200",
    boxShadow: "0px 0px 0px 2px $colors$indigo800",
  },
  "@hover": {
    "&:hover": {
      textDecorationLine: "underline",
    },
  },
  [`& ${Text}`]: {
    color: "inherit",
  },
});
