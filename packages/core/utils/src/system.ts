import { omit } from "./object";
import { ThemingProps } from "./types";

export function omitThemingProps<T extends ThemingProps>(props: T) {
  return omit(props, ["css"]);
}
