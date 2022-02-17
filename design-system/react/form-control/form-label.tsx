import * as LabelPrimitive from "@radix-ui/react-label";
import * as React from "react";

import { __DEV__, cx } from "../../core/utils";
import { css, VariantProps } from "../react-stitches";
import { text } from "../text";
import { useFormControlContext } from "./form-control";

export type RequiredIndicatorProps = React.ComponentPropsWithoutRef<"span">;

/**
 * Used to show a "required" text or an asterisks (*) to indicate that
 * a field is required.
 */
export const RequiredIndicator = React.forwardRef<
    "span",
    RequiredIndicatorProps
>((props, ref) => {
    const field = useFormControlContext();

    if (!field?.required) return null;

    const className = cx("sui-form__required-indicator", props.className);

    return (
        <span
            {...field?.getRequiredIndicatorProps(props, ref)}
            className={className}
        />
    );
});

if (__DEV__) {
    RequiredIndicator.displayName = "RequiredIndicator";
}

export interface FormLabelProps
    extends Omit<React.ComponentPropsWithoutRef<"label">, "color">,
        VariantProps<typeof text> {
    /**
     * @type React.ReactElement
     */
    requiredIndicator?: React.ReactElement;
}

export const label = css(text, {
    display: "inline-block",
    verticalAlign: "middle",
    cursor: "default",
});

/**
 * Used to enhance the usability of form controls.
 *
 * It is used to inform users as to what information
 * is requested for a form field.
 *
 * ♿️ Accessibility: Every form field should have a form label.
 */
export const FormLabel = React.forwardRef<"label", FormLabelProps>(
    (props, ref) => {
        const {
            className,
            children,
            requiredIndicator = <RequiredIndicator />,
            variant,
            color,
            weight,
            uppercase,
            ...rest
        } = props;

        const field = useFormControlContext();
        const ownProps = field?.getLabelProps(rest, ref) ?? { ref, ...rest };

        return (
            <LabelPrimitive.Root
                {...ownProps}
                className={cx(
                    "sui-form__label",
                    text({ variant, color, weight, uppercase }),
                    className
                )}
            >
                {children}
                {field?.required ? requiredIndicator : null}
            </LabelPrimitive.Root>
        );
    }
);

if (__DEV__) {
    FormLabel.displayName = "FormLabel";
}
