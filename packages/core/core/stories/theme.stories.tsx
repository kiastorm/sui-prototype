import * as React from "react";
import { Code } from "@singlestore-ui/react-layout";
import { theme } from "@singlestore-ui/core";

export default {
  title: "Packages/core/theme",
};

export const basic = () => (
  <Code>
    <pre>{JSON.stringify(theme, null, 4)}</pre>
  </Code>
);
