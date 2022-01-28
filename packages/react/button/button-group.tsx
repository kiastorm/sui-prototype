import { __DEV__ } from "../../core/utils";
import { Flex } from "../layout";
import { createContext } from "../react-utils";
import React from "react";
import { Button } from "../button";

type ForwardedButtonProps = Pick<
  React.ComponentProps<typeof Button>,
  "size" | "variant" | "isDisabled" | "isLoading"
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
 * `ButtonGroups` allows you to group and pass the same props to multiple `Button`s.
 *
 * - By default, it renders a `Flex` with `role="group"` and `gap={2}` applied.
 *
 * - Props applied directly to child `Button`s will override any set by its parent `ButtonGroup`.
 */
export const ButtonGroup = React.forwardRef<
  React.ElementRef<typeof Flex>,
  ButtonGroupProps
>((props, ref) => {
  const { size, variant, className, isDisabled, gap = 2, ...rest } = props;

  const context = React.useMemo(
    () => ({ size, variant, isDisabled }),
    [size, variant, isDisabled]
  );

  return (
    <ButtonGroupProvider value={context}>
      <Flex ref={ref} role="group" gap={gap} {...rest} />
    </ButtonGroupProvider>
  );
});

ButtonGroup.toString = () => ".sui-button-group";

if (__DEV__) {
  ButtonGroup.displayName = "ButtonGroup";
}
