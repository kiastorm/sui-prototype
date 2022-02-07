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
    size: {
      "1": {
        fontSize: "$1",
      },
      "2": {
        fontSize: "$2",
      },
      "3": {
        fontSize: "$3",
      },
      "4": {
        fontSize: "$4",
      },
      "5": {
        fontSize: "$5",
      },
      "6": {
        fontSize: "$6",
      },
      "7": {
        fontSize: "$7",
      },
      "8": {
        fontSize: "$8",
      },
      "9": {
        fontSize: "$9",
      },
      "10": {
        fontSize: "$10",
      },
      "11": {
        fontSize: "$11",
      },
      "12": {
        fontSize: "$12",
      },
      "13": {
        fontSize: "$13",
      },
    },
    variant: {
      contrast: {
        color: "$hiContrast",
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

export const Quote = styled("q", text);
export const Paragraph = styled("p", text);
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
      // blue: {
      //   color: "$blue11",
      //   textDecorationColor: "$blue4",
      //   "&:focus": {
      //     outlineColor: "$blue8",
      //   },
      // },
      primary: {
        color: "$indigo600",
        textDecorationColor: "$indigo600",
        "&:focus": {
          outlineColor: "$purple800",
        },
      },
      // contrast: {
      //   color: "$hiContrast",
      //   textDecoration: "underline",
      //   textDecorationColor: "$indigo600",
      //   "@hover": {
      //     "&:hover": {
      //       textDecorationColor: "$slate7",
      //     },
      //   },
      //   "&:focus": {
      //     outlineColor: "$slate8",
      //   },
      // },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const Title = React.forwardRef(
  ({ as = "h1", size = 7, weight = "bold", ...rest }, ref) => (
    <Heading ref={ref} as={as} size={size} weight={weight} {...rest} />
  )
) as typeof Heading;

const DEFAULT_TAG = "h1";

type TextSizeVariants = Pick<VariantProps<typeof Text>, "size">;
type HeadingSizeVariants =
  | "1"
  | 1
  | "2"
  | 2
  | "3"
  | 3
  | "4"
  | 4
  | "5"
  | 5
  | "6"
  | 6
  | "7"
  | 7
  | "8"
  | 8
  | "9"
  | 9;

type HeadingVariants = { size?: HeadingSizeVariants } & Omit<
  VariantProps<typeof Text>,
  "size"
>;
type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> &
  HeadingVariants & { css?: CSS; as?: any };

export const Heading = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  HeadingProps
>((props, forwardedRef) => {
  const { size = "1", ...textProps } = props;

  // // This is the mapping of Heading Variants to Text variants
  // const textSize: Record<HeadingSizeVariants, TextSizeVariants["size"]> = {
  //   1: { "@initial": "8", "@bp2": "9" },
  //   2: { "@initial": "10", "@bp2": "10" },
  //   3: { "@initial": "12", "@bp2": "12" },
  //   4: { "@initial": "13", "@bp2": "13" },
  // };

  // // This is the mapping of Heading Variants to Text css
  // const textCss: Record<HeadingSizeVariants, CSS> = {
  //   1: { fontWeight: 700, lineHeight: "26px", "@bp2": { lineHeight: "30px" } },
  //   2: { fontWeight: 700, lineHeight: "36px" },
  //   3: { fontWeight: 700, lineHeight: "42px" },
  //   4: { fontWeight: 700, lineHeight: "62px" },
  // };

  // This is the mapping of Heading Variants to Text variants
  const textSize: Record<HeadingSizeVariants, TextSizeVariants["size"]> = {
    1: 1,
    2: 3,
    3: 3,
    4: 4,
    5: 6,
    6: 8,
    7: 10,
    8: 12,
    9: 13,
  };

  // This is the mapping of Heading Variants to Text css
  const textCss: Record<HeadingSizeVariants, CSS> = {
    1: { lineHeight: "16px" },
    2: { lineHeight: "16px" },
    3: { lineHeight: "20px" },
    4: { lineHeight: "20px" },
    5: { lineHeight: "24px" },
    6: { lineHeight: "26px" },
    7: { lineHeight: "28px" },
    8: { lineHeight: "36px" },
    9: { lineHeight: "48px" },
  };

  return (
    <Text
      as={DEFAULT_TAG}
      {...textProps}
      ref={forwardedRef}
      size={textSize[size]}
      css={{
        fontVariantNumeric: "proportional-nums",
        ...merge(textCss[size], props.css),
      }}
    />
  );
});
