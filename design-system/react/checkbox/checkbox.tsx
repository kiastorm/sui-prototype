import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cx } from "../../core/utils";
import { useControllableProp } from "../react-utils";
import React from "react";
import { FaCheck, FaMinus } from "react-icons/fa";

import { CSS, VariantProps } from "../react-stitches";
import { checkbox, checkboxIndicator } from "./checkbox.styles";
import { useCheckboxGroupContext } from "./checkbox-group";

type CheckboxPrimitiveProps = React.ComponentProps<
  typeof CheckboxPrimitive.Root
>;
type CheckboxVariants = VariantProps<typeof CheckboxPrimitive.Root>;
type CheckboxProps = CheckboxPrimitiveProps & CheckboxVariants & { css: CSS };

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>((props, forwardedRef) => {
  const group = useCheckboxGroupContext();
  const {
    className,
    defaultChecked: defaultCheckedProp,
    checked: checkedProp,
    disabled = group?.disabled,
    onCheckedChange: onCheckedChangeProp,
    css,
    ...rest
  } = props;

  const [checkedState, setCheckedState] = React.useState(defaultCheckedProp);

  const [isControlled, maybeControlledchecked] = useControllableProp<
    CheckboxProps["checked"]
  >(checkedProp, checkedState);

  let checked = maybeControlledchecked;

  if (group?.value && props.value) {
    checked = group.value.includes(props.value);
  }
  let onCheckedChange = isControlled ? onCheckedChangeProp : setCheckedState;

  if (group?.onCheckedChange && props.value) {
    onCheckedChange = () => {
      group.onCheckedChange(props.value);
      // onCheckedChangeProp();
    };
  }

  return (
    <CheckboxPrimitive.Root
      {...rest}
      checked={checked}
      disabled={disabled}
      onCheckedChange={onCheckedChange}
      className={cx("sui-checkbox", checkbox({ css }), className)}
      ref={forwardedRef}
    >
      <CheckboxPrimitive.Indicator
        className={cx("sui-checkbox__indicator", checkboxIndicator())}
      >
        {checked === "indeterminate" && <FaMinus />}
        {checked === true && <FaCheck />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
