import { createStitches } from "@stitches/core";
import type * as Stitches from "@stitches/core";
export type { VariantProps } from "@stitches/core";
import { theme } from "@sui/theme";

export type CSS = Stitches.CSS<typeof stitches.config>;

const stitchesMediaQueries = {
  bp1: "(min-width: 520px)",
  bp2: "(min-width: 900px)",
  bp3: "(min-width: 1200px)",
  bp4: "(min-width: 1800px)",
  motion: "(prefers-reduced-motion)",
  hover: "(any-hover: hover)",
  dark: "(prefers-color-scheme: dark)",
  light: "(prefers-color-scheme: light)",
} as const;

const stitchesUtils = {
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
} as const;

export const stitchesConfig = {
  theme: { ...theme },
  media: { ...stitchesMediaQueries },
  utils: { ...stitchesUtils },
} as const;

export const stitches = createStitches(stitchesConfig);
