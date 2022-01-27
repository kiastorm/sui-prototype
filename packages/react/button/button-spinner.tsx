import { CSS } from "../react-stitches";
import { Box } from "../layout";
import { Spinner } from "../spinner";
import * as React from "react";
import { cx, __DEV__ } from "../../core/utils";

export interface ButtonSpinnerProps extends React.ComponentProps<typeof Box> {
  label?: string;
  placement: "start" | "end";
}

export const ButtonSpinner: React.FC<ButtonSpinnerProps> = (props) => {
  const {
    label,
    placement,
    children = <Spinner color="currentColor" />,
    className,
    css,
    ...rest
  } = props;

  const _className = cx("button__spinner", className);

  const marginProp = placement === "start" ? "mr" : "ml";

  const spinnerStyles: CSS = React.useMemo(
    () => ({
      display: "flex",
      alignItems: "start",
      [marginProp]: "0.5rem",
      fontSize: "1em",
      lineHeight: "normal",
      ...css,
    }),
    [css, label, marginProp]
  );

  return children;
};
if (__DEV__) {
  ButtonSpinner.displayName = "ButtonSpinner";
}
