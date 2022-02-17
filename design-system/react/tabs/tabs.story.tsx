import React from "react";
import { Container } from "../layout";
import { QuantityBadge } from "../quantity";
import { TabLink, TabLinks } from "../tabs/tab-links";
import { Tooltip } from "../tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

export default {
  title: "Design System/Disclosure/Tabs",
  decorators: [(Story: Function) => <Container>{Story()}</Container>],
};

export const BasicUsage = () => {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList>
        <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1">I am Tab 1 content</TabsContent>
      <TabsContent value="tab-2">I am Tab 2 content</TabsContent>
      <TabsContent value="tab-3">I am Tab 3 content</TabsContent>
    </Tabs>
  );
};

export const WithQuantity = () => {
  const [value, setValue] = React.useState("tab-1");
  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabsList>
        <TabsTrigger value="tab-1">
          Tab 1{" "}
          <QuantityBadge
            variant={value === "tab-1" ? "purple" : "gray"}
            quantity={32}
          />
        </TabsTrigger>
        <TabsTrigger value="tab-2">
          Tab 2{" "}
          <QuantityBadge
            variant={value === "tab-2" ? "purple" : "gray"}
            quantity={13}
          />
        </TabsTrigger>
        <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1">I am Tab 1 content</TabsContent>
      <TabsContent value="tab-2">I am Tab 2 content</TabsContent>
      <TabsContent value="tab-3">I am Tab 3 content</TabsContent>
    </Tabs>
  );
};

export const WithTabLinks = () => {
  return (
    <TabLinks>
      <TabLink active href="javascript:;">
        Overview
      </TabLink>
      <TabLink href="javascript:;">Database</TabLink>
      <TabLink href="javascript:;">Firewall</TabLink>
      <TabLink href="javascript:;">Security</TabLink>
      <TabLink href="javascript:;">Updates</TabLink>
      <TabLink href="javascript:;">Monioring</TabLink>
    </TabLinks>
  );
};

export const DisabledWithTooltip = () => {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList>
        <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        {/* https://www.radix-ui.com/docs/primitives/components/tooltip#displaying-a-tooltip-from-a-disabled-button */}
        <Tooltip content="Tab 2 is disabled">
          <span tabIndex={0} style={{ cursor: "not-allowed" }}>
            <TabsTrigger disabled value="tab-2">
              Tab 2
            </TabsTrigger>
          </span>
        </Tooltip>
        <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1">I am Tab 1 content</TabsContent>
      <TabsContent value="tab-2">I am Tab 2 content</TabsContent>
      <TabsContent value="tab-3">I am Tab 3 content</TabsContent>
    </Tabs>
  );
};
