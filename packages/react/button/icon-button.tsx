import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import * as React from "react";
import { cx, dataAttr, __DEV__ } from "../../core/utils";
import { Square } from "../layout";
import { styled } from "../react-stitches";
import { Spinner } from "../spinner";
import { buttonStyles } from "./button";
import { useButtonGroup } from "./button-group";

export interface IconButtonProps
  extends React.ComponentProps<typeof StyledIconButton> {
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
   * The icon to be used in the button.
   * @type React.ReactElement
   */
  icon?: React.ReactElement;
  /**
   * If `true`, the button will be perfectly round. Else, it'll be slightly round
   */
  isRound?: boolean;
  /**
   * A11y: A label that describes the button
   */
  "aria-label": string;
}

export const IconButton = React.forwardRef<IconButtonElement, IconButtonProps>(
  (props, ref) => {
    const group = useButtonGroup();
    const {
      icon,
      children,
      isRound,
      "aria-label": ariaLabel,
      isActive,
      isLoading,
      isDisabled = group?.isDisabled,
      className,
      spinner = <Spinner color="currentColor" />,
      type,
      variant,
      size,
      css,
      ...rest
    } = props;

    /**
     * Passing the icon as prop or children should work
     */
    const _children = icon || children;

    return (
      <StyledIconButton
        ref={ref}
        className={cx("sui-icon-button", className)}
        disabled={isDisabled || isLoading}
        type={type ?? "button"}
        data-active={dataAttr(isActive)}
        data-loading={dataAttr(isLoading)}
        active={isActive}
        variant={variant}
        size={size}
        aria-label={ariaLabel}
        css={{
          p: 0,
          borderRadius: isRound ? "$round" : undefined,
          ...css,
        }}
        {...rest}
      >
        {isLoading ? (
          <Square className="sui-icon-button__spinner">{spinner}</Square>
        ) : (
          <AccessibleIcon label={ariaLabel}>{_children}</AccessibleIcon>
        )}
      </StyledIconButton>
    );
  }
);

if (__DEV__) {
  IconButton.displayName = "IconButton";
}

export const IconButtonAsLink = React.forwardRef<
  IconButtonAsLinkElement,
  IconButtonAsLinkProps
>((props, ref) => {
  const {
    className,
    icon,
    children,
    "aria-label": ariaLabel,
    type,
    ...rest
  } = props;

  /**
   * Passing the icon as prop or children should work
   */
  const _children = icon || children;

  return (
    <StyledIconButtonAsLink
      ref={ref}
      className={cx("sui-icon-button-as-link", className)}
      {...rest}
    >
      <AccessibleIcon label={ariaLabel}>{_children}</AccessibleIcon>
    </StyledIconButtonAsLink>
  );
});

IconButtonAsLink.displayName = "IconButtonAsLink";
IconButtonAsLink.toString = () => ".sui-icon-button-as-link";

export const iconButtonStyles = {
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
  border: "none",

  // Custom reset?
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",

  cursor: "pointer",
  "&:disabled": {
    pointerEvents: "none",
    opacity: 0.4,
  },
  borderRadius: "$2",

  variants: {
    active: {
      ...buttonStyles.variants.active,
    },
    variant: {
      ...buttonStyles.variants.variant,
    },
    size: {
      0: {},
      1: {
        height: "$6",
        width: "$6",
      },
      2: {
        height: "$8",
        width: "$8",
      },
      3: {
        height: "$9",
        width: "$9",
      },
    },
  },
  compoundVariants: [
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
  defaultVariants: buttonStyles.defaultVariants,
};

const StyledIconButtonAsLink = styled("a", iconButtonStyles);

const StyledIconButton = styled("button", iconButtonStyles);

type IconButtonAsLinkElement = React.ElementRef<typeof StyledIconButtonAsLink>;
type IconButtonElement = React.ElementRef<typeof StyledIconButton>;

interface IconButtonAsLinkProps
  extends React.ComponentProps<typeof StyledIconButtonAsLink>,
    Pick<IconButtonProps, "spinner" | "icon" | "isRound"> {
  /**
   * A11y: A label that describes the button
   */
  "aria-label": string;
}
