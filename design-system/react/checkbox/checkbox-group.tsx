import * as React from "react";

import { __DEV__ } from "../../core/utils";
import { createContext } from "../react-utils";
import {
    useCheckboxGroup,
    UseCheckboxGroupProps,
    UseCheckboxGroupReturn,
} from "./use-checkbox-group";

export interface CheckboxGroupProps extends UseCheckboxGroupProps {
    children?: React.ReactNode;
}

export interface CheckboxGroupContext
    extends Pick<
        UseCheckboxGroupReturn,
        "onCheckedChange" | "value" | "disabled"
    > {}

const [CheckboxGroupProvider, useCheckboxGroupContext] = createContext<
    CheckboxGroupContext
>({
    name: "CheckboxGroupContext",
    strict: false,
});

export { useCheckboxGroupContext };

/**
 * Used for multiple checkboxes which are bound in one group,
 * and it indicates whether one or more options are selected.
 *
 */
export const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
    const { children, disabled } = props;
    const { value, onCheckedChange } = useCheckboxGroup(props);

    const group = React.useMemo(
        () => ({
            onCheckedChange,
            value,
            disabled,
        }),
        [onCheckedChange, value, disabled]
    );

    return (
        <CheckboxGroupProvider value={group}>{children}</CheckboxGroupProvider>
    );
};

if (__DEV__) {
    CheckboxGroup.displayName = "CheckboxGroup";
}
