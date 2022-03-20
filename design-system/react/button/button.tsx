import React from "react";

import { cx, dataAttr } from "../../core/utils";
import { CSS, VariantProps } from "../react-stitches";
import { Spinner } from "../spinner";
import { button, linkWithButtonStyles } from "./button.styles";
import { useButtonGroup } from "./button-group";

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
  loading?: boolean;
  /**
   * If `true`, the button will be styled in its active state.
   */
  active?: boolean;
  /**
   * If `true`, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * The label to show in the button when `loading` is true
   * If no text is passed, it only shows the spinner
   */
  loadingText?: string;
  /**
   * The html button type to use.
   */
  type?: "button" | "reset" | "submit";
  /**
   * Determines the placement of the spinner when loading is true.
   * Will hide spinner if false
   * @default "left"
   */
  spinnerPlacement?: "left" | "right" | false;
}

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "disabled">,
    ButtonOptions {
  css?: CSS;
}

const ButtonIcon = (
  props: React.ComponentProps<"div"> & {
    placement: ButtonProps["spinnerPlacement"];
  }
) => {
  const { placement = "left", ...rest } = props;

  return (
    <span
      {...rest}
      className={cx("sui-button__icon", `sui-button__${placement}-icon`)}
    />
  );
};

export const ButtonSpinner = (
  props: React.ComponentProps<typeof Spinner> & {
    placement?: ButtonProps["spinnerPlacement"];
    label?: ButtonProps["loadingText"];
  }
) => {
  const { placement, ...rest } = props;

  return (
    <Spinner
      {...rest}
      className={cx(
        "sui-button__spinner",
        placement ? `sui-button__${placement}-spinner` : undefined
      )}
    />
  );
};

/**
 * `Button`s are used to trigger actions and render a `button`.
 *
 * Noteable props: `loading`, `loadingText`, `active`, `disabled`, `leftIcon`, `rightIcon`
 */
export const Button = React.forwardRef<React.ElementRef<"button">, ButtonProps>(
  (props, ref) => {
    const group = useButtonGroup();
    const {
      active,
      loading,
      disabled = group?.disabled,
      loadingText,
      leftIcon,
      rightIcon,
      spinnerPlacement = "left",
      children,
      type,
      variant,
      fullWidth,
      className,
      size,
      css,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        className={cx(
          "sui-button",
          button({ active, variant, size, fullWidth, css }),
          className
        )}
        disabled={disabled || loading}
        type={type ?? "button"}
        data-active={dataAttr(active)}
        data-loading={dataAttr(loading)}
        {...rest}
      >
        {loading && spinnerPlacement === "left" ? (
          <ButtonSpinner placement="left" />
        ) : (
          leftIcon && <ButtonIcon placement="left">{leftIcon}</ButtonIcon>
        )}

        {loading && loadingText ? loadingText : children}

        {loading && spinnerPlacement === "right" ? (
          <ButtonSpinner placement="right" />
        ) : (
          rightIcon && <ButtonIcon placement="right">{rightIcon}</ButtonIcon>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

type OmittedLinkButtonVariants = "active";

type OmittedLinkButtonOptions =
  | "disabled"
  | "active"
  | "loading"
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
  const { leftIcon, rightIcon, children, variant, size, fullWidth, ...rest } =
    props;

  return (
    <a
      ref={ref}
      className={cx(
        "sui-link-with-button-styles",
        linkWithButtonStyles({ variant, size, fullWidth })
      )}
      {...rest}
    >
      {leftIcon && <ButtonIcon placement="left">{leftIcon}</ButtonIcon>}
      {children}
      {rightIcon && <ButtonIcon placement="right">{rightIcon}</ButtonIcon>}
    </a>
  );
});

LinkWithButtonStyles.displayName = "LinkWithButtonStyles";
