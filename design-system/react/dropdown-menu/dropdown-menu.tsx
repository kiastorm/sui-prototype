import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React from "react";
import { FaCheck } from "react-icons/fa";

import { Box, Flex } from "../layout";
import { itemCss, labelCss, menuCss, separatorCss } from "../menu";
import { panelStyles } from "../panel";
import { CSS, css, keyframes, styled } from "../react-stitches";

const slideDown = keyframes({
    "0%": { opacity: 0, transform: "translateY(-10px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideUp = keyframes({
    "0%": { opacity: 0, transform: "translateY(10px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
});

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const dropdownMenuContent = css(menuCss, panelStyles, {
    animationDuration: "0.6s",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    '&[data-side="top"]': { animationName: slideUp },
    '&[data-side="bottom"]': { animationName: slideDown },
});
export const DropdownMenuSeparator = styled(
    DropdownMenuPrimitive.Separator,
    separatorCss
);
export const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, itemCss);

const StyledDropdownMenuRadioItem = styled(
    DropdownMenuPrimitive.RadioItem,
    itemCss
);

type DialogMenuRadioItemPrimitiveProps = React.ComponentProps<
    typeof DropdownMenuPrimitive.RadioItem
>;
type DialogMenuRadioItemProps = DialogMenuRadioItemPrimitiveProps & {
    css?: CSS;
};

export const DropdownMenuContent = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Content>,
    React.ComponentProps<typeof DropdownMenuPrimitive.Content>
>((props, forwardedRef) => {
    const { sideOffset = 4, ...rest } = props;
    return (
        <DropdownMenuPrimitive.Content
            className={dropdownMenuContent()}
            sideOffset={sideOffset}
            {...rest}
            ref={forwardedRef}
        />
    );
});

export const DropdownMenuRadioItem = React.forwardRef<
    React.ElementRef<typeof StyledDropdownMenuRadioItem>,
    DialogMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
    <StyledDropdownMenuRadioItem {...props} ref={forwardedRef}>
        <Box as="span" css={{ position: "absolute", left: "$1" }}>
            <DropdownMenuPrimitive.ItemIndicator>
                <Flex
                    css={{
                        width: "$3",
                        height: "$3",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        css={{
                            width: "$1",
                            height: "$1",
                            backgroundColor: "currentColor",
                            borderRadius: "$round",
                        }}
                    />
                </Flex>
            </DropdownMenuPrimitive.ItemIndicator>
        </Box>
        {children}
    </StyledDropdownMenuRadioItem>
));

const StyledDropdownMenuCheckboxItem = styled(
    DropdownMenuPrimitive.CheckboxItem,
    itemCss
);

type DialogMenuCheckboxItemPrimitiveProps = React.ComponentProps<
    typeof DropdownMenuPrimitive.CheckboxItem
>;
type DialogMenuCheckboxItemProps = DialogMenuCheckboxItemPrimitiveProps & {
    css?: CSS;
};

export const DropdownMenuCheckboxItem = React.forwardRef<
    React.ElementRef<typeof StyledDropdownMenuCheckboxItem>,
    DialogMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
    <StyledDropdownMenuCheckboxItem {...props} ref={forwardedRef}>
        <Box as="span" css={{ position: "absolute", left: "$1" }}>
            <DropdownMenuPrimitive.ItemIndicator>
                <FaCheck />
            </DropdownMenuPrimitive.ItemIndicator>
        </Box>
        {children}
    </StyledDropdownMenuCheckboxItem>
));

export const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, labelCss);
export const DropdownMenuRadioGroup = styled(
    DropdownMenuPrimitive.RadioGroup,
    {}
);
export const DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {});
