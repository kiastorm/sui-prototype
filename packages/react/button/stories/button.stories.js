import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Flex } from "@sui/react-layout";
import { Button, buttonVariants } from "../src";
export const basic = () => (_jsx(_Fragment, { children: Object.keys(buttonVariants.variant).map((variant) => {
        return (_jsxs(Flex, Object.assign({ gap: "3" }, { children: [_jsxs(Flex, Object.assign({ gap: "6", css: {
                        flexDirection: "column",
                        p: "$6",
                    } }, { children: [_jsxs(Flex, Object.assign({ gap: "3" }, { children: [_jsx(Button, Object.assign({ variant: variant }, { children: "Button" }), void 0), _jsx(Button, Object.assign({ variant: variant, size: "2" }, { children: "Button" }), void 0), _jsx(Button, Object.assign({ variant: variant, size: "3" }, { children: "Button" }), void 0)] }), void 0), _jsxs(Flex, Object.assign({ gap: "3" }, { children: [_jsx(Button, Object.assign({ variant: variant, disabled: true }, { children: "Button" }), void 0), _jsx(Button, Object.assign({ variant: variant, disabled: true, size: "2" }, { children: "Button" }), void 0), _jsx(Button, Object.assign({ variant: variant, disabled: true, size: "3" }, { children: "Button" }), void 0)] }), void 0)] }), void 0), _jsxs(Flex, Object.assign({ gap: "6", css: {
                        flexDirection: "column",
                        p: "$6",
                        backgroundColor: "black",
                    } }, { children: [_jsxs(Flex, Object.assign({ gap: "3" }, { children: [_jsx(Button, Object.assign({ variant: variant }, { children: "Button" }), void 0), _jsx(Button, Object.assign({ variant: variant, size: "2" }, { children: "Button" }), void 0), _jsx(Button, Object.assign({ variant: variant, size: "3" }, { children: "Button" }), void 0)] }), void 0), _jsxs(Flex, Object.assign({ gap: "3" }, { children: [_jsx(Button, Object.assign({ variant: variant, disabled: true }, { children: "Button" }), void 0), _jsx(Button, Object.assign({ variant: variant, disabled: true, size: "2" }, { children: "Button" }), void 0), _jsx(Button, Object.assign({ variant: variant, disabled: true, size: "3" }, { children: "Button" }), void 0)] }), void 0)] }), void 0)] }), void 0));
    }) }, void 0));
export const WithIcon = () => (_jsxs(Flex, Object.assign({ gap: 4 }, { children: [_jsx(Button, Object.assign({ leftIcon: _jsx("div", { children: "icon" }, void 0) }, { children: "Email" }), void 0), _jsx(Button, Object.assign({ rightIcon: _jsx("div", { children: "icon" }, void 0) }, { children: "Call us" }), void 0)] }), void 0));
export const withReactIcons = () => (_jsxs(Flex, Object.assign({ direction: "row", gap: 4, align: "center" }, { children: [_jsx(Button, Object.assign({ leftIcon: _jsx("div", { children: "icon" }, void 0) }, { children: "Settings" }), void 0), _jsx(Button, Object.assign({ rightIcon: _jsx("div", { children: "icon" }, void 0) }, { children: "Call us" }), void 0)] }), void 0));
export const WithLoading = () => (_jsxs(Flex, Object.assign({ gap: 4, align: "center" }, { children: [_jsx(Button, Object.assign({ size: "lg", isLoading: true }, { children: "Email" }), void 0), _jsx(Button, Object.assign({ isLoading: true, spinner: _jsx("div", { children: "icon" }, void 0) }, { children: "Click me" }), void 0), _jsx(Button, Object.assign({ isLoading: true, loadingText: "Submitting..." }, { children: "Submit" }), void 0)] }), void 0));
export const WithLoadingSpinnerPlacement = () => (_jsxs(Flex, Object.assign({ direction: "row", gap: 4, align: "center" }, { children: [_jsx(Button, Object.assign({ isLoading: true, loadingText: "Loading", spinnerPosition: "start" }, { children: "Submit" }), void 0), _jsx(Button, Object.assign({ isLoading: true, loadingText: "Loading", spinnerPlacement: "end" }, { children: "Continue" }), void 0)] }), void 0));
export const withDisabled = () => (_jsxs(Flex, Object.assign({ gap: 4 }, { children: [_jsx(Button, Object.assign({ isDisabled: true }, { children: "Button" }), void 0), _jsx(Button, Object.assign({ isDisabled: true }, { children: "Button" }), void 0), _jsx(Button, Object.assign({ isDisabled: true }, { children: "Button" }), void 0), _jsx(Button, Object.assign({ isDisabled: true }, { children: "Button" }), void 0)] }), void 0));
export const customComposition = () => (_jsx(Button, Object.assign({ css: {
        size: "md",
        height: "48px",
        width: "200px",
        border: "5px solid",
        borderColor: "yellow",
    } }, { children: "Button" }), void 0));
