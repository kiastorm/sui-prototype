import { jsx as _jsx } from "react/jsx-runtime";
import { Flex } from "@sui/react-layout";
import { Spinner } from "../src";
export default {
    title: "Packages/spinner/Spinner",
};
export const basic = () => (_jsx(Flex, Object.assign({ gap: "3" }, { children: _jsx(Spinner, {}, void 0) }), void 0));
