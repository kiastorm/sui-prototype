import { faCloud } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TabsContent } from "@radix-ui/react-tabs";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";
import { FaChevronDown, FaEllipsisV, FaSearch } from "react-icons/fa";
import { StringOrNumber } from "../../../../core/utils";
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
import { clusters } from "../../mock-data";
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

const mockCluster = {
  ...clusters[1],
};

export const mockRouter = {
  pathname: `/clusters/${mockCluster.id}`,
  params: { clusterId: mockCluster.id },
};

export const DetaiClusterPage = () => {
  const contactUs = useContactUs();
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

  const onContactUsClick = contactUs.setIsContactUsDialogOpen.toggle;

  return (
    <Main
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        overflowX: "hidden",
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
            <FontAwesomeIcon icon={faCloud} />
            <h1
              className={text({
                variant: "heading-4",
              })}
            >
              {mockCluster.name}
            </h1>
          </Flex>
          <ButtonGroup>
            <Button variant="secondary" onClick={onContactUsClick}>
              Contact Us
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <IconButton
                  aria-label="Toggle Cluster Actions Menu"
                  title="Toggle Cluster Actions Menu"
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
        defaultValue="overview"
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
          <TabsTrigger value="databases">Databases</TabsTrigger>
          <TabsTrigger value="firewall">Firewall</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="updates">Updates</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
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
        <TabsContent
          asChild
          tabIndex={-1}
          value="overview"
          css={{ overflowY: "auto" }}
        >
          <Container
            css={{
              display: "flex",
              gap: "$6",
              width: "100%",
              alignItems: "stretch",
              justifyContent: "stretch",
              flexWrap: "wrap",
              // flexGrow: 1,
              "> *": { maxWidth: "100%" },
              "> *:first-child": { flex: "1 0 100%" },
              "> *:nth-child(2)": { flex: "1 0 60%" },
              "> *:last-child": { flex: "1 1 300px" },
              // "> *": {
              //     flex: "1",
              // },
            }}
          >
            <Flex
              css={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Card
                css={{
                  px: "$4",
                  py: "$3",
                  flex: "0 0 auto",
                  borderBottom: "none",
                  borderBottomRightRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
              >
                <h2 className={text({ variant: "heading-2" })}>
                  Cluster Overview
                </h2>
              </Card>
              <Card
                css={{
                  px: "$4",
                  py: "$6",
                  flex: "1 1 auto",
                  borderTopRightRadius: 0,
                  borderTopLeftRadius: 0,
                }}
              >
                <Dl
                  css={{
                    display: "flex",
                    // gap: "$4",
                    flexWrap: "wrap",
                    alignContent: "space-between",
                    gap: "$8",
                    "> *": {
                      flex: "0 1 220px",
                    },
                    // flexDirection: "column",
                    // "dt:not(:first-child)": {
                    //     mt: "$4",
                    // },
                    // "> dd + dd": {
                    //     mb: "$4",
                    // },
                    // display: "grid",
                    // gap: "$8",
                    // gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  }}
                >
                  <InlineFlex direction="column">
                    <Dt>Cluster Type</Dt>
                    <Dd>Production</Dd>
                  </InlineFlex>
                  <InlineFlex direction="column">
                    <Dt>Created</Dt>
                    <Dd>2/10/22 at 11:58:37 AM</Dd>
                  </InlineFlex>
                  <InlineFlex direction="column">
                    <Dt>SingleStore DB Version</Dt>
                    <Dd>7.6.9</Dd>
                  </InlineFlex>

                  <InlineFlex direction="column">
                    <Dt>Size</Dt>
                    <Dd>S-0</Dd>
                    <Dd>0 vCPUs | 0 B Memory</Dd>
                  </InlineFlex>
                  <InlineFlex direction="column">
                    <Dt>Auto Terminate</Dt>
                    <Dd>-</Dd>
                  </InlineFlex>
                  <InlineFlex direction="column">
                    <Dt>Region</Dt>
                    <Dd>AWS Local Dev 6</Dd>
                  </InlineFlex>

                  <InlineFlex direction="column">
                    <Dt>High Availability</Dt>
                    <Dd>On</Dd>
                  </InlineFlex>
                </Dl>
              </Card>
            </Flex>

            <Flex
              css={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card
                css={{
                  px: "$4",
                  py: "$3",
                  flex: "0 0 auto",
                  borderBottom: "none",
                  borderBottomRightRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
              >
                <h2
                  className={text({
                    variant: "heading-2",
                  })}
                >
                  Cluster Overview
                </h2>
              </Card>
              <Card
                css={{
                  p: "$4",
                  flex: "1 1 auto",
                  borderTopRightRadius: 0,
                  borderTopLeftRadius: 0,
                }}
              >
                <Dl
                  css={{
                    display: "flex",
                    // gap: "$4",
                    flexWrap: "wrap",
                    alignContent: "space-between",
                    gap: "$8",
                    "> *": {
                      flex: "0 0 300px",
                    },
                  }}
                >
                  <InlineFlex direction="column">
                    <Dt>Cluster Type</Dt>
                    <Dd>Production</Dd>
                  </InlineFlex>
                  <InlineFlex direction="column">
                    <Dt>Created</Dt>
                    <Dd>2/10/22 at 11:58:37 AM</Dd>
                  </InlineFlex>
                  <InlineFlex direction="column">
                    <Dt>SingleStore DB Version</Dt>
                    <Dd>7.6.9</Dd>
                  </InlineFlex>

                  <InlineFlex direction="column">
                    <Dt>Size</Dt>
                    <Dd>S-0</Dd>
                    <Dd>0 vCPUs | 0 B Memory</Dd>
                  </InlineFlex>
                  <InlineFlex direction="column">
                    <Dt>Auto Terminate</Dt>
                    <Dd>-</Dd>
                  </InlineFlex>
                  <InlineFlex direction="column">
                    <Dt>Region</Dt>
                    <Dd>AWS Local Dev 6</Dd>
                  </InlineFlex>

                  <InlineFlex direction="column">
                    <Dt>High Availability</Dt>
                    <Dd>On</Dd>
                  </InlineFlex>
                </Dl>
              </Card>
            </Flex>
            <Flex
              css={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card
                css={{
                  px: "$4",
                  py: "$3",
                  flex: "0 0 auto",
                  borderBottom: "none",
                  borderBottomRightRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
              >
                <h2
                  className={text({
                    variant: "heading-2",
                  })}
                >
                  Workload Monitoring
                </h2>
              </Card>
              <Card
                css={{
                  p: "$4",
                  display: "flex",
                  flexDirection: "column",
                  gap: "$3",
                  flex: "1 1 auto",
                  borderTopRightRadius: 0,
                  borderTopLeftRadius: 0,
                }}
              >
                <Paragraph>
                  You can monitor your the health, workload, active processes,
                  pipelines of your cluster with SingleStore Studio.
                </Paragraph>
                <Button>Open SingleStore Studio</Button>
              </Card>
            </Flex>
          </Container>
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
                gap: "$3",
                p: "$6",
                dl: {
                  m: 0,
                },
                dd: {
                  fontSize: "$body-1",
                  lineHeight: "$body-short-1",
                  margin: 0,
                  ml: "$4",
                },
                "dd:not(:last-child)": {
                  mb: "$6",
                },
                dt: {
                  fontSize: "$label-1",
                  lineHeight: "$label-2",
                  color: "$neutral800",
                  fontWeight: "bold",
                  mb: "$2",
                },
                "dt::before": {
                  content: "''",
                  mr: "$3",
                  display: "inline-block",
                  width: "$1",
                  height: "1em",
                  bgc: "$neutral300",
                },
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
                  minInlineSize: "120px",
                }}
              >
                <dl>
                  <dt>Master Username</dt>
                  <dd>admin</dd>
                  <dt>Password</dt>
                  <dd>admin</dd>
                </dl>
              </Box>
            </Card>
            <Card
              css={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "100%",
                gap: "$3",
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
                        Search for databases in this Cluster
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
