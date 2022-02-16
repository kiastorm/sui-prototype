import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { ButtonSpinner } from "packages/react/button/button-spinner";
import * as React from "react";
import { cx, dataAttr, __DEV__ } from "../../core/utils";
import { Square } from "../layout";
import { css, VariantProps } from "../react-stitches";
import { Spinner } from "../spinner";
import { useButtonGroup } from "./button-group";
import { iconButton } from "./button.styles";

export interface IconButtonOptions extends VariantProps<typeof iconButton> {
  /**
   * The html button type to use.
   */
  type?: "button" | "reset" | "submit";
  /**
   * Replace the spinner component when `state === 'loading'`.
   */
  spinner?: React.ReactElement;
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
   * The icon to be used in the button.
   * @type React.ReactElement
   */
  icon?: React.ReactElement;
}

interface IconButtonProps
  extends React.ComponentProps<"button">,
    IconButtonOptions {
  /**
   * A11y: A label that describes the button
   */
  "aria-label": string;
}

export const IconButton = React.forwardRef<
  React.ElementRef<"button">,
  IconButtonProps
>((props, ref) => {
  const group = useButtonGroup();
  const {
    icon,
    children,
    isRound,
    "aria-label": ariaLabel,
    loadingText,
    isActive,
    isLoading,
    isDisabled = group?.isDisabled,
    spinner = <Spinner color="currentColor" />,
    type,
    variant,
    size,
    ...rest
  } = props;

  /**
   * Passing the icon as prop or children should work
   */
  const _children = icon || children;

  return (
    <button
      ref={ref}
      className={cx(
        "sui-icon-button",
        iconButton({ variant, size, isRound, isActive })
      )}
      disabled={isDisabled || isLoading}
      type={type ?? "button"}
      data-active={dataAttr(isActive)}
      data-loading={dataAttr(isLoading)}
      aria-label={ariaLabel}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner label={loadingText} />
      ) : (
        <AccessibleIcon label={ariaLabel}>{_children}</AccessibleIcon>
      )}
    </button>
  );
});

if (__DEV__) {
  IconButton.displayName = "IconButton";
}

const linkWithIconButtonStyles = css(iconButton, {});

interface LinkWithIconButtonStylesProps
  extends React.ComponentProps<"a">,
    Omit<VariantProps<typeof linkWithIconButtonStyles>, "isActive">,
    Pick<IconButtonOptions, "spinner" | "icon" | "isRound"> {
  /**
   * A11y: A label that describes the button
   */
  "aria-label": string;
}

export const LinkWithIconButtonStyles = React.forwardRef<
  React.ElementRef<"a">,
  LinkWithIconButtonStylesProps
>((props, ref) => {
  const {
    icon,
    children,
    "aria-label": ariaLabel,
    size,
    variant,
    isRound,
    ...rest
  } = props;

  /**
   * Passing the icon as prop or children should work
   */
  const _children = icon || children;

  return (
    <a
      ref={ref}
      className={cx(
        "sui-icon-button-as-link",
        linkWithIconButtonStyles({ size, variant, isRound })
      )}
      {...rest}
    >
      <AccessibleIcon label={ariaLabel}>{_children}</AccessibleIcon>
    </a>
  );
});

LinkWithIconButtonStyles.displayName = "LinkWithIconButtonStyles";
LinkWithIconButtonStyles.toString = () => ".sui-icon-button-as-link";
