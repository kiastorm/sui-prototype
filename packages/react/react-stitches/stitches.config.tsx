import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";
import { omit } from "../../core/utils";

export type { VariantProps } from "@stitches/react";
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
      untitled:
        "Public Sans, Untitled Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      13: "52px",
      14: "56px",
      15: "60px",
      16: "64px",
      17: "68px",
      18: "72px",
      19: "76px",
      20: "80px",
    },
    sizes: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      13: "52px",
      14: "56px",
      15: "60px",
      16: "64px",
      17: "68px",
      18: "72px",
      19: "76px",
      20: "80px",
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
