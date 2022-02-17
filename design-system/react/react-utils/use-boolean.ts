import React from "react";

type InitialState = boolean | (() => boolean);

/**
 * React hook to manage boolean (on - off) states
 *
 * @param initialState the initial boolean state value
 */
export const useBoolean = (initialState: InitialState = false) => {
    const [value, setValue] = React.useState(initialState);

    const on = React.useCallback(() => {
        setValue(true);
    }, []);

    const off = React.useCallback(() => {
        setValue(false);
    }, []);

    const toggle = React.useCallback(() => {
        setValue((prev) => !prev);
    }, []);

    return [value, { on, off, toggle, set: setValue }] as const;
};

export const useBooleanToggleLoop = (
    initialState: InitialState = false,
    timeout: number = 2500
) => {
    const [boolean, setBoolean] = useBoolean(initialState);
    function toggleBooleanLoop() {
        setTimeout(function () {
            setBoolean.toggle();
            toggleBooleanLoop();
        }, timeout);
    }
    React.useEffect(() => {
        toggleBooleanLoop();
    }, []);

    return boolean;
};
