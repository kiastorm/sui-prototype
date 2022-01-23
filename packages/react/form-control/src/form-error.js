import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "@sui/react-accessible-icon";
import { cx, omitThemingProps, __DEV__ } from "@sui/utils";
import * as React from "react";
import { useFormControlContext } from "./form-control";
/**
 * Used to provide feedback about an invalid input,
 * and suggest clear instructions on how to fix it.
 */
export const FormErrorMessage = React.forwardRef((props, ref) => {
    const ownProps = omitThemingProps(props);
    const field = useFormControlContext();
    if (!(field === null || field === void 0 ? void 0 : field.isInvalid))
        return null;
    return (_jsx(Primitive.div, Object.assign({}, field === null || field === void 0 ? void 0 : field.getErrorMessageProps(ownProps, ref), { className: cx("form__error-message", props.className), __css: Object.assign({ display: "flex", alignItems: "center" }, styles.text) }), void 0));
});
if (__DEV__) {
    FormErrorMessage.displayName = "FormErrorMessage";
}
/**
 * Used as the visual indicator that a field is invalid or
 * a field has incorrect values.
 */
export const FormErrorIcon = React.forwardRef((props, ref) => {
    const field = useFormControlContext();
    if (!(field === null || field === void 0 ? void 0 : field.isInvalid))
        return null;
    const _className = cx("form__error-icon", props.className);
    return (_jsx(Icon, Object.assign({ ref: ref }, props, { className: _className }, { children: _jsx("path", { fill: "currentColor", d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z" }, void 0) }), void 0));
});
if (__DEV__) {
    FormErrorIcon.displayName = "FormErrorIcon";
}
