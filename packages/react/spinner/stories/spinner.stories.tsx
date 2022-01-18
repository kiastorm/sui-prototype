import { Flex } from "@singlestore-ui/react-layout";
import * as React from "react";
import { Spinner } from "../src";

export default {
  title: "Packages/spinner/Spinner",
};

export const basic = () => (
  <Flex gap="3">
    <Spinner />
  </Flex>
);
