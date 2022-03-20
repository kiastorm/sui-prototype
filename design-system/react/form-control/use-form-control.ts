import { FocusEventHandler } from "react";

import { ariaAttr, callAllHandlers } from "../../core/utils";
import { FormControlOptions, useFormControlContext } from "./form-control";

export interface UseFormControlProps<T extends HTMLElement>
    extends FormControlOptions {
    id?: string;
    onFocus?: FocusEventHandler<T>;
    onBlur?: FocusEventHandler<T>;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
}

/**
 * React hook that provides the props that should be spread on to
 * input fields (`input`, `select`, `textarea`, etc.).
 *
 * It provides a convenient way to control a form fields, validation
 * and helper text.
 *
 * @internal
 */
export function useFormControl<T extends HTMLElement>(
    props: UseFormControlProps<T>
) {
    const {
        disabled,
        invalid,
        readOnly,
        required,
        ...rest
    } = useFormControlProps(props);

    return {
        ...rest,
        disabled,
        readOnly,
        required,
        "aria-invalid": ariaAttr(invalid),
        "aria-required": ariaAttr(required),
        "aria-readonly": ariaAttr(readOnly),
    };
}

/**
 * @internal
 */
export function useFormControlProps<T extends HTMLElement>(
    props: UseFormControlProps<T>
) {
    const field = useFormControlContext();

    const {
        id,
        required,
        invalid,
        readOnly,
        disabled,
        onFocus,
        onBlur,
        ...rest
    } = props;

    const labelIds: string[] = props["aria-describedby"]
        ? [props["aria-describedby"]]
        : [];

    // Error message must be described first in all scenarios.
    if (field?.hasFeedbackText && field?.invalid) {
        labelIds.push(field.feedbackId);
    }

    if (field?.hasHelpText) {
        labelIds.push(field.helpTextId);
    }

    return {
        ...rest,
        "aria-describedby": labelIds.join(" ") || undefined,
        id: id ?? field?.id,
        disabled: disabled ?? field?.disabled,
        readOnly: readOnly ?? field?.readOnly,
        required: required ?? field?.required,
        invalid: invalid ?? field?.invalid,
        onFocus: callAllHandlers(field?.onFocus, onFocus),
        onBlur: callAllHandlers(field?.onBlur, onBlur),
    };
}
