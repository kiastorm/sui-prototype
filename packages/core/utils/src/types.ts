import { CSS } from "@singlestore-ui/core";
export type Merge<T, P> = P & Omit<T, keyof P>;

export type Booleanish = boolean | "true" | "false";
export interface ThemingProps {
  css: CSS;
}
export type Dict<T = any> = Record<string, T>;

export type EventKeys =
  | "ArrowDown"
  | "ArrowUp"
  | "ArrowLeft"
  | "ArrowRight"
  | "Enter"
  | "Space"
  | "Tab"
  | "Backspace"
  | "Control"
  | "Meta"
  | "Home"
  | "End"
  | "PageDown"
  | "PageUp"
  | "Delete"
  | "Escape"
  | " "
  | "Shift";
