import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import * as React from "react";

import { __DEV__, cx, dataAttr } from "../../core/utils";
import { css, VariantProps } from "../react-stitches";
import { Spinner } from "../spinner";
import { iconButton } from "./button.styles";
import { useButtonGroup } from "./button-group";

export type IconButtonVariants = VariantProps<typeof iconButton>;

export interface IconButtonOptions extends IconButtonVariants {
    /**
     * The html button type to use.
     */
    type?: "button" | "reset" | "submit";
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
        round,
        "aria-label": ariaLabel,
        active,
        loading,
        disabled = group?.disabled,
        loadingText,
        type,
        variant,
        size,
        className,
        css,
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
                iconButton({ variant, size, round, active, css }),
                className
            )}
            disabled={disabled || loading}
            type={type ?? "button"}
            data-active={dataAttr(active)}
            data-loading={dataAttr(loading)}
            aria-label={ariaLabel}
            {...rest}
        >
            {loading ? (
                <Spinner
                    className="sui-icon-button__spinner"
                    label={loadingText}
                />
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
        Omit<VariantProps<typeof linkWithIconButtonStyles>, "active">,
        Pick<IconButtonOptions, "icon" | "round"> {
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
        className,
        round,
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
                linkWithIconButtonStyles({ size, variant, round }),
                className
            )}
            {...rest}
        >
            <AccessibleIcon label={ariaLabel}>{_children}</AccessibleIcon>
        </a>
    );
});

LinkWithIconButtonStyles.displayName = "LinkWithIconButtonStyles";
LinkWithIconButtonStyles.toString = () => ".sui-icon-button-as-link";
