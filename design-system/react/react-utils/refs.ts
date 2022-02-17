import * as React from "react";

import { isFunction } from "../../core/utils";

export type ReactRef<T> =
    | React.Ref<T>
    | React.RefObject<T>
    | React.MutableRefObject<T>;

/**
 * Assigns a value to a ref function or object
 *
 * @param ref the ref to assign to
 * @param value the value
 */
export function assignRef<T = any>(ref: ReactRef<T> | undefined, value: T) {
    if (ref == null) return;

    if (isFunction(ref)) {
        ref(value);
        return;
    }

    try {
        // @ts-ignore
        ref.current = value;
    } catch (error) {
        throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
    }
}

/**
 * Combine multiple React refs into a single ref function.
 * This is used mostly when you need to allow consumers forward refs to
 * internal components
 *
 * @param refs refs to assign to value to
 */
export function mergeRefs<T>(...refs: (ReactRef<T> | undefined)[]) {
    return (node: T | null) => {
        refs.forEach((ref) => assignRef(ref, node));
    };
}

/**
 * React hook that merges react refs into a single memoized function
 *
 * @example
 * import React from "react";
 * import { useMergeRefs } from `@sui/hooks`;
 *
 * const Component = React.forwardRef((props, ref) => {
 *   const internalRef = React.useRef();
 *   return <div {...props} ref={useMergeRefs(internalRef, ref)} />;
 * });
 */
export function useMergeRefs<T>(...refs: (ReactRef<T> | undefined)[]) {
    return React.useMemo(() => {
        if (refs.every((ref) => ref == null)) {
            return null;
        }
        return (node: T) => {
            refs.forEach((ref) => {
                if (ref) assignRef(ref, node);
            });
        };
    }, refs);
}
