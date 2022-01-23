import type * as Radix from "@radix-ui/react-primitive";
import { Primitive } from "@radix-ui/react-primitive";
import { AccessibleIcon } from "@sui/react-icon";
import { styled } from "@sui/react-stitches";
import * as React from "react";
import { cx, dataAttr } from "@sui/utils";
import { ButtonSpinner } from "./button-spinner";
import { StyledButton } from "./button.styles";

const BUTTON_NAME = "Button";

type ButtonElement = React.ElementRef<typeof Primitive.button>;

interface ButtonProps
  extends Radix.ComponentPropsWithoutRef<typeof StyledButton> {
  /**
   * If `true`, the button will show a spinner.
   */
  isLoading?: boolean;
  /**
   * If `true`, the button will be styled in its active state.
   */
  isActive?: boolean;
  /**
   * If `true`, the button will be disabled.
   */
  isDisabled?: boolean;
  /**
   * The label to show in the button when `isLoading` is true
   * If no text is passed, it only shows the spinner
   */
  loadingText?: string;
  /**
   * The html button type to use.
   */
  type?: "button" | "reset" | "submit";
  /**
   * If added, the button will show an icon before the button's label.
   */
  leftIcon?: React.ReactElement;
  /**
   * If added, the button will show an icon after the button's label.
   */
  rightIcon?: React.ReactElement;
  /**
   * Replace the spinner component when `state === 'loading'`.
   */
  spinner?: React.ReactElement;
  /**
   * Determines the placement of the spinner when isLoading is true
   * @default "start"
   */
  spinnerPlacement?: "start" | "end";
}

type ButtonContentProps = Pick<
  ButtonProps,
  "leftIcon" | "rightIcon" | "children"
>;

function ButtonContent(props: ButtonContentProps) {
  const { leftIcon, rightIcon, children } = props;

  return (
    <>
      {leftIcon && <AccessibleIcon label="">{leftIcon}</AccessibleIcon>}
      {children}
      {rightIcon && <AccessibleIcon label="">{rightIcon}</AccessibleIcon>}
    </>
  );
}

export const Button = React.forwardRef<ButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      isLoading,
      isActive,
      isDisabled,
      className,
      loadingText,
      leftIcon,
      rightIcon,
      spinner,
      spinnerPlacement = "start",
      children,
      type,
      ...rest
    } = props;

    const contentProps = { rightIcon, leftIcon, children };

    return (
      <StyledButton
        ref={ref}
        className={cx("button", className)}
        disabled={isDisabled || isLoading}
        type={type ?? "button"}
        data-active={dataAttr(isActive)}
        data-loading={dataAttr(isLoading)}
        {...rest}
      >
        {isLoading && spinnerPlacement === "start" && (
          <ButtonSpinner
            className="button__spinner--start"
            label={loadingText}
            placement="start"
          >
            {spinner}
          </ButtonSpinner>
        )}

        {isLoading ? (
          loadingText || (
            <span style={{ opacity: 0 }}>
              <ButtonContent {...contentProps} />
            </span>
          )
        ) : (
          <ButtonContent {...contentProps} />
        )}

        {isLoading && spinnerPlacement === "end" && (
          <ButtonSpinner
            className="button__spinner--end"
            label={loadingText}
            placement="end"
          >
            {spinner}
          </ButtonSpinner>
        )}
      </StyledButton>
    );
  }
);

Button.displayName = BUTTON_NAME;
