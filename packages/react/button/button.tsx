import { Spinner } from "../spinner";
import * as React from "react";
import { cx, dataAttr } from "../../core/utils";
import { AccessibleIcon } from "../icon";
import { ComponentProps } from "../react-stitches";
import { ButtonSpinner } from "./button-spinner";
import { StyledButton, StyledButtonAsLink } from "./button.styles";
import { Square } from "../layout";

type ButtonElement = React.ElementRef<typeof StyledButton>;
type ButtonAsLinkElement = React.ElementRef<typeof StyledButtonAsLink>;

interface ButtonProps
  extends Omit<ComponentProps<typeof StyledButton>, "active" | "disabled"> {
  /**
   * If added, the button will show an icon before the button's label.
   */
  leftIcon?: React.ReactElement;
  /**
   * If added, the button will show an icon after the button's label.
   */
  rightIcon?: React.ReactElement;
  /**
   * If `true`, the button will render in its loading state.
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
   * Replace the spinner component when `state === 'loading'`.
   */
  spinner?: React.ReactElement;
  /**
   * Determines the placement of the spinner when isLoading is true.
   * Will hide spinner if false
   * @default "start"
   */
  spinnerPlacement?: "start" | "end" | false;
}

/**
 * `Button`s are used to trigger actions and render a `button`.
 *
 * Noteable props: `isLoading`, `loadingText`, `isActive`, `isDisabled`, `leftIcon`, `rightIcon`
 */
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
      spinner = <ButtonSpinner placement="end" />,
      spinnerPlacement = "start",
      children,
      type,
      ...rest
    } = props;

    return (
      <StyledButton
        ref={ref}
        className={cx("sui-button", className)}
        disabled={isDisabled || isLoading}
        type={type ?? "button"}
        data-active={dataAttr(isActive)}
        data-loading={dataAttr(isLoading)}
        active={isActive}
        {...rest}
      >
        {isLoading && spinnerPlacement === "start" ? (
          <Square className="button__icon--start">
            <Spinner label={loadingText}>{spinner}</Spinner>
          </Square>
        ) : (
          leftIcon && (
            <Square className="button__icon--start">{leftIcon}</Square>
          )
        )}

        {isLoading && loadingText ? loadingText : children}

        {isLoading && spinnerPlacement === "end" ? (
          <Square className="button__icon--end">
            <Spinner label={loadingText}>{spinner}</Spinner>
          </Square>
        ) : (
          rightIcon && (
            <Square className="button__icon--end">{rightIcon}</Square>
          )
        )}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export const ButtonAsLink = React.forwardRef<
  ButtonAsLinkElement,
  ButtonAsLinkProps
>((props, ref) => {
  const { className, leftIcon, rightIcon, children, type, ...rest } = props;

  return (
    <StyledButtonAsLink
      ref={ref}
      className={cx("button-as-link", className)}
      {...rest}
    >
      {leftIcon && <AccessibleIcon label="">{leftIcon}</AccessibleIcon>}
      {children}
      {rightIcon && <AccessibleIcon label="">{rightIcon}</AccessibleIcon>}
    </StyledButtonAsLink>
  );
});

ButtonAsLink.displayName = "ButtonAsLink";

type HTMLButtonProps =
  | "isActive"
  | "isDisabled"
  | "isLoading"
  | "type"
  | "loadingText"
  | "spinner"
  | "spinnerPlacement";

interface ButtonAsLinkProps
  extends ComponentProps<typeof StyledButtonAsLink>,
    Omit<ButtonProps, HTMLButtonProps> {}
