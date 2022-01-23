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
import { ariaAttr, callAllHandlers } from "@sui/utils";
import { useFormControlContext } from "./form-control";
/**
 * React hook that provides the props that should be spread on to
 * input fields (`input`, `select`, `textarea`, etc.).
 *
 * It provides a convenient way to control a form fields, validation
 * and helper text.
 *
 * @internal
 */
export function useFormControl(props) {
    const _a = useFormControlProps(props), { isDisabled, isInvalid, isReadOnly, isRequired } = _a, rest = __rest(_a, ["isDisabled", "isInvalid", "isReadOnly", "isRequired"]);
    return Object.assign(Object.assign({}, rest), { disabled: isDisabled, readOnly: isReadOnly, required: isRequired, "aria-invalid": ariaAttr(isInvalid), "aria-required": ariaAttr(isRequired), "aria-readonly": ariaAttr(isReadOnly) });
}
/**
 * @internal
 */
export function useFormControlProps(props) {
    var _a, _b, _c;
    const field = useFormControlContext();
    const { id, disabled, readOnly, required, isRequired, isInvalid, isReadOnly, isDisabled, onFocus, onBlur } = props, rest = __rest(props, ["id", "disabled", "readOnly", "required", "isRequired", "isInvalid", "isReadOnly", "isDisabled", "onFocus", "onBlur"]);
    const labelIds = props["aria-describedby"]
        ? [props["aria-describedby"]]
        : [];
    // Error message must be described first in all scenarios.
    if ((field === null || field === void 0 ? void 0 : field.hasFeedbackText) && (field === null || field === void 0 ? void 0 : field.isInvalid)) {
        labelIds.push(field.feedbackId);
    }
    if (field === null || field === void 0 ? void 0 : field.hasHelpText) {
        labelIds.push(field.helpTextId);
    }
    return Object.assign(Object.assign({}, rest), { "aria-describedby": labelIds.join(" ") || undefined, id: id !== null && id !== void 0 ? id : field === null || field === void 0 ? void 0 : field.id, isDisabled: (_a = disabled !== null && disabled !== void 0 ? disabled : isDisabled) !== null && _a !== void 0 ? _a : field === null || field === void 0 ? void 0 : field.isDisabled, isReadOnly: (_b = readOnly !== null && readOnly !== void 0 ? readOnly : isReadOnly) !== null && _b !== void 0 ? _b : field === null || field === void 0 ? void 0 : field.isReadOnly, isRequired: (_c = required !== null && required !== void 0 ? required : isRequired) !== null && _c !== void 0 ? _c : field === null || field === void 0 ? void 0 : field.isRequired, isInvalid: isInvalid !== null && isInvalid !== void 0 ? isInvalid : field === null || field === void 0 ? void 0 : field.isInvalid, onFocus: callAllHandlers(field === null || field === void 0 ? void 0 : field.onFocus, onFocus), onBlur: callAllHandlers(field === null || field === void 0 ? void 0 : field.onBlur, onBlur) });
}
