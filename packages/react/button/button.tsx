import { button } from "./button.styles";
import * as React from "react";
import { cx, dataAttr } from "../../core/utils";
import { AccessibleIcon } from "../icon";
import { Square } from "../layout";
import { VariantProps, css, styled } from "../react-stitches";
import { Spinner } from "../spinner";
import { useButtonGroup } from "./button-group";
import { ButtonSpinner } from "./button-spinner";

export interface ButtonOptions extends VariantProps<typeof button> {
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

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "disabled" | "className">,
    ButtonOptions {}

/**
 * `Button`s are used to trigger actions and render a `button`.
 *
 * Noteable props: `isLoading`, `loadingText`, `isActive`, `isDisabled`, `leftIcon`, `rightIcon`
 */
export const Button = React.forwardRef<React.ElementRef<"button">, ButtonProps>(
  (props, ref) => {
    const group = useButtonGroup();
    const {
      isActive,
      isLoading,
      isDisabled = group?.isDisabled,
      loadingText,
      leftIcon,
      rightIcon,
      spinner = <ButtonSpinner placement="end" />,
      spinnerPlacement = "start",
      children,
      type,
      variant,
      size,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        className={cx(
          "sui-button",
          button({ active: isActive, variant, size })
          // className
        )}
        disabled={isDisabled || isLoading}
        type={type ?? "button"}
        data-active={dataAttr(isActive)}
        data-loading={dataAttr(isLoading)}
        {...rest}
      >
        {isLoading && spinnerPlacement === "start" ? (
          <Square className="sui-button__icon--start">
            <Spinner label={loadingText}>{spinner}</Spinner>
          </Square>
        ) : (
          leftIcon && (
            <Square className="sui-button__icon--start">{leftIcon}</Square>
          )
        )}

        {isLoading && loadingText ? loadingText : children}

        {isLoading && spinnerPlacement === "end" ? (
          <Square className="sui-button__icon--end">
            <Spinner label={loadingText}>{spinner}</Spinner>
          </Square>
        ) : (
          rightIcon && (
            <Square className="sui-button__icon--end">
              <AccessibleIcon label="">{rightIcon}</AccessibleIcon>
            </Square>
          )
        )}
      </button>
    );
  }
);

Button.toString = () => ".sui-button";
Button.displayName = "Button";

type OmittedLinkButtonVariants = "isActive";

type OmittedLinkButtonOptions =
  | "isDisabled"
  | "isLoading"
  | "type"
  | "loadingText"
  | "spinner"
  | "spinnerPlacement";

interface LinkWithButtonStylesProps
  extends React.ComponentProps<"a">,
    Omit<VariantProps<typeof button>, OmittedLinkButtonVariants>,
    Omit<ButtonOptions, OmittedLinkButtonOptions> {}

export const LinkWithButtonStyles = React.forwardRef<
  React.ElementRef<"a">,
  LinkWithButtonStylesProps
>((props, ref) => {
  const { leftIcon, rightIcon, children, variant, size, isActive, ...rest } =
    props;

  return (
    <a
      ref={ref}
      className={cx(
        "sui-link-with-button-styles",
        button({ variant, size, isActive })
      )}
      {...rest}
    >
      {leftIcon && <AccessibleIcon label="">{leftIcon}</AccessibleIcon>}
      {children}
      {rightIcon && <AccessibleIcon label="">{rightIcon}</AccessibleIcon>}
    </a>
  );
});

LinkWithButtonStyles.displayName = "LinkWithButtonStyles";
LinkWithButtonStyles.toString = () => ".sui-button-as-link";
