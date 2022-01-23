import type * as Radix from "@radix-ui/react-primitive";
import { Primitive } from "@radix-ui/react-primitive";
import { createContext } from "@sui/react-utils";
import { cx, ThemingProps, __DEV__ } from "@sui/utils";
import * as React from "react";
import { Button } from "./button";

export interface ButtonGroupProps
  extends Radix.ComponentPropsWithoutRef<typeof Primitive.div>,
    Pick<React.ComponentProps<typeof Button>, "variant" | "size">,
    ThemingProps {
  /**
   * If `true`, the borderRadius of button that are direct children will be altered
   * to look flushed together
   */
  isAttached?: boolean;
  /**
   * If `true`, all wrapped button will be disabled
   */
  isDisabled?: boolean;
}

interface ButtonGroupContext {
  isDisabled?: boolean;
}

const [ButtonGroupProvider, useButtonGroup] = createContext<ButtonGroupContext>(
  {
    strict: false,
    name: "ButtonGroupContext",
  }
);

export { useButtonGroup };

export const ButtonGroup = React.forwardRef<
  React.ElementRef<typeof Primitive.div>,
  ButtonGroupProps
>((props, ref) => {
  const { size, color, variant, className, isAttached, isDisabled, ...rest } =
    props;

  const _className = cx("button__group", className);

  const context = React.useMemo(
    () => ({ size, color, variant, isDisabled }),
    [size, color, variant, isDisabled]
  );

  // let groupStyles: CSS = {
  //   display: "inline-flex",
  // };

  // if (isAttached) {
  //   groupStyles = {
  //     ...groupStyles,
  //     "> *:first-of-type:not(:last-of-type)": { borderEndRadius: 0 },
  //     "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
  //     "> *:not(:first-of-type):last-of-type": { borderStartRadius: 0 },
  //   };
  // } else {
  //   groupStyles = {
  //     ...groupStyles,
  //     // "& > *:not(style) ~ *:not(style)": { marginStart: spacing },
  //   };
  // }

  return (
    <ButtonGroupProvider value={context}>
      <Primitive.div
        ref={ref}
        role="group"
        // __css={groupStyles}
        className={_className}
        {...rest}
      />
    </ButtonGroupProvider>
  );
});

if (__DEV__) {
  ButtonGroup.displayName = "ButtonGroup";
}
