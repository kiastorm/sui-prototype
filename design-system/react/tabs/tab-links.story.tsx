import { Container } from "../layout";
import { TabLink, TabLinks } from "./tab-links";
import { storiesOf } from "@storybook/react";
import React from "react";

import { QuantityBadge } from "../quantity";
import { Tooltip } from "../tooltip";

const BasicUsage = () => {
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

const WithQuantity = () => {
  return (
    <TabLinks>
      <TabLink href="javascript:;">
        Tab 1
        <QuantityBadge variant="gray" quantity={32} />
      </TabLink>
      <TabLink isActive href="javascript:;">
        Tab 2
        <QuantityBadge variant="purple" quantity={3} />
      </TabLink>
      <TabLink href="javascript:;">
        Tab 3
        <QuantityBadge variant="gray" quantity={67} />
      </TabLink>
    </TabLinks>
  );
};

const DisabledWithTooltip = () => {
  return (
    <TabLinks>
      <TabLink active href="javascript:;">
        Overview
      </TabLink>
      {/* https://www.radix-ui.com/docs/primitives/components/tooltip#displaying-a-tooltip-from-a-disabled-button */}
      <Tooltip content="This tab will be available once your cluster finishes deploying.">
        <span tabIndex={0} style={{ cursor: "not-allowed" }}>
          <TabLink disabled href="javascript:;">
            Databases
          </TabLink>
        </span>
      </Tooltip>
      <TabLink href="javascript:;">Firewall</TabLink>
      <TabLink href="javascript:;">Security</TabLink>
      <TabLink href="javascript:;">Updates</TabLink>
      <TabLink href="javascript:;">Monioring</TabLink>
    </TabLinks>
  );
};

storiesOf("Disclosure/TabLinks", module)
  .addDecorator((Story) => (
    <Container css={{ py: "$4" }}>
      <Story />
    </Container>
  ))
  .add("Basic Usage", BasicUsage)
  .add("Disabled Tab Links With Tooltip", DisabledWithTooltip)
  .add("With Quantity", WithQuantity);
