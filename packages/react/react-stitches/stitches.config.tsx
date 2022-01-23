import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";
import { stitchesConfig } from "@sui/stitches-config";
import { cx, omit } from "@sui/utils";

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
} = createStitches(stitchesConfig);
