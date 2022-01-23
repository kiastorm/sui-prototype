import { keyframes } from "../react-stitches";
import { cx, __DEV__ } from "../../core/utils";
import { VisuallyHidden } from "../visually-hidden";
import * as React from "react";
import { Box } from "../layout";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

interface SpinnerOptions {
  /**
   * The color of the empty area in the spinner
   */
  emptyColor?: string;
  /**
   * The color of the spinner
   */
  color?: string;
  /**
   * The thickness of the spinner
   * @example
   * ```jsx
   * <Spinner thickness="4px"/>
   * ```
   */
  thickness?: string;
  /**
   * The speed of the spinner.
   * @example
   * ```jsx
   * <Spinner speed="0.2s"/>
   * ```
   */
  speed?: string;
  /**
   * For accessibility, it is important to add a fallback loading text.
   * This text will be visible to screen readers.
   */
  label?: string;
}

export interface SpinnerProps
  extends React.ComponentProps<"div">,
    SpinnerOptions {}

type SpinnerElement = React.ElementRef<typeof Box>;

/**
 * Spinner is used to indicate the loading state of a page or a component,
 * It renders a `div` by default.
 *
 */
export const Spinner = React.forwardRef<SpinnerElement, SpinnerProps>(
  (props, ref) => {
    const {
      label = "Loading...",
      thickness = "2px",
      speed = "0.45s",
      emptyColor = "transparent",
      className,
      ...rest
    } = props;

    const _className = cx("spinner", className);

    const spinnerStyles = {
      display: "inline-block",
      borderColor: "currentColor",
      borderStyle: "solid",
      borderRadius: "99999px",
      borderWidth: thickness,
      borderBottomColor: emptyColor,
      borderLeftColor: emptyColor,
      width: "1em",
      height: "1em",
      animation: `${spin} ${speed} linear infinite`,
    };

    return (
      <Box ref={ref} css={spinnerStyles} className={_className} {...rest}>
        {label && <VisuallyHidden>{label}</VisuallyHidden>}
      </Box>
    );
  }
);

if (__DEV__) {
  Spinner.displayName = "Spinner";
}
