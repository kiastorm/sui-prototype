import { isFunction } from "./assertion";
import { AnyFunction, FunctionArguments } from "./types";

export function runIfFn<T, U>(
    valueOrFn: T | ((...fnArgs: U[]) => T),
    ...args: U[]
): T {
    return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

export function callAllHandlers<T extends (event: any) => void>(
    ...fns: (T | undefined)[]
) {
    return function func(event: FunctionArguments<T>[0]) {
        fns.some((fn) => {
            fn?.(event);
            return event?.defaultPrevented;
        });
    };
}

export function callAll<T extends AnyFunction>(...fns: (T | undefined)[]) {
    return function mergedFn(arg: FunctionArguments<T>[0]) {
        fns.forEach((fn) => {
            fn?.(arg);
        });
    };
}
