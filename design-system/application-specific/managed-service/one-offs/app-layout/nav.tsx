import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Accordion from "@radix-ui/react-accordion";
import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { cx, isArray, PartialKey } from "../../../../core/utils";
import { Button, IconButton } from "../../../../react/button";
import { InlineFlex, Square } from "../../../../react/layout";
import { VariantProps } from "../../../../react/react-stitches";
import {
  createContext,
  useControllableState,
} from "../../../../react/react-utils";
import { Link, text } from "../../../../react/text";
import {
  navItemAccordion,
  navItemAccordionContent,
  navItemAccordionIconTrigger,
  navItemAccordionWideTrigger,
  navItemIcon,
  navItemLink,
  navItemList,
  navItemRow,
  navItemText,
  navRoot,
  navSectionAccordion,
  navSectionAccordionContent,
  navSectionAccordionHeader,
} from "./nav.styles";

type AccordionRootProps = React.ComponentProps<typeof Accordion.Root>;

const [
  NavSectionAccordionRootContextProvider,
  useNavSectionAccordionRootContext,
] = createContext<{
  value: AccordionRootProps["value"];
  isNavSectionOpen(sectionValue: string): boolean;
}>({
  name: "NavSectionAccordionRootContext",
});

export const Nav = React.forwardRef<
  React.ElementRef<"nav">,
  React.ComponentProps<typeof Accordion.Root>
>((props, forwardedRef) => {
  const {
    children,
    className,
    value: valueProp,
    onValueChange: onValueChangeProp,
    defaultValue: defaultValueProp = [],
    type = "single",
    ...rest
  } = props;
  const [value, setValue] = useControllableState<
    React.ComponentProps<typeof Accordion.Root>["value"]
  >({
    defaultValue: defaultValueProp,
    value: valueProp,
    onChange: onValueChangeProp,
    // shouldUpdate: (prev, next) => prev !== next,
  });

  const isNavSectionOpen = (sectionValue: string) =>
    isArray(value) ? value.includes(sectionValue) : value === sectionValue;

  return (
    <NavSectionAccordionRootContextProvider value={{ value, isNavSectionOpen }}>
      <Accordion.Root
        asChild
        type={type}
        collapsible
        value={value}
        onValueChange={setValue}
      >
        <nav ref={forwardedRef} className={cx("sui-nav", navRoot(), className)}>
          {children}
        </nav>
      </Accordion.Root>
    </NavSectionAccordionRootContextProvider>
  );
});

const [
  NavSectionAccordionItemContextProvider,
  useNavSectionAccordionItemContext,
] = createContext<{
  isOpen: boolean;
}>({
  name: "NavSectionAccordionItemContext",
});

export const NavSectionAccordion = React.forwardRef<
  React.ElementRef<typeof Accordion.Item>,
  React.ComponentProps<typeof Accordion.Item>
>((props, forwardedRef) => {
  const { children, className, value, ...rest } = props;

  const { isNavSectionOpen } = useNavSectionAccordionRootContext();

  return (
    <NavSectionAccordionItemContextProvider
      value={{ isOpen: isNavSectionOpen(value) }}
    >
      <Accordion.Item
        ref={forwardedRef}
        value={value}
        className={cx("sui-nav__section", navSectionAccordion(), className)}
        {...rest}
      >
        {children}
      </Accordion.Item>
    </NavSectionAccordionItemContextProvider>
  );
});

export const NavSectionAccordionHeader = (props) => {
  const { className, children, isActive } = props;
  return (
    <Accordion.Header
      className={cx(
        "sui-nav__section-header",
        // navSectionAccordionHeader({ isActive, depth }),
        navSectionAccordionHeader({ isActive }),
        className
      )}
    >
      {children}
    </Accordion.Header>
  );
};

export const NavSectionAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Accordion.Trigger>,
  // React.ComponentProps<typeof Button> &
  React.PropsWithChildren<{
    icon: React.ReactNode;
  }>
>((props) => {
  const { icon, children } = props;

  const { isOpen } = useNavSectionAccordionItemContext();

  return (
    <Accordion.Trigger asChild>
      <Button
        // aria-label={isOpen ? "Collapse" : "Expand"}
        // title={isOpen ? "Collapse" : "Expand"}
        size={1}
        variant="ghost-secondary"
        css={{ flexGrow: "1", justifyContent: "start" }}
      >
        {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        {/* <FaChevronDown /> */}
        <InlineFlex gap={1}>
          {icon}

          <h2
            className={text({
              // variant: "label-2",
              weight: "bold",
              uppercase: true,
              css: {
                // pt: "0.125rem",
                fontSize: "11px",
              },
            })}
          >
            {children}
          </h2>
        </InlineFlex>
      </Button>
    </Accordion.Trigger>
  );
});

export const NavSectionAccordionContent = React.forwardRef<
  React.ElementRef<typeof Accordion.Content>,
  React.ComponentProps<typeof Accordion.Content> &
    VariantProps<typeof navSectionAccordionContent>
>((props) => {
  const { className, children, shouldAnimate, ...rest } = props;
  return (
    <Accordion.Content
      className={cx(
        "sui-nav__section-content",
        navSectionAccordionContent({ shouldAnimate }),
        className
      )}
    >
      {children}
    </Accordion.Content>
  );
});

const [NavItemAccordionItemContextProvider, useNavItemAccordionItemContext] =
  createContext<{ isOpen: boolean }>({
    name: "NavItemAccordionItemContext",
  });

export const NavItemAccordionItem = React.forwardRef<
  React.ElementRef<typeof Accordion.Item>,
  React.ComponentProps<typeof Accordion.Item>
>((props, forwardedRef) => {
  const { children, className, ...rest } = props;

  const { value } = useNavItemAccordionRootContext();

  const isOpen = React.useMemo(
    () => value.includes(props.value),
    [value, props.value]
  );

  return (
    <NavItemAccordionItemContextProvider value={{ isOpen }}>
      <Accordion.Item
        ref={forwardedRef}
        className={cx(
          "sui-collapsible-nav-item",
          navItemAccordion(),
          className
        )}
        {...rest}
      >
        {children}
      </Accordion.Item>
    </NavItemAccordionItemContextProvider>
  );
});

type NavItemAccordionWideTriggerProps = Pick<
  React.ComponentProps<typeof Button>,
  "children" | "className"
> & {
  icon: React.ReactNode;
  isActive?: boolean;
};

export const NavItemAccordionWideTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  NavItemAccordionWideTriggerProps
>((props, ref) => {
  const { isOpen } = useNavItemAccordionItemContext();
  const { isActive, icon, children, className } = props;

  return (
    <Accordion.Trigger asChild>
      <Button
        ref={ref}
        aria-label={isOpen ? "Collapse" : "Expand"}
        title={isOpen ? "Collapse" : "Expand"}
        size={1}
        variant="ghost-secondary"
        className={cx(
          "sui-nav__item-accordion-trigger",
          "sui-nav__item-accordion-wide-trigger",
          navItemAccordionWideTrigger(),
          className
        )}
      >
        {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        {/* <InlineFlex gap={1} align="center"> */}
        {/* <Square
            css={{
              p: "$1",
              color: isActive ? "$purple900" : undefined,
            }}
          > */}
        {icon}
        {/* </Square> */}

        <NavItemText>{children}</NavItemText>
        {/* </InlineFlex> */}
      </Button>
    </Accordion.Trigger>
  );
});

type NavItemAccordionIconTriggerProps = PartialKey<
  React.ComponentProps<typeof IconButton>,
  "aria-label"
>;
export const NavItemAccordionIconTrigger = React.forwardRef<
  React.ElementRef<typeof IconButton>,
  NavItemAccordionIconTriggerProps
>((props, forwardedRef) => {
  const { isOpen } = useNavItemAccordionItemContext();

  const {
    className,
    children = isOpen ? <FaChevronDown /> : <FaChevronRight />,
    ...rest
  } = props;

  return (
    <Accordion.Trigger asChild>
      <IconButton
        ref={forwardedRef}
        className={cx(
          "sui-nav__item-accordion-trigger",
          "sui-nav__item-accordion-icon-trigger",
          navItemAccordionIconTrigger(),
          className
        )}
        aria-label={isOpen ? "Collapse" : "Expand"}
        title={isOpen ? "Collapse" : "Expand"}
        variant="ghost-secondary"
        size={1}
        {...rest}
      >
        {children}
      </IconButton>
    </Accordion.Trigger>
  );
});

export const NavItemAccordionContent = React.forwardRef<
  React.ElementRef<typeof Accordion.Content>,
  React.ComponentProps<typeof Accordion.Content>
>((props, forwardedRef) => {
  const { className, children, ...rest } = props;
  return (
    <Accordion.Content
      className={cx(
        "sui-nav__item-accordion-content",
        navItemAccordionContent(),
        className
      )}
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </Accordion.Content>
  );
});

export const NavItemList = React.forwardRef<
  React.ElementRef<"div">,
  NavItemListProps
>((props, forwardedRef) => {
  const { children, className, ...rest } = props;

  return (
    <div
      ref={forwardedRef}
      className={cx("sui-nav__item-list", navItemList(), className)}
      {...rest}
    >
      {children}
    </div>
  );
});

const [NavItemAccordionRootContextProvider, useNavItemAccordionRootContext] =
  createContext<{
    value: Array<string>;
    setValue: React.SetStateAction<Dispatch<Array<string>>>;
  }>({
    name: "NavItemAccordionRootContext",
  });

export const NavItemAccordionRoot = React.forwardRef<
  React.ElementRef<typeof NavItemList>,
  PartialKey<Accordion.AccordionMultipleProps, "type">
>((props, forwardedRef) => {
  const {
    value: valueProp,
    onValueChange: onValueChangeProp,
    defaultValue: defaultValueProp,
    className,
    children,
    ...rest
  } = props;

  const [value, setValue] = useControllableState<Array<string>>({
    defaultValue: defaultValueProp,
    value: valueProp,
    onChange: onValueChangeProp,
    // shouldUpdate: (prev, next) => prev !== next,
  });

  return (
    <NavItemAccordionRootContextProvider value={{ value, setValue }}>
      <Accordion.Root
        asChild
        value={value}
        onValueChange={setValue}
        type="multiple"
      >
        <NavItemList
          ref={forwardedRef}
          className={cx(
            "sui-nav__item-accordion-list",
            navItemList(),
            className
          )}
          {...rest}
        >
          {children}
        </NavItemList>
      </Accordion.Root>
    </NavItemAccordionRootContextProvider>
  );
});

export const NavItemRow = React.forwardRef<
  React.ElementRef<typeof Accordion.Header>,
  React.ComponentProps<typeof Accordion.Header> &
    VariantProps<typeof navItemRow>
>((props, forwardedRef) => {
  const { className, children, isActive, depth, ...rest } = props;
  return (
    <Accordion.Header
      ref={forwardedRef}
      className={cx(
        "sui-nav__item-row",
        className,
        navItemRow({ isActive, depth })
      )}
      {...rest}
    >
      {children}
    </Accordion.Header>
  );
});

export const NavItemIcon = React.forwardRef<
  React.ElementRef<typeof FontAwesomeIcon>,
  React.ComponentProps<typeof FontAwesomeIcon>
>((props, forwardedRef) => {
  const { className, icon, ...rest } = props;

  return (
    <FontAwesomeIcon
      ref={forwardedRef}
      className={cx("sui-nav__item-icon", navItemIcon(), className)}
      icon={icon}
      {...rest}
    />
  );
});

interface NavItemLinkProps extends React.ComponentProps<typeof Link> {
  href?: React.ComponentProps<typeof Link>["href"];
  isActive?: boolean;
}

export const NavItemLink = React.forwardRef<
  React.ElementRef<"a" | typeof NavItemText>,
  NavItemLinkProps
>((props, forwardedRef) => {
  const {
    children,
    className,
    href = "javascript:;",
    isActive,
    ...rest
  } = props;

  if (isActive) {
    return (
      <NavItemText ref={forwardedRef} className={className}>
        {children}
      </NavItemText>
    );
  }

  return (
    <a
      ref={forwardedRef}
      className={cx("sui-nav__item-link", className, navItemLink())}
      href={href}
      {...rest}
    >
      {children}
    </a>
  );
});

export const NavItemText = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentProps<"span">
>((props, forwardedRef) => {
  const { children, className, ...rest } = props;

  return (
    <span
      ref={forwardedRef}
      className={cx("sui-nav__item-text", className, navItemText())}
      {...rest}
    >
      {children}
    </span>
  );
});
