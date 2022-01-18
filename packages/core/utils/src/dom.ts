import { Booleanish } from "./types";

export function canUseDOM(): boolean {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
}

export const isBrowser = canUseDOM();

export const dataAttr = (condition: boolean | undefined) =>
  (condition ? "" : undefined) as Booleanish;

export const ariaAttr = (condition: boolean | undefined) =>
  condition ? true : undefined;

export const cx = (...classNames: any[]) =>
  classNames.filter(Boolean).join(" ");
