import { __DEV__, cx } from "../../core/utils";
import { Flex } from "../layout";
import { createContext } from "../react-utils";
import React from "react";
import { Button } from "../button";

type ForwardedButtonProps = Pick<
  React.ComponentProps<typeof Button>,
  "isDisabled"
>;

export interface ButtonGroupProps
  extends React.ComponentProps<typeof Flex>,
    ForwardedButtonProps {}

interface ButtonGroupContext extends ForwardedButtonProps {}

const [ButtonGroupProvider, useButtonGroup] = createContext<ButtonGroupContext>(
  {
    strict: false,
    name: "ButtonGroupContext",
  }
);

export { useButtonGroup };

/**
 * `ButtonGroup`s allows you to group and disable multiple `Button`s.
 *
 * - By default, it renders a `Flex` with `role="group"` and `gap={2}` applied.
 *
 * - Props applied directly to child `Button`s will override any set by its parent `ButtonGroup`.
 */
export const ButtonGroup = React.forwardRef<
  React.ElementRef<typeof Flex>,
  ButtonGroupProps
>((props, ref) => {
  const { className, isDisabled, gap = 2, ...rest } = props;

  return (
    <ButtonGroupProvider value={{ isDisabled }}>
      <Flex
        className={cx("sui-button-group", className)}
        ref={ref}
        role="group"
        gap={gap}
        {...rest}
      />
    </ButtonGroupProvider>
  );
});

ButtonGroup.toString = () => ".sui-button-group";

if (__DEV__) {
  ButtonGroup.displayName = "ButtonGroup";
}
