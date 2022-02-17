import { css, keyframes } from "../../../../react/react-stitches";

export const navRoot = css({
  overflowY: "hidden",
  display: "flex",
  flexDirection: "column",
});

export const navSectionAccordionHeader = css({
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  px: "$3",
  gap: "$1",
  height: "$10",
  svg: {
    width: "12px",
    height: "12px",
  },

  "&[data-state=open]": {
    borderBottom: "1px solid $neutral300",
  },

  variants: {
    isActive: {
      true: {
        bgc: "white",
        h2: {
          color: "$purple900",
        },

        "&:hover": {
          bgc: "white",
        },
      },
      false: {
        h2: {
          color: "$neutral900",
        },
        svg: {
          color: "$neutral900",
        },
      },
    },
  },
});

export const navSectionAccordion = css({
  // flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  // flexBasis: 0,
  "&:not(:first-child)": {
    // [navSectionHeader.className]: {
    borderTop: "1px solid $neutral300",
    // },
  },
  "&[data-state=closed]": {
    flexShrink: 0,
  },
  "&[data-state=open]": {
    flexGrow: 1,
    // flexBasis: '100%'
  },
});

const open = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const close = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

export const navSectionAccordionContent = css({
  maxHeight: "100%",
  // flexBasis: "500px",
  overflowY: "auto",
  flexGrow: 1,

  variants: {
    shouldAnimate: {
      true: {
        // eslint-disable-next-line quotes
        '&[data-state="open"]': { animation: `${open} 300ms ease-out` },
        // eslint-disable-next-line quotes
        '&[data-state="closed"]': { animation: `${close} 300ms ease-out` },
      },
      false: {},
    },
  },
});

export const navItemAccordionContent = css({
  // display: "flex",
  // flexDirection: "column",
});

export const navItemList = css({
  display: "flex",
  flexDirection: "column",
});

export const navItemAccordion = css({
  flex: "0 0 auto",
  fontSize: "inherit",
  fontStyle: "inherit",
  color: "inherit",
  fontWeight: "inherit",
});

export const navItemAccordionIconTrigger = css({
  alignSelf: "center",
});

export const navItemText = css({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontSize: "12px",
  gap: "$2",
  fontWeight: 400,
});

export const navItemAccordionWideTrigger = css({
  flexGrow: "1",
  justifyContent: "start",
  "&:hover, &:focus,": { transform: "none" },
});

export const navItemLink = css(navItemText, {
  lineHeight: "30px",
  alignSelf: "stretch",
  flexGrow: 1,
  textDecoration: "none",

  borderRadius: "$2",
  "&:focus": {
    outline: "none",
    bgc: "$neutral200",
    boxShadow: "0px 0px 0px 2px $colors$neutral500",
  },
  "&:active": {
    bgc: "$neutral300",
  },
  "&:hover": {
    textDecoration: "underline",
  },
});

export const navItemIcon = css({
  width: "12px",
  height: "12px",
});

export const navItemRow = css({
  display: "flex",
  alignItems: "center",
  px: "$3",
  height: "$8",
  gap: "$1",
  py: "$1",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",

  svg: {
    width: "12px",
    height: "12px",
  },

  variants: {
    isActive: {
      true: {
        bgc: "$purple200",
        boxShadow: "inset .25rem 0 0 $colors$purple900",
        color: "$purple900",
      },
      false: {
        color: "$neutral800",
        "&:hover": {
          bgc: "$neutral200",
        },
      },
    },
    depth: {
      0: {},
      1: {
        pl: "2.25rem",
      },
      2: {
        pl: "3.75rem",
      },
      3: {
        pl: "5.25rem",
      },
      4: {
        pl: "6.75rem",
      },
    },
  },
  defaultVariants: {
    isActive: false,
  },
});
