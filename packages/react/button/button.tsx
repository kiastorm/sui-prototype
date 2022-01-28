import * as React from "react";
import { cx, dataAttr } from "../../core/utils";
import { AccessibleIcon } from "../icon";
import { Square } from "../layout";
import { ComponentProps, css, styled } from "../react-stitches";
import { Spinner } from "../spinner";
import { ButtonSpinner } from "./button-spinner";
import { useButtonGroup } from "./button-group";

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
    const group = useButtonGroup();

    const {
      isActive,
      isLoading = group?.isLoading,
      isDisabled = group?.isDisabled,
      className,
      loadingText,
      leftIcon,
      rightIcon,
      spinner = <ButtonSpinner placement="end" />,
      spinnerPlacement = "start",
      children,
      type,
      variant = group?.variant,
      size = group?.size,
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
        variant={variant}
        size={size}
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
              <AccessibleIcon>{rightIcon}</AccessibleIcon>
            </Square>
          )
        )}
      </StyledButton>
    );
  }
);

Button.toString = () => ".sui-button";
Button.displayName = "Button";

export const ButtonAsLink = React.forwardRef<
  ButtonAsLinkElement,
  ButtonAsLinkProps
>((props, ref) => {
  const { className, leftIcon, rightIcon, children, type, ...rest } = props;

  return (
    <StyledButtonAsLink
      ref={ref}
      className={cx("sui-button-as-link", className)}
      {...rest}
    >
      {leftIcon && <AccessibleIcon label="">{leftIcon}</AccessibleIcon>}
      {children}
      {rightIcon && <AccessibleIcon label="">{rightIcon}</AccessibleIcon>}
    </StyledButtonAsLink>
  );
});

ButtonAsLink.displayName = "ButtonAsLink";
ButtonAsLink.toString = () => ".sui-button-as-link";

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

export const buttonStyles = {
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
  border: "1px solid transparent",

  // Custom reset?
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",

  // Custom
  height: "$5",
  px: "$2",
  font: "untitled",
  fontSize: "$2",
  fontWeight: 700,
  cursor: "pointer",
  "&:disabled": {
    pointerEvents: "none",
    opacity: 0.4,
  },

  $$iconSpacing: "$space$2",

  ".sui-button__icon--start": {
    mr: "$$iconSpacing",
    svg: {
      width: "$$iconSize",
      height: "$$iconSize",
    },
  },
  ".sui-button__icon--end": {
    ml: "$$iconSpacing",
    svg: {
      width: "$$iconSize",
      height: "$$iconSize",
    },
  },
  variants: {
    active: {
      true: {},
      false: {},
    },
    // Size of the button
    size: {
      "1": {
        borderRadius: "$2",
        height: "$6",
        minWidth: "$12",
        px: "$2",
        fontSize: "$3",
        lineHeight: "$fontSizes$5",
        $$iconSize: "$3",
      },
      "2": {
        borderRadius: "$2",
        height: "$8",
        minWidth: "$16",
        px: "$4",
        fontSize: "$5",
        lineHeight: "$fontSizes$4",
        $$iconSize: "$4",
      },
      "3": {
        borderRadius: "$2",
        height: "$9",
        px: "$6",
        fontSize: "$5",
        lineHeight: "$fontSizes$4",
        $$iconSize: "$4",
      },
    },
    // Visual style and colour of the button
    variant: {
      primary: {
        bgc: "red",
        color: "white",
        "@hover": {
          "&:hover": {
            background: "$purple800",
          },
        },
        "&:focus": {
          background: "$purple900",
          boxShadow: "0px 0px 0px 2px $colors$purple400",
        },
        "&:active": {
          background: "$purple800",
          boxShadow: "0px 0px 0px 2px $colors$purple400",
        },
      },
      secondary: {
        bgc: "$neutral0",
        color: "$neutral800",
        border: "1px solid $colors$neutral500",
        "@hover": {
          "&:hover": {
            background: "$neutral100",
          },
        },
        "&:focus": {
          borderColor: "$neutral500",
          background: "$neutral200",
          boxShadow: "0px 0px 0px 2px $colors$neutral500",
        },
        "&:active": {
          background: "$neutral300",
          boxShadow: "0px 0px 0px 2px $colors$neutral500",
        },
      },
      "ghost-primary": {
        bgc: "transparent",
        color: "$purple900",
        minWidth: "unset",
        "@hover": {
          "&:hover": {
            background: "$purple200",
          },
        },
        "&:focus": {
          borderColor: "$purple400",
          background: "$purple200",
          boxShadow: "0px 0px 0px 2px $colors$purple400",
        },
        "&:active": {
          background: "$purple100",
          boxShadow: "0px 0px 0px 2px $colors$purple400",
        },
      },
      "ghost-secondary": {
        bgc: "transparent",
        color: "$neutral800",
        minWidth: "unset",
        "@hover": {
          "&:hover": {
            background: "$neutral100",
          },
        },
        "&:focus": {
          borderColor: "$neutral500",
          background: "$neutral200",
          boxShadow: "0px 0px 0px 2px $colors$neutral500",
        },
        "&:active": {
          background: "$neutral300",
          boxShadow: "0px 0px 0px 2px $colors$neutral500",
        },
      },
    },
  },
  compoundVariants: [
    {
      size: 1,
      variant: "ghost-primary",
      css: {
        px: "$2",
      },
    },
    {
      size: 2,
      variant: "ghost-primary",
      css: {
        px: "$2",
      },
    },
    {
      size: 3,
      variant: "ghost-primary",
      css: {
        px: "$2",
      },
    },
    {
      size: 1,
      variant: "ghost-secondary",
      css: {
        px: "$2",
      },
    },
    {
      size: 2,
      variant: "ghost-secondary",
      css: {
        px: "$2",
      },
    },
    {
      size: 3,
      variant: "ghost-secondary",
      css: {
        px: "$2",
      },
    },
    {
      active: true,
      variant: "primary",
      css: {
        background: "$purple800",
        boxShadow: "0px 0px 0px 2px $colors$purple400",
      },
    },
    {
      active: true,
      variant: "secondary",
      css: {
        background: "$neutral300",
        boxShadow: "0px 0px 0px 2px $colors$neutral500",
      },
    },
    {
      active: true,
      variant: "ghost-primary",
      css: {
        background: "$purple100",
        borderColor: "$purple400",
        boxShadow: "0px 0px 0px 2px $colors$purple400",
      },
    },
    {
      active: true,
      variant: "ghost-secondary",
      css: {
        background: "$neutral300",
        borderColor: "$neutral500",
        boxShadow: "0px 0px 0px 2px $colors$neutral500",
      },
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "2",
  },
};

export const button = css(buttonStyles);

export const StyledButtonAsLink = styled("a", buttonStyles);

export const StyledButton = styled("button", buttonStyles);
