import { cx } from "@sui/utils";
import React from "react";

export const withClassName = <T extends { className: string }>(
  className: string,
  BaseComponent: React.ComponentType<T>
) => {
  const Component: React.FC<T> = (props) => (
    <BaseComponent {...props} className={cx(className, props.className)} />
  );

  Component.displayName = `withClassName(${
    BaseComponent.displayName || BaseComponent.name
  })`;

  return Component;
};
