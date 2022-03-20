import { TabsContent } from "@radix-ui/react-tabs";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";
import { FaChevronDown, FaEllipsisV, FaSearch } from "react-icons/fa";
import { StringOrNumber } from "../../../../core/utils";
import { Badge } from "../../../../react/badge";
import { Button, ButtonGroup, IconButton } from "../../../../react/button";
import { Card } from "../../../../react/card/card";
import { Checkbox, CheckboxGroup } from "../../../../react/checkbox";
import { Dd, Dl, Dt } from "../../../../react/definition-list";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerMain,
  DrawerTitle,
} from "../../../../react/drawer/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../react/dropdown-menu";
import { FormControl, FormLabel } from "../../../../react/form-control";
import { Input, InputGroup, InputLeftElement } from "../../../../react/input";
import {
  Box,
  Code,
  Container,
  Flex,
  InlineFlex,
  Pre,
  Spacer,
} from "../../../../react/layout";
import { useBoolean } from "../../../../react/react-utils";
import { Table, Tbody, Td, Th, Thead, Tr } from "../../../../react/table";
import { Tabs, TabsList, TabsTrigger } from "../../../../react/tabs/tabs";
import { Paragraph, text } from "../../../../react/text";
import { workspaceGroups } from "../../mock-data";
import { Main } from "../../one-offs/app-layout";
import { useContactUs } from "../../one-offs/app-layout/contact-us";

const databases = Array(10)
  .fill(1)
  .map((_, index) => {
    return {
      id: `db-${index}`,
      name: `My database ${index}`,
    };
  });

export const mockRouter = {
  pathname: `/workspaces/${workspaceGroups[1].id}`,
  params: { workspaceGroupId: workspaceGroups[1].id },
};
export const DetailWorkspaceGroupPage = () => {
  const [resizeWorkspaceDrawerOpen, setResizeWorkspaceDrawerOpen] =
    useBoolean();
  const [attachDetachDatabaseDrawerOpen, setAttachDetachDatabaseDrawerOpen] =
    useBoolean(false);
  const [configureSettingsDrawer, setConfigureSettingsDrawer] = useBoolean();
  const [isEditingAttachedDatabases, setIsEditingAttachedDatabases] =
    useBoolean(false);

  const [attachedDatabases, setAttachedDatabases] = React.useState<
    Array<StringOrNumber>
  >([databases[0].id, databases[1].id]);

  const contactUs = useContactUs();

  return (
    <Main
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        gap: "$6",
      }}
    >
      <Container
        css={{
          pb: 0,
          width: "100%",
          flexBasis: "auto",
        }}
      >
        <Flex
          align="center"
          justify="between"
          wrap="wrapReverse"
          gap={3}
          css={{}}
        >
          <Flex align="center" wrap="wrap" gap={2}>
            <h1
              className={text({
                variant: "heading-4",
              })}
            >
              Workspace Group 1
            </h1>
            <Badge>AWS/US-EAST-1</Badge>
          </Flex>
          <ButtonGroup>
            <Button
              variant="secondary"
              onClick={contactUs.setIsContactUsDialogOpen.toggle}
            >
              Contact Us
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <IconButton
                  aria-label="Toggle Workspace Group Actions Menu"
                  title="Toggle Workspace Group Actions Menu"
                  variant="secondary"
                >
                  <FaEllipsisV />
                </IconButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Some action</DropdownMenuItem>
                <DropdownMenuItem>Some other action</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
        </Flex>
      </Container>

      <Tabs
        defaultValue="access"
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          flexGrow: 1,

          ".sui-tab__content": {
            overflow: "auto",
          },
        }}
      >
        <TabsList css={{ px: "$6", overflowY: "visible", overflowX: "auto" }}>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="access">Access</TabsTrigger>
          <TabsTrigger value="firewall">Firewall</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="updates">Updates</TabsTrigger>
        </TabsList>

        {/* <TabLinks shouldRenderSeparator={false}>
                        <TabLink href="javascript:;" active>
                            Overview
                        </TabLink>
                        <TabLink href="javascript:;">Access</TabLink>
                        <TabLink href="javascript:;">Firewall</TabLink>
                        <TabLink href="javascript:;">Security</TabLink>
                        <TabLink href="javascript:;">Updates</TabLink>
                    </TabLinks> */}
        {/* <Router></Router> */}
        <TabsContent asChild tabIndex={-1} value="overview">
          <Container css={{}}>{/* <RelatedList /> */}</Container>
        </TabsContent>
        <TabsContent asChild tabIndex={-1} value="access">
          <Container
            css={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              gap: "$6",
              maxWidth: "100%",
            }}
          >
            <Card
              css={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "100%",
                gap: "$4",
                p: "$6",
              }}
            >
              <h3
                className={text({
                  variant: "body-short-1",
                  weight: "bold",
                  uppercase: true,
                  css: {
                    flex: "0 0 30%",
                    minInlineSize: "120px",
                  },
                })}
              >
                Master User
              </h3>
              <Box
                css={{
                  flexGrow: 999,
                  flexShrink: 1,
                  flexBasis: 0,
                  minInlineSize: "150px",
                }}
              >
                <Dl>
                  <Dt>Master Username</Dt>
                  <Dd css={{ mb: "$8" }}>admin</Dd>
                  <Dt>Password</Dt>
                  <Dd>admin</Dd>
                </Dl>
              </Box>
            </Card>
            <Card
              css={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "100%",
                gap: "$4",
                p: "$6",
              }}
            >
              <h3
                className={text({
                  variant: "body-short-1",
                  weight: "bold",
                  uppercase: true,
                  css: {
                    flex: "0 0 30%",
                    minInlineSize: "130px",
                    maxWidth: "100%",
                  },
                })}
              >
                Database Users
              </h3>
              <Box
                css={{
                  flex: "999 0 0",
                  maxWidth: "100%",
                }}
              >
                <h3
                  className={text({
                    variant: "heading-1",
                    css: { mb: "$2" },
                  })}
                >
                  Create additional Users
                </h3>
                <Paragraph css={{ mb: "$2" }}>
                  You can use <code>CREATE USER</code> command to create
                  additional database users and use <code>GRANT</code> to
                  specify privileges for the new user. The command must be run
                  by a user with administrative privileges on the database.
                  Also, the new user does not have any privileges granted by
                  default. external-link Learn more
                </Paragraph>
                {/* <Code> */}
                <Pre>
                  <Code>
                    {`CREATE USER <username>;
GRANT <priviledge> ON <database>.* TO '<username>'@'%';`}
                  </Code>
                </Pre>
                {/* </Code> */}
              </Box>
            </Card>
          </Container>
        </TabsContent>
        <TabsContent tabIndex={-1} value="firewall">
          Firewall
        </TabsContent>
        <TabsContent tabIndex={-1} value="security">
          Security
        </TabsContent>
        <TabsContent tabIndex={-1} value="updates">
          Updates
        </TabsContent>
      </Tabs>
      <Drawer
        open={resizeWorkspaceDrawerOpen}
        onOpenChange={setResizeWorkspaceDrawerOpen.set}
      >
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Resize Workspace</DrawerTitle>
          </DrawerHeader>
          <Container>
            <div />
          </Container>
        </DrawerContent>
      </Drawer>
      <Drawer
        open={attachDetachDatabaseDrawerOpen}
        onOpenChange={setAttachDetachDatabaseDrawerOpen.set}
      >
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Databases Attached to 'staging-analytics'</DrawerTitle>
          </DrawerHeader>
          <DrawerMain css={{ width: "100%" }}>
            {isEditingAttachedDatabases ? (
              <Flex direction="column" gap={5}>
                <InlineFlex align="center" gap={3}>
                  <FormControl>
                    <VisuallyHidden>
                      <FormLabel>
                        Search for databases in this workspace group
                      </FormLabel>
                    </VisuallyHidden>
                    <InputGroup>
                      <InputLeftElement>
                        <FaSearch />
                      </InputLeftElement>
                      <Input placeholder="Search..." />
                    </InputGroup>
                  </FormControl>

                  <InlineFlex align="center" gap={2}>
                    <Checkbox />
                    <FormLabel variant="body-1">Show only selected</FormLabel>
                  </InlineFlex>
                </InlineFlex>
                <CheckboxGroup
                  value={attachedDatabases}
                  onCheckedChange={setAttachedDatabases}
                >
                  <Flex align="center" gap={4}>
                    <InlineFlex align="center" gap={2}>
                      <Checkbox
                        checked={(() => {
                          if (attachedDatabases.length === 0) {
                            return false;
                          } else if (
                            attachedDatabases.length === databases.length
                          ) {
                            return true;
                          } else {
                            return "indeterminate";
                          }
                        })()}
                        onCheckedChange={() => {
                          if (attachedDatabases.length === databases.length) {
                            setAttachedDatabases([]);
                          } else {
                            setAttachedDatabases(
                              databases.map((database) => database.id)
                            );
                          }
                        }}
                      />

                      <FormLabel variant="body-1" weight="bold">
                        Select All (3 of xx selected)
                      </FormLabel>
                    </InlineFlex>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost-primary"
                          rightIcon={<FaChevronDown />}
                        >
                          Choose Attachment Type
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Read-only</DropdownMenuItem>
                        <DropdownMenuItem>Read/Write</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </Flex>
                  <Table>
                    <Thead>
                      <Th>Databases</Th>
                      <Th>Attachment Type</Th>
                    </Thead>
                    <Tbody>
                      {databases.map((db) => {
                        return (
                          <Tr>
                            <Td>
                              <Flex align="center">
                                <Checkbox
                                  value={db.id}
                                  css={{
                                    mr: "$3",
                                  }}
                                />
                                {db.id}
                              </Flex>
                            </Td>
                            <Td>Read-only</Td>
                          </Tr>
                        );
                      })}
                    </Tbody>
                  </Table>
                </CheckboxGroup>
              </Flex>
            ) : (
              <Flex direction="column" gap={3}>
                <Flex align="center" justify="between">
                  <h2
                    className={text({
                      variant: "heading-2",
                    })}
                  >
                    3 attached databases
                  </h2>
                  <Button
                    variant="secondary"
                    onClick={setIsEditingAttachedDatabases.on}
                  >
                    Edit Selection
                  </Button>
                </Flex>

                <Table>
                  <Thead>
                    <Th>Databases</Th>
                    <Th>Attachment Type</Th>
                  </Thead>
                  <Tbody>
                    {databases.map((db) => {
                      return (
                        <Tr>
                          <Td>{db.id}</Td>
                          <Td>Read-only</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </Flex>
            )}
          </DrawerMain>
          {isEditingAttachedDatabases && (
            <DrawerFooter>
              <ButtonGroup>
                <Spacer />

                <Button
                  variant="secondary"
                  onClick={() => setIsEditingAttachedDatabases.off()}
                >
                  Cancel
                </Button>

                <Button onClick={() => setIsEditingAttachedDatabases.off()}>
                  Save
                </Button>
              </ButtonGroup>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
      <Drawer
        open={configureSettingsDrawer}
        onOpenChange={setConfigureSettingsDrawer.set}
      >
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Workspace Settings</DrawerTitle>
            <DrawerDescription>
              The workspace size will determine the throughput and performance
              of databases in the cluster. A larger size will typically result
              in better query performance, lower latencies and a higher number
              of concurrent queries. external-link Learn more about Singlestore
              pricing and sizing.
            </DrawerDescription>
          </DrawerHeader>
          <Container>
            <Paragraph>
              The workspace size will determine the throughput and performance
              of databases in the cluster. A larger size will typically result
              in better query performance, lower latencies and a higher number
              of concurrent queries. external-link Learn more about Singlestore
              pricing and sizing.
            </Paragraph>
          </Container>
        </DrawerContent>
      </Drawer>
    </Main>
  );
};
