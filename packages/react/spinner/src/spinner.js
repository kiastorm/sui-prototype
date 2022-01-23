var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { keyframes } from "@sui/react-stitches-config";
import { cx, __DEV__ } from "@sui/utils";
import { VisuallyHidden } from "@sui/react-visually-hidden";
import * as React from "react";
import { Box } from "../../layout/src/box";
const spin = keyframes({
    "0%": {
        transform: "rotate(0deg)",
    },
    "100%": {
        transform: "rotate(360deg)",
    },
});
/**
 * Spinner is used to indicate the loading state of a page or a component,
 * It renders a `div` by default.
 *
 */
export const Spinner = React.forwardRef((props, ref) => {
    const { label = "Loading...", thickness = "2px", speed = "0.45s", emptyColor = "transparent", className } = props, rest = __rest(props, ["label", "thickness", "speed", "emptyColor", "className"]);
    const _className = cx("spinner", className);
    const spinnerStyles = {
        display: "inline-block",
        borderColor: "currentColor",
        borderStyle: "solid",
        borderRadius: "99999px",
        borderWidth: thickness,
        borderBottomColor: emptyColor,
        borderLeftColor: emptyColor,
        width: "1em",
        height: "1em",
        animation: `${spin} ${speed} linear infinite`,
    };
    return (_jsx(Box, Object.assign({ ref: ref, css: spinnerStyles, className: _className }, rest, { children: label && _jsx(VisuallyHidden, { children: label }, void 0) }), void 0));
});
if (__DEV__) {
    Spinner.displayName = "Spinner";
}
