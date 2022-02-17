import * as React from "react";

import { cx } from "../../core/utils";
import { CSS, css } from "../react-stitches";

export interface LinkOverlayProps extends React.ComponentProps<"a"> {
    /**
     *  If `true`, the link will open in new tab
     */
    isExternal?: boolean;
}

const linkBox = css({
    position: "relative",
    /* Elevate the links and abbreviations up */
    "a[href]:not(.sui-link-box__overlay), abbr[title]": {
        position: "relative",
        zIndex: 1,
    },
});
const linkOverlay = css({
    position: "static",
    "&::before": {
        content: "''",
        cursor: "inherit",
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
    },
});

export const LinkOverlay = React.forwardRef<
    React.ElementRef<"a">,
    LinkOverlayProps & { css?: CSS }
>((props, ref) => {
    const { isExternal, target, rel, className, css, ...rest } = props;
    return (
        <a
            {...rest}
            ref={ref}
            className={cx(
                "sui-link-box__overlay",
                linkOverlay({ css }),
                className
            )}
            rel={isExternal ? "noopener noreferrer" : rel}
            target={isExternal ? "_blank" : target}
        />
    );
});

export interface LinkBoxProps extends React.ComponentProps<"div"> {
    css: CSS;
}

/**
 * `LinkBox` is used to wrap content areas within a link while ensuring semantic html
 *
 * @see Docs https://sui-ui.com/docs/navigation/link-overlay
 * @see Resources https://www.sarasoueidan.com/blog/nested-links
 */
export const LinkBox = React.forwardRef<React.ElementRef<"div">, LinkBoxProps>(
    (props, ref) => {
        const { className, css, ...rest } = props;

        return (
            <div
                ref={ref}
                {...rest}
                className={cx("sui-link-box", linkBox({ css }), className)}
            />
        );
    }
);
