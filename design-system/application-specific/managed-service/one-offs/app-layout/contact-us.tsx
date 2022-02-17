import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "../../../../react/drawer/drawer";
import { Container } from "../../../../react/layout";
import { createContext, useBoolean } from "../../../../react/react-utils";
import { Paragraph } from "../../../../react/text";
import React from "react";

const [ContactUsContextProvider, useContactUs] = createContext<{
  isContactUsDialogOpen: ReturnType<typeof useBoolean>["0"];
  setIsContactUsDialogOpen: ReturnType<typeof useBoolean>["1"];
}>({
  name: "ContactUsContext",
});

export { useContactUs };

export const ContactUsProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [isContactUsDialogOpen, setIsContactUsDialogOpen] = useBoolean();

  return (
    <ContactUsContextProvider
      value={{ isContactUsDialogOpen, setIsContactUsDialogOpen }}
    >
      {children}
    </ContactUsContextProvider>
  );
};

export const ContactUsDrawer = () => {
  const {
    isContactUsDialogOpen: open,
    setIsContactUsDialogOpen: { set: onOpenChange },
  } = useContactUs();

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent size={1}>
        <DrawerHeader>
          <DrawerTitle>Contact Us</DrawerTitle>
          <DrawerDescription>
            Ask us anything, or share your feedback! We'd love to hear from you.
          </DrawerDescription>
        </DrawerHeader>
        <Container>
          <Paragraph>
            The workspace size will determine the throughput and performance of
            databases in the cluster. A larger size will typically result in
            better query performance, lower latencies and a higher number of
            concurrent queries. external-link Learn more about Singlestore
            pricing and sizing.
          </Paragraph>
        </Container>
      </DrawerContent>
    </Drawer>
  );
};
