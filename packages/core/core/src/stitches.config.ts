import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
export type { VariantProps } from "@stitches/react";

export type CSS = Stitches.CSS<typeof config>;

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
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "30px",
      7: "35px",
      8: "40px",
      9: "45px",
      10: "50px",
      11: "55px",
      12: "60px",
      13: "65px",
      14: "70px",
      15: "75px",
      16: "80px",
      17: "85px",
      18: "90px",
      19: "95px",
      20: "100px",
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
      7: "45px",
      8: "65px",
      9: "80px",
    },
    fontSizes: {
      1: "18px",
      2: "16px",
      3: "20px",
    },
    radii: {
      1: "4px",
      2: "4.45361px",
      3: "4.95px",
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
