import {
  AccessibleIcon as Icon,
  AccessibleIconProps as IconProps,
} from "../icon";
import { cx, __DEV__ } from "../../core/utils";
import { omitThemingProps, ThemingProps } from "../react-stitches";
import * as React from "react";
import { useFormControlContext } from "./form-control";
import { Primitive } from "@radix-ui/react-primitive";

export interface FormErrorMessageProps
  extends React.ComponentProps<"div">,
    ThemingProps {}

/**
 * Used to provide feedback about an invalid input,
 * and suggest clear instructions on how to fix it.
 */
export const FormErrorMessage = React.forwardRef<"div", FormErrorMessageProps>(
  (props, ref) => {
    const ownProps = omitThemingProps(props);
    const field = useFormControlContext();

    if (!field?.isInvalid) return null;

    return (
      <Primitive.div
        {...field?.getErrorMessageProps(ownProps, ref)}
        className={cx("form__error-message", props.className)}
      />
    );
  }
);

if (__DEV__) {
  FormErrorMessage.displayName = "FormErrorMessage";
}

/**
 * Used as the visual indicator that a field is invalid or
 * a field has incorrect values.
 */
export const FormErrorIcon = React.forwardRef((props, ref) => {
  const field = useFormControlContext();

  if (!field?.isInvalid) return null;

  // const _className = cx("form__error-icon", props.className);

  return (
    <Icon {...props}>
      <svg>
        <path
          fill="currentColor"
          d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
        />
      </svg>
    </Icon>
  );
}) as typeof Icon;

if (__DEV__) {
  FormErrorIcon.displayName = "FormErrorIcon";
}
