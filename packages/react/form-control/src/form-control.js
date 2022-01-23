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
import { Primitive } from "@radix-ui/react-primitive";
import { createContext, mergeRefs, useBoolean, useId, } from "@sui/react-utils";
import { cx, dataAttr, omitThemingProps, __DEV__, } from "@sui/utils";
import * as React from "react";
const [FormControlProvider, useFormControlContext] = createContext({
    strict: false,
    name: "FormControlContext",
});
export { useFormControlContext };
function useFormControlProvider(props) {
    const { id: idProp, isRequired, isInvalid, isDisabled, isReadOnly } = props, htmlProps = __rest(props, ["id", "isRequired", "isInvalid", "isDisabled", "isReadOnly"]);
    // Generate all the required ids
    const uuid = useId();
    const id = idProp || `field-${uuid}`;
    const labelId = `${id}-label`;
    const feedbackId = `${id}-feedback`;
    const helpTextId = `${id}-helptext`;
    /**
     * Track whether the `FormErrorMessage` has been rendered.
     * We use this to append its id the the `aria-describedby` of the `input`.
     */
    const [hasFeedbackText, setHasFeedbackText] = React.useState(false);
    /**
     * Track whether the `FormHelperText` has been rendered.
     * We use this to append its id the the `aria-describedby` of the `input`.
     */
    const [hasHelpText, setHasHelpText] = React.useState(false);
    // Track whether the form element (e.g, `input`) has focus.
    const [isFocused, setFocus] = useBoolean();
    const getHelpTextProps = React.useCallback((props = {}, forwardedRef = null) => (Object.assign(Object.assign({ id: helpTextId }, props), { 
        /**
         * Notify the field context when the help text is rendered on screen,
         * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
         */
        ref: mergeRefs(forwardedRef, (node) => {
            if (!node)
                return;
            setHasHelpText(true);
        }) })), [helpTextId]);
    const getLabelProps = React.useCallback((props = {}, forwardedRef = null) => {
        var _a, _b;
        return (Object.assign(Object.assign({}, props), { ref: forwardedRef, "data-focus": dataAttr(isFocused), "data-disabled": dataAttr(isDisabled), "data-invalid": dataAttr(isInvalid), "data-readonly": dataAttr(isReadOnly), id: (_a = props.id) !== null && _a !== void 0 ? _a : labelId, htmlFor: (_b = props.htmlFor) !== null && _b !== void 0 ? _b : id }));
    }, [id, isDisabled, isFocused, isInvalid, isReadOnly, labelId]);
    const getErrorMessageProps = React.useCallback((props = {}, forwardedRef = null) => (Object.assign(Object.assign({ id: feedbackId }, props), { 
        /**
         * Notify the field context when the error message is rendered on screen,
         * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
         */
        ref: mergeRefs(forwardedRef, (node) => {
            if (!node)
                return;
            setHasFeedbackText(true);
        }), "aria-live": "polite" })), [feedbackId]);
    const getRootProps = React.useCallback((props = {}, forwardedRef = null) => (Object.assign(Object.assign(Object.assign({}, props), htmlProps), { ref: forwardedRef, role: "group" })), [htmlProps]);
    const getRequiredIndicatorProps = React.useCallback((props = {}, forwardedRef = null) => (Object.assign(Object.assign({}, props), { ref: forwardedRef, role: "presentation", "aria-hidden": true, children: props.children || "*" })), []);
    return {
        isRequired: !!isRequired,
        isInvalid: !!isInvalid,
        isReadOnly: !!isReadOnly,
        isDisabled: !!isDisabled,
        isFocused: !!isFocused,
        onFocus: setFocus.on,
        onBlur: setFocus.off,
        hasFeedbackText,
        setHasFeedbackText,
        hasHelpText,
        setHasHelpText,
        id,
        labelId,
        feedbackId,
        helpTextId,
        htmlProps,
        getHelpTextProps,
        getErrorMessageProps,
        getRootProps,
        getLabelProps,
        getRequiredIndicatorProps,
    };
}
/**
 * FormControl provides context such as
 * `isInvalid`, `isDisabled`, and `isRequired` to form elements.
 *
 * This is commonly used in form elements such as `input`,
 * `select`, `textarea`, etc.
 */
export const FormControl = React.forwardRef((props, ref) => {
    const ownProps = omitThemingProps(props);
    const _a = useFormControlProvider(ownProps), { getRootProps, htmlProps: _ } = _a, context = __rest(_a, ["getRootProps", "htmlProps"]);
    const className = cx("form-control", props.className);
    const contextValue = React.useMemo(() => context, [context]);
    return (_jsx(FormControlProvider, Object.assign({ value: contextValue }, { children: _jsx(Primitive.div, Object.assign({}, getRootProps({}, ref), { className: className }), void 0) }), void 0));
});
if (__DEV__) {
    FormControl.displayName = "FormControl";
}
/**
 * FormHelperText
 *
 * Assistive component that conveys additional guidance
 * about the field, such as how it will be used and what
 * types in values should be provided.
 */
export const FormHelperText = React.forwardRef((props, ref) => {
    const field = useFormControlContext();
    const className = cx("form__helper-text", props.className);
    return (_jsx(Primitive.div, Object.assign({}, field === null || field === void 0 ? void 0 : field.getHelpTextProps(props, ref), { className: className }), void 0));
});
if (__DEV__) {
    FormHelperText.displayName = "FormHelperText";
}
