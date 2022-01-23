export type Merge<T, P> = P & Omit<T, keyof P>;

export type Booleanish = boolean | "true" | "false";

export type AnyFunction<T = any> = (...args: T[]) => any;

export type FunctionArguments<T extends Function> = T extends (
  ...args: infer R
) => any
  ? R
  : never;

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
