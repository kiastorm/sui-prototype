import {
  faChevronDown,
  faDatabase,
  faLink,
  faPlus,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { PopperAnchor } from "@radix-ui/react-popper";
import * as Portal from "@radix-ui/react-portal";

import React, { useRef } from "react";
import { Button, ButtonGroup } from "../../../../react/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerMain,
  DrawerTrigger,
} from "../../../../react/drawer/drawer";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../../../../react/dropdown-menu";
import { Container, Flex } from "../../../../react/layout";
import { Table, Tbody, Td, Th, Thead, Tr } from "../../../../react/table";
import { H1, Heading, Paragraph } from "../../../../react/text";
import {
  Tooltip,
  Tooltip2Content,
  Tooltip2Root,
  Tooltip2Trigger,
} from "../../../../react/tooltip";
import { clusters } from "../../mock-data";
import { AppLayout, Main } from "../../one-offs/app-layout";

export const DetailSomeTablePage = () => {
  const cellRef = useRef();
  return (
    <AppLayout>
      <Main>
        <Container isFullWidth>
          <Flex justify="between">
            <H1 variant="label-1">Hello</H1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="primary">Action</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Item 1</DropdownMenuItem>

                <DropdownMenuItem>Hello</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Flex>
        </Container>
        <Table>
          <Thead>
            <Th>Column 1</Th>
            <Th>Column 2</Th>
            <Th>Column 3</Th>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Column 1</Td>
              <Tooltip2Root defaultOpen>
                <Tooltip2Trigger asChild>
                  <Td>
                    <span ref={cellRef}>Column 2</span>
                    <Portal.Root containerRef={cellRef}>
                      <Tooltip2Content>Hello</Tooltip2Content>
                    </Portal.Root>
                  </Td>
                </Tooltip2Trigger>
              </Tooltip2Root>
              <Td>Column 3</Td>
            </Tr>
          </Tbody>
        </Table>
      </Main>
    </AppLayout>
  );
};
