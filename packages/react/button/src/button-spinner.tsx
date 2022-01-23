import { CSS } from "@sui/react-stitches-config";
import { Box } from "@sui/react-layout";
import { Spinner } from "@sui/react-spinner";
import * as React from "react";
import { cx, __DEV__ } from "@sui/utils";

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

  const marginProp = placement === "start" ? "marginEnd" : "marginStart";

  const spinnerStyles: CSS = React.useMemo(
    () => ({
      display: "flex",
      alignItems: "center",
      position: label ? "relative" : "absolute",
      [marginProp]: label ? "0.5rem" : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...css,
    }),
    [css, label, marginProp]
  );

  return (
    <Box className={_className} {...rest} css={spinnerStyles}>
      {children}
    </Box>
  );
};
if (__DEV__) {
  ButtonSpinner.displayName = "ButtonSpinner";
}