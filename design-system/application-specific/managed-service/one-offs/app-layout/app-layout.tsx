import { faHashtag } from "@fortawesome/pro-light-svg-icons";
import {
  faCloud,
  faDatabase,
  faPlusCircle,
  faPrintSearch,
  faTable,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AccordionImplMultipleProps } from "@radix-ui/react-accordion";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { cx } from "../../../../core/utils";
import { Avatar } from "../../../../react/avatar";
import { Button, IconButton } from "../../../../react/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../react/dropdown-menu";
import { Square } from "../../../../react/layout";
import { CSS, css } from "../../../../react/react-stitches";
import { Status } from "../../../../react/status/status";
import { Logo } from "./logo";
import { clusters, workspaceGroups } from "../../mock-data";
import { ContactUsDrawer, ContactUsProvider } from "./contact-us";
import {
  Nav,
  NavItemAccordionContent,
  NavItemAccordionIconTrigger,
  NavItemAccordionItem,
  NavItemAccordionRoot,
  NavItemAccordionWideTrigger,
  NavItemIcon,
  NavItemLink,
  NavItemRow,
  NavSectionAccordion,
  NavSectionAccordionContent,
  NavSectionAccordionHeader,
  NavSectionAccordionTrigger,
} from "./nav";

const skipToMainContentLink = css({
  position: "fixed",
  top: 16,
  left: 16,
  visibiility: "hidden",
  zIndex: -1,

  "&:focus": {
    bgc: "$purple900",
    color: "white",
    p: "$4",
    textDecoration: "none",
    fontWeight: "bold",

    zIndex: "$max",
    visibiility: "hidden",
  },
});

const sidebar = css({
  display: "flex",
  flexDirection: "column",
  flexBasis: 0,
  flexGrow: 1,
  // overflowY: "auto",
  borderRight: "1px solid $colors$neutral300",
  maxHeight: "100vh",
  width: "100vw",
  maxWidth: "100%",
});

// ensures the main content container takes up the rest of the available space
export const mainBaseStyles = css({
  // height: "100%",
  flexBasis: 0,
  flexGrow: 999,
  minInlineSize: "50%",
});

const main = css(mainBaseStyles, {
  display: "flex",
  overflowY: "auto",
  flexDirection: "column",
  height: "100%",
  // overflowX:
});

export const Main = React.forwardRef<
  React.ElementRef<"main">,
  React.ComponentProps<"main"> & { css: CSS }
>((props, forwardedRef) => {
  const { className, css, ...rest } = props;
  return (
    <main
      ref={forwardedRef}
      id="main"
      className={cx(main({ css }), className)}
      {...rest}
    />
  );
});

const appContainer = css({
  bgc: "white",
  // overflow: "hidden",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "stretch",
  alignContent: "start",
  height: "100%",

  overflowY: "auto",
  overflowX: "hidden",
  // overflowY: "auto",

  "*": {
    boxSizing: "border-box",
  },
});

const sidebarHeader = css({
  bgc: "white",
  p: "$4",
  pb: "$3",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignContent: "start",
  flexWrap: "wrap",
  gap: "$6",
  borderBottom: "1px solid $neutral300",
  zIndex: 1,
  top: 0,

  "> svg": {
    minInlineSize: "300px",
  },
});

type AppLayoutProps = React.PropsWithChildren<{
  /**  TEMPORARY */
  router?: {
    pathname: string;
    params: { workspaceGroupId?: string; clusterId?: string };
  };
  navigationAccordionType?: React.ComponentProps<typeof Nav>["type"];
  shouldAnimateNavigationAccordion?: boolean;
}>;

export const AppLayout = (props: AppLayoutProps) => {
  const {
    navigationAccordionType = "single",
    shouldAnimateNavigationAccordion = true,
  } = props;
  const { workspaceGroupId, clusterId } = props.router?.params ?? {};

  const [expandedNavSectionAccordion, setExpandedNavSectionAccordion] =
    React.useState(() => {
      if (workspaceGroupId) {
        return "cloud";
      }

      if (clusterId) {
        return "clusters";
      }
    });

  const [expandedNavItemsClusters, setExpandedNavItemsClusters] =
    React.useState(() => {
      const value = [];

      if (clusterId) {
        value.push(clusterId);
      }

      return value;
    });
  const [expandedNavItemsCloud, setExpandedNavItemsCloud] = React.useState(
    () => {
      const value = [];

      if (workspaceGroupId) {
        value.push(workspaceGroupId);
      }
      return value;
    }
  );

  const [
    expandedNavItemsClusterDatabases,
    setExpandedNavItemsClusterDatabases,
  ] = React.useState<AccordionImplMultipleProps["value"]>([]);
  const [
    expandedNavItemsClusterDatabaseTables,
    setExpandedNavItemsClusterDatabaseTables,
  ] = React.useState<AccordionImplMultipleProps["value"]>([]);

  const [
    expandedNavItemsWorkspaceGroupDatabases,
    setExpandedNavItemsWorkspaceGroupDatabases,
  ] = React.useState<AccordionImplMultipleProps["value"]>([]);
  const [
    expandedNavItemsWorkspaceGroupDatabaseTables,
    setExpandedNavItemsWorkspaceGroupDatabaseTables,
  ] = React.useState<AccordionImplMultipleProps["value"]>([]);

  return (
    <ContactUsProvider>
      <a href="#main" className={skipToMainContentLink()}>
        Skip to main
      </a>
      <div className={appContainer()}>
        <div className={sidebar()}>
          <div className={sidebarHeader()}>
            <Logo />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size={3}
                  variant="ghost-secondary"
                  leftIcon={<Avatar fallback="JD" />}
                  rightIcon={<FaChevronDown />}
                  css={{
                    justifyContent: "start",
                    ml: "-$2",
                  }}
                >
                  john.doe@acme.com
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Nav
            value={expandedNavSectionAccordion}
            onValueChange={setExpandedNavSectionAccordion}
            type={navigationAccordionType}
          >
            <NavSectionAccordion value="clusters">
              <NavSectionAccordionHeader>
                <NavSectionAccordionTrigger
                  icon={<FontAwesomeIcon icon={faCloud} />}
                >
                  Clusters
                </NavSectionAccordionTrigger>
                <IconButton
                  size={1}
                  aria-label="Create Cluster"
                  title="Create Cluster"
                  variant="ghost-secondary"
                  css={{ mr: "-$2" }}
                >
                  <FontAwesomeIcon icon={faPlusCircle} />
                </IconButton>
              </NavSectionAccordionHeader>
              <NavSectionAccordionContent
                shouldAnimate={shouldAnimateNavigationAccordion}
              >
                <NavItemAccordionRoot
                  value={expandedNavItemsClusters}
                  onValueChange={setExpandedNavItemsClusters}
                >
                  {clusters.map((cluster) => (
                    <NavItemAccordionItem value={cluster.id}>
                      <NavItemRow
                        isActive={cluster.id === props.router?.params.clusterId}
                        depth={1}
                      >
                        <NavItemAccordionIconTrigger />
                        <NavItemLink
                          isActive={
                            cluster.id === props.router?.params.clusterId
                          }
                        >
                          <NavItemIcon icon={faCloud} />
                          {cluster.name}
                        </NavItemLink>
                      </NavItemRow>
                      <NavItemAccordionContent>
                        <NavItemAccordionRoot
                          value={expandedNavItemsClusterDatabases}
                          onValueChange={setExpandedNavItemsClusterDatabases}
                        >
                          {cluster.databases.map((database) => (
                            <NavItemAccordionItem value={database.id}>
                              <NavItemRow depth={2}>
                                <NavItemAccordionIconTrigger />

                                <NavItemLink>
                                  <NavItemIcon icon={faDatabase} />
                                  {database.name}
                                </NavItemLink>
                              </NavItemRow>
                              <NavItemAccordionContent>
                                <NavItemAccordionRoot
                                  value={expandedNavItemsClusterDatabaseTables}
                                  onValueChange={
                                    setExpandedNavItemsClusterDatabaseTables
                                  }
                                >
                                  {database.tables.map((table, i) => (
                                    <NavItemAccordionItem value={table.id}>
                                      <NavItemRow depth={3}>
                                        <NavItemAccordionIconTrigger />

                                        <NavItemLink>
                                          <NavItemIcon icon={faTable} />
                                          {table.name}
                                        </NavItemLink>
                                      </NavItemRow>
                                      <NavItemAccordionContent>
                                        {table.columns.map((column) => (
                                          <NavItemRow depth={4}>
                                            <NavItemLink>
                                              <Square
                                                shouldCenterContent
                                                css={{
                                                  ml: "$1",
                                                }}
                                              >
                                                <Status />
                                              </Square>
                                              {column.name}
                                            </NavItemLink>
                                          </NavItemRow>
                                        ))}
                                      </NavItemAccordionContent>
                                    </NavItemAccordionItem>
                                  ))}
                                </NavItemAccordionRoot>
                              </NavItemAccordionContent>
                            </NavItemAccordionItem>
                          ))}
                        </NavItemAccordionRoot>
                      </NavItemAccordionContent>
                    </NavItemAccordionItem>
                  ))}
                </NavItemAccordionRoot>
              </NavSectionAccordionContent>
            </NavSectionAccordion>

            <NavSectionAccordion value="cloud">
              <NavSectionAccordionHeader>
                <NavSectionAccordionTrigger
                  icon={<FontAwesomeIcon icon={faCloud} />}
                >
                  Cloud
                </NavSectionAccordionTrigger>
                <IconButton
                  size={1}
                  aria-label="Create Workspace"
                  title="Create Workspace"
                  variant="ghost-secondary"
                  css={{ mr: "-$2" }}
                >
                  <FontAwesomeIcon icon={faPlusCircle} />
                </IconButton>
              </NavSectionAccordionHeader>

              <NavSectionAccordionContent
                shouldAnimate={shouldAnimateNavigationAccordion}
              >
                <NavItemAccordionRoot
                  value={expandedNavItemsCloud}
                  onValueChange={setExpandedNavItemsCloud}
                >
                  {workspaceGroups.map(
                    (workspaceGroup, workspaceGroupIndex) => (
                      <NavItemAccordionItem value={workspaceGroup.id}>
                        <NavItemRow
                          isActive={
                            workspaceGroup.id ===
                            props.router?.params.workspaceGroupId
                          }
                          depth={1}
                        >
                          <NavItemAccordionIconTrigger />
                          <NavItemLink
                            isActive={
                              workspaceGroup.id ===
                              props.router?.params.workspaceGroupId
                            }
                          >
                            <Square shouldCenterContent>
                              <NavItemIcon icon={faCloud} />
                            </Square>
                            {workspaceGroup.name}
                          </NavItemLink>
                        </NavItemRow>
                        <NavItemAccordionContent>
                          <NavItemAccordionRoot
                            defaultValue={["workspaces", "databases"]}
                          >
                            <NavItemAccordionItem value="workspaces">
                              <NavItemRow depth={2}>
                                {/* <NavItemAccordionIconTrigger />
                                                                <NavItemText>
                                                                    <NavItemIcon
                                                                        icon={
                                                                            faCloud
                                                                        }
                                                                    />
                                                                    Workspaces
                                                                </NavItemText> */}
                                <NavItemAccordionWideTrigger
                                  icon={
                                    <Square shouldCenterContent>
                                      <NavItemIcon icon={faCloud} />
                                    </Square>
                                  }
                                >
                                  Workspaces
                                </NavItemAccordionWideTrigger>
                              </NavItemRow>

                              <NavItemAccordionContent>
                                {workspaceGroup.workspaces.map(
                                  (workspace, workspaceIndex) => (
                                    <NavItemRow depth={3}>
                                      <NavItemLink
                                        css={{
                                          ml: "$7",
                                        }}
                                      >
                                        <Square
                                          shouldCenterContent
                                          css={{
                                            ml: "$1",
                                            // give status a container with $1 padding to mimic icon container spacing

                                            // Use margin in place of what would be a 32x32 icon button
                                          }}
                                        >
                                          <Status
                                            variant={
                                              workspace.status === "active"
                                                ? "green"
                                                : "gray"
                                            }
                                          />
                                        </Square>
                                        {workspace.name}
                                      </NavItemLink>
                                    </NavItemRow>
                                  )
                                )}
                              </NavItemAccordionContent>
                            </NavItemAccordionItem>
                            <NavItemAccordionItem value="databases">
                              <NavItemRow depth={2}>
                                {/* <NavItemAccordionIconTrigger />
                                                                <NavItemText>
                                                                    <Square
                                                                        shouldCenterContent
                                                                        css={{
                                                                            p:
                                                                                "$1",
                                                                        }}
                                                                    >
                                                                        <NavItemIcon
                                                                            icon={
                                                                                faDatabase
                                                                            }
                                                                        />
                                                                    </Square>
                                                                    Databases
                                                                </NavItemText> */}
                                <NavItemAccordionWideTrigger
                                  icon={
                                    <Square shouldCenterContent>
                                      <NavItemIcon icon={faDatabase} />
                                    </Square>
                                  }
                                >
                                  Databases
                                </NavItemAccordionWideTrigger>
                              </NavItemRow>
                              <NavItemAccordionContent>
                                <NavItemAccordionRoot
                                  value={
                                    expandedNavItemsWorkspaceGroupDatabases
                                  }
                                  onValueChange={
                                    setExpandedNavItemsWorkspaceGroupDatabases
                                  }
                                >
                                  {workspaceGroup.databases.map((database) => (
                                    <NavItemAccordionItem value={database.id}>
                                      <NavItemRow depth={3}>
                                        <NavItemAccordionIconTrigger />
                                        <NavItemLink>
                                          <Square shouldCenterContent>
                                            <NavItemIcon icon={faDatabase} />
                                          </Square>
                                          {database.name}
                                        </NavItemLink>
                                      </NavItemRow>
                                      <NavItemAccordionContent>
                                        <NavItemAccordionRoot
                                          value={
                                            expandedNavItemsWorkspaceGroupDatabaseTables
                                          }
                                          onValueChange={
                                            setExpandedNavItemsWorkspaceGroupDatabaseTables
                                          }
                                        >
                                          {database.tables.map((table) => (
                                            <NavItemAccordionItem
                                              value={table.id}
                                            >
                                              <NavItemRow depth={4}>
                                                <NavItemAccordionIconTrigger />
                                                <NavItemLink>
                                                  <Square shouldCenterContent>
                                                    <NavItemIcon
                                                      icon={faTable}
                                                    />
                                                  </Square>
                                                  {table.name}
                                                </NavItemLink>
                                              </NavItemRow>
                                              <NavItemAccordionContent>
                                                {table.columns.map((column) => (
                                                  <NavItemRow depth={4}>
                                                    <NavItemLink>
                                                      <Square
                                                        shouldCenterContent
                                                        css={{
                                                          // give status a container with $1 padding to mimic icon container spacing

                                                          // Use margin in place of what would be a 32x32 icon button
                                                          ml: "$7",
                                                        }}
                                                      >
                                                        <NavItemIcon
                                                          icon={faHashtag}
                                                        />
                                                      </Square>
                                                      {column.name}
                                                    </NavItemLink>
                                                  </NavItemRow>
                                                ))}
                                              </NavItemAccordionContent>
                                            </NavItemAccordionItem>
                                          ))}
                                        </NavItemAccordionRoot>
                                      </NavItemAccordionContent>
                                    </NavItemAccordionItem>
                                  ))}
                                </NavItemAccordionRoot>
                              </NavItemAccordionContent>
                            </NavItemAccordionItem>
                          </NavItemAccordionRoot>
                        </NavItemAccordionContent>
                      </NavItemAccordionItem>
                    )
                  )}
                </NavItemAccordionRoot>
              </NavSectionAccordionContent>
            </NavSectionAccordion>
            <NavSectionAccordion value="query">
              <NavSectionAccordionHeader>
                <NavSectionAccordionTrigger
                  icon={
                    <Square shouldCenterContent>
                      <FontAwesomeIcon icon={faPrintSearch} />
                    </Square>
                  }
                >
                  Query
                </NavSectionAccordionTrigger>
              </NavSectionAccordionHeader>

              <NavSectionAccordionContent
                shouldAnimate={shouldAnimateNavigationAccordion}
              >
                <NavItemRow>
                  <NavItemLink>SQL Editor</NavItemLink>
                </NavItemRow>
              </NavSectionAccordionContent>
            </NavSectionAccordion>
          </Nav>
        </div>

        {props.children}

        <ContactUsDrawer />
      </div>
    </ContactUsProvider>
  );
};
