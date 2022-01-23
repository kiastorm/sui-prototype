export declare type Merge<T, P> = P & Omit<T, keyof P>;
export declare type Booleanish = boolean | "true" | "false";
export declare type AnyFunction<T = any> = (...args: T[]) => any;
export declare type FunctionArguments<T extends Function> = T extends (...args: infer R) => any ? R : never;
export declare type Dict<T = any> = Record<string, T>;
export declare type EventKeys = "ArrowDown" | "ArrowUp" | "ArrowLeft" | "ArrowRight" | "Enter" | "Space" | "Tab" | "Backspace" | "Control" | "Meta" | "Home" | "End" | "PageDown" | "PageUp" | "Delete" | "Escape" | " " | "Shift";
//# sourceMappingURL=types.d.ts.map