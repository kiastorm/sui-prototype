import { Primitive } from "@radix-ui/react-primitive";
import { cx, __DEV__ } from "../../core/utils";
import * as React from "react";
import { useFormControlContext } from "./form-control";
import { omitThemingProps, ThemingProps } from "../react-stitches";

export interface FormLabelProps
  extends React.ComponentPropsWithoutRef<"label">,
    ThemingProps {
  /**
   * @type React.ReactElement
   */
  requiredIndicator?: React.ReactElement;
}

/**
 * Used to enhance the usability of form controls.
 *
 * It is used to inform users as to what information
 * is requested for a form field.
 *
 * ♿️ Accessibility: Every form field should have a form label.
 */
export const FormLabel = React.forwardRef<"label", FormLabelProps>(
  (passedProps, ref) => {
    const props = omitThemingProps(passedProps);

    const {
      className,
      children,
      requiredIndicator = <RequiredIndicator />,
      ...rest
    } = props;

    const field = useFormControlContext();
    const ownProps = field?.getLabelProps(rest, ref) ?? { ref, ...rest };

    return (
      <label {...ownProps} className={cx("form__label", props.className)}>
        {children}
        {field?.isRequired ? requiredIndicator : null}
      </label>
    );
  }
);

if (__DEV__) {
  FormLabel.displayName = "FormLabel";
}

export interface RequiredIndicatorProps
  extends React.ComponentPropsWithoutRef<"span"> {}

/**
 * Used to show a "required" text or an asterisks (*) to indicate that
 * a field is required.
 */
export const RequiredIndicator = React.forwardRef<
  "span",
  RequiredIndicatorProps
>((props, ref) => {
  const field = useFormControlContext();

  if (!field?.isRequired) return null;

  const className = cx("form__required-indicator", props.className);

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
