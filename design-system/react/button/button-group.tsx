import React from "react";

import { __DEV__, cx } from "../../core/utils";
import { Button } from "../button";
import { flex } from "../layout";
import { css, styled } from "../react-stitches";
import { createContext } from "../react-utils";

type ForwardedButtonProps = Pick<
    React.ComponentProps<typeof Button>,
    "disabled"
>;

export const buttonGroup = css(flex, {
    defaultVariants: {
        gap: 2,
    },
});

export const StyledButtonGroup = styled("div", buttonGroup);

export interface ButtonGroupProps
    extends React.ComponentProps<typeof StyledButtonGroup>,
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
    React.ElementRef<typeof StyledButtonGroup>,
    ButtonGroupProps
>((props, ref) => {
    const { className, disabled, ...rest } = props;

    return (
        <ButtonGroupProvider value={{ disabled }}>
            <StyledButtonGroup
                className={cx("sui-button-group", className)}
                ref={ref}
                role="group"
                {...rest}
            />
        </ButtonGroupProvider>
    );
});

ButtonGroup.toString = () => ".sui-button-group";

if (__DEV__) {
    ButtonGroup.displayName = "ButtonGroup";
}
