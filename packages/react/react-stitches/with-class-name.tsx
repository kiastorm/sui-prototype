import { StyledComponent } from "@stitches/react/types/styled-component";
import { cx } from "../../core/utils";
import React from "react";

export const withStyledComponentClassName = (
  className: string,
  BaseComponent: React.ComponentType<T>
) => {
  const Component: React.FC<T> = (props) => (
    <BaseComponent {...props} className={cx(className, props.className)} />
  );

  Component.displayName = `withStyledComponentClassName(${
    BaseComponent.displayName || BaseComponent.name
  })`;

  return Component;
};
