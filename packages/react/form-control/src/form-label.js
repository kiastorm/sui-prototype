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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx, omitThemingProps, __DEV__ } from "@sui/utils";
import * as React from "react";
import { useFormControlContext } from "./form-control";
/**
 * Used to enhance the usability of form controls.
 *
 * It is used to inform users as to what information
 * is requested for a form field.
 *
 * ♿️ Accessibility: Every form field should have a form label.
 */
export const FormLabel = React.forwardRef((passedProps, ref) => {
    var _a;
    const props = omitThemingProps(passedProps);
    const { className, children, requiredIndicator = _jsx(RequiredIndicator, {}, void 0) } = props, rest = __rest(props, ["className", "children", "requiredIndicator"]);
    const field = useFormControlContext();
    const ownProps = (_a = field === null || field === void 0 ? void 0 : field.getLabelProps(rest, ref)) !== null && _a !== void 0 ? _a : Object.assign({ ref }, rest);
    return (_jsxs("label", Object.assign({}, ownProps, { className: cx("form__label", props.className) }, { children: [children, (field === null || field === void 0 ? void 0 : field.isRequired) ? requiredIndicator : null] }), void 0));
});
if (__DEV__) {
    FormLabel.displayName = "FormLabel";
}
/**
 * Used to show a "required" text or an asterisks (*) to indicate that
 * a field is required.
 */
export const RequiredIndicator = React.forwardRef((props, ref) => {
    const field = useFormControlContext();
    if (!(field === null || field === void 0 ? void 0 : field.isRequired))
        return null;
    const className = cx("form__required-indicator", props.className);
    return (_jsx("span", Object.assign({}, field === null || field === void 0 ? void 0 : field.getRequiredIndicatorProps(props, ref), { className: className }), void 0));
});
if (__DEV__) {
    RequiredIndicator.displayName = "RequiredIndicator";
}
