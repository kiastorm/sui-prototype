import React from "react";

import { addItem, Dict, removeItem, StringOrNumber } from "../../core/utils";
import { useCallbackRef, useControllableState } from "../react-utils";

type EventOrValue = React.ChangeEvent<HTMLInputElement> | StringOrNumber;

export interface UseCheckboxGroupProps {
    /**
     * The value of the checkbox group
     */
    value?: StringOrNumber[];
    /**
     * The initial value of the checkbox group
     */
    defaultValue?: StringOrNumber[];
    /**
     * The callback fired when any children Checkbox is checked or unchecked
     */
    onCheckedChange?(value: StringOrNumber[]): void;
    /**
     * If `true`, all wrapped checkbox inputs will be disabled
     */
    disabled?: boolean;
}

/**
 * React hook that provides all the state management logic
 * for a group of checkboxes.
 *
 * It is consumed by the `CheckboxGroup` component
 */
export function useCheckboxGroup(props: UseCheckboxGroupProps = {}) {
    const {
        defaultValue,
        value: valueProp,
        onCheckedChange: onCheckedChangeProp,
        disabled,
    } = props;

    const _onCheckedChangeProp = useCallbackRef(onCheckedChangeProp);

    const [checkedCheckboxes, setCheckedCheckboxes] = useControllableState({
        value: valueProp,
        defaultValue: defaultValue || [],
        onChange: _onCheckedChangeProp,
    });

    const onCheckedChange = React.useCallback(
        (selectedCheckboxValue: StringOrNumber) => {
            if (!selectedCheckboxValue) return;

            console.log("hhehe");
            const checked = !checkedCheckboxes.includes(selectedCheckboxValue);

            const nextValue = checked
                ? addItem(checkedCheckboxes, selectedCheckboxValue)
                : removeItem(checkedCheckboxes, selectedCheckboxValue);
            console.log(nextValue);

            setCheckedCheckboxes(nextValue);
        },
        [setCheckedCheckboxes, checkedCheckboxes]
    );

    const getCheckboxProps = React.useCallback(
        (props: Dict = {}) => {
            return {
                ...props,
                checked: checkedCheckboxes.includes(props.value),
                onCheckedChange,
            };
        },
        [onCheckedChange, checkedCheckboxes]
    );

    return {
        value: checkedCheckboxes,
        disabled,
        onCheckedChange,
        setValue: setCheckedCheckboxes,
        getCheckboxProps,
    };
}

export type UseCheckboxGroupReturn = ReturnType<typeof useCheckboxGroup>;
