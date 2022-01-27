import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";
import { omit } from "../../core/utils";

export type { ComponentProps, VariantProps } from "@stitches/react";
export type CSS = Stitches.CSS<typeof config>;

export interface ThemingProps {
  css: CSS;
}

export function omitThemingProps<T extends ThemingProps>(props: T) {
  return omit(props, ["css"]);
}

export const {
  styled,
  css,
  theme,
  keyframes,
  createTheme,
  getCssText,
  globalCss,
  config,
} = createStitches({
  theme: {
    colors: {
      neutral999: "#000000",
      neutral900: "#1b1a21",
      neutral800: "#4c4a57",
      neutral700: "#777582",
      neutral500: "#c2c1c7",
      neutral300: "#e6e5ea",
      neutral200: "#f3f3f5",
      neutral100: "#fafafa",
      neutral0: "#ffffff",

      red900: "#c41337",
      red800: "#f4346f",
      red600: "#f85b8a",
      red400: "#ffc2d4",
      red200: "#ffebf2",

      yellow900: "#9e6d00",
      yellow800: "#ffb000",
      yellow600: "#ffcf64",
      yellow400: "#ffe694",
      yellow200: "#fffade",

      green900: "#00873f",
      green800: "#00ca68",
      green600: "#00e676",
      green400: "#a8ffce",
      green200: "#e6fcee",

      cyan900: "#00408f",
      cyan800: "#0081d7",
      cyan600: "#00f5fe",
      cyan400: "#a6fcff",
      cyan200: "#d9feff",

      indigo900: "#1e0a78",
      indigo800: "#311b92",
      indigo600: "#4f34c7",
      indigo400: "#c0b7eb",
      indigo200: "#e8e6f5",
      indigo100: "#f3f2fc",

      purple900: "#8800cc",
      purple800: "#aa00ff",
      purple600: "#c550ff",
      purple400: "#ecc7ff",
      purple200: "#f9edff",

      magenta900: "#b300b3",
      magenta800: "#ff00ff",
      magenta600: "#ff7bff",
      magenta400: "#ffbfff",
      magenta200: "#ffebff",

      whiteA1: "rgba(255, 255, 255, 0.1)",
      whiteA2: "rgba(255, 255, 255, 0.2)",
    },
    fonts: {
      sans: "Lato, Untitled Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    space: {
      0: 0,
      1: "0.25rem", // 4px
      2: "0.50rem", // 8px
      3: "0.75rem", // 12px
      4: "1rem", // 16px
      5: "1.25rem", // 20px
      6: "1.5rem", // 24px
      7: "1.75rem", // 28px
      8: "2rem", // 32px
      9: "2.25rem", // 36px
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      13: "3.25rem",
      14: "3.5rem",
      15: "3.75rem",
      16: "4rem",
      17: "5.25rem",
      18: "5.5rem",
      19: "5.75rem",
      20: "6rem",
    },
    sizes: {
      0: 0,
      1: "0.25rem", // 4px
      2: "0.50rem", // 8px
      3: "0.75rem", // 12px
      4: "1rem", // 16px
      5: "1.25rem", // 20px
      6: "1.5rem", // 24px
      7: "1.75rem", // 28px
      8: "2rem", // 32px
      9: "2.25rem", // 36px
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      13: "3.25rem",
      14: "3.5rem",
      15: "3.75rem",
      16: "4rem",
      17: "5.25rem",
      18: "5.5rem",
      19: "5.75rem",
      20: "6rem",
    },
    fontSizes: {
      1: "11px",
      2: "12px",
      3: "13px",
      4: "14px",
      5: "15px",
      6: "16px",
      7: "20px",
      8: "22px",
      9: "24px",
      10: "34px",
      11: "48px",
      12: "59px",
    },
    radii: {
      1: "2px",
      2: "4px",
      3: "8px",
      round: "50%",
      pill: "9999px",
    },
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      max: "999",
    },
  },
  media: {
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
    bp3: "(min-width: 1200px)",
    bp4: "(min-width: 1800px)",
    motion: "(prefers-reduced-motion)",
    hover: "(any-hover: hover)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  },
  utils: {
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value,
    }),

    bgc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),
  },
});
