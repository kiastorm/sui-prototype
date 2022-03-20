import { Dict } from "./types";

export function omit<T extends Dict, K extends keyof T>(object: T, keys: K[]) {
    const result: Dict = {};

    Object.keys(object).forEach((key) => {
        if (keys.includes(key as K)) return;
        result[key] = object[key];
    });

    return result as Omit<T, K>;
}

export function pick<T extends Dict, K extends keyof T>(object: T, keys: K[]) {
    const result = {} as { [P in K]: T[P] };

    keys.forEach((key) => {
        if (key in object) {
            result[key] = object[key];
        }
    });

    return result;
}

type FilterFn<T> = (value: any, key: string, object: T) => boolean;

/**
 * Returns the items of an object that meet the condition specified in a callback function.
 *
 * @param object the object to loop through
 * @param fn The filter function
 */
export function objectFilter<T extends Dict>(object: T, fn: FilterFn<T>) {
    const result: Dict = {};

    Object.keys(object).forEach((key) => {
        const value = object[key];
        const shouldPass = fn(value, key, object);
        if (shouldPass) {
            result[key] = value;
        }
    });

    return result;
}

export const filterUndefined = (object: Dict) =>
    objectFilter(object, (val) => val !== null && val !== undefined);
