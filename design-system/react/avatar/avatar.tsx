import * as AvatarPrimitive from "@radix-ui/react-avatar";
import React from "react";

import { Box } from "../layout";
import { CSS, styled, VariantProps } from "../react-stitches";
import { Status } from "../status";

const StyledAvatar = styled(AvatarPrimitive.Root, {
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    overflow: "hidden",
    userSelect: "none",
    boxSizing: "border-box",
    display: "flex",
    flexShrink: 0,
    position: "relative",
    border: "none",
    fontFamily: "inherit",
    lineHeight: "1",
    margin: "0",
    outline: "none",
    padding: "0",
    fontWeight: 500,
    color: "$hiContrast",

    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: "inherit",
        boxShadow: "inset 0px 0px 1px rgba(0, 0, 0, 0.12)",
    },

    variants: {
        size: {
            "1": {
                width: "$5",
                height: "$5",
            },
            "2": {
                width: "$6",
                height: "$6",
            },
            "3": {
                width: "$7",
                height: "$7",
            },
            "4": {
                width: "$8",
                height: "$8",
            },
            "5": {
                width: "$9",
                height: "$9",
            },
        },
        variant: {
            purple: {
                backgroundColor: "$purple200",
                color: "$purple900",
            },
        },
        shape: {
            circle: {
                borderRadius: "50%",
            },
        },
    },
    defaultVariants: {
        size: "2",
        variant: "purple",
        shape: "circle",
    },
});

const StyledAvatarImage = styled(AvatarPrimitive.Image, {
    display: "flex",
    objectFit: "cover",
    boxSizing: "border-box",
    height: "100%",
    verticalAlign: "middle",
    width: "100%",
});

const StyledAvatarFallback = styled(AvatarPrimitive.Fallback, {
    textTransform: "uppercase",
    fontWeight: "bold",

    variants: {
        size: {
            "1": {
                fontSize: "label-2",
                // lineHeight: "15px",
            },
            "2": {
                fontSize: "$label-2",
            },
            "3": {
                fontSize: "$label-2",
            },
            "4": {
                fontSize: "$label-2",
            },
            "5": {
                fontSize: "$label-2",
            },
        },
    },
    defaultVariants: {
        size: "2",
    },
});

export const AvatarNestedItem = styled("div", {
    boxShadow: "0 0 0 2px $colors$loContrast",
    borderRadius: "50%",
});

export const AvatarGroup = styled("div", {
    display: "flex",
    flexDirection: "row-reverse",
    [`& ${AvatarNestedItem}:nth-child(n+2)`]: {
        marginRight: "-$1",
    },
});

type StatusVariants = React.ComponentProps<typeof Status>;
type StatusColors = Pick<StatusVariants, "variant">;

type AvatarVariants = VariantProps<typeof StyledAvatar>;
type AvatarPrimitiveProps = React.ComponentProps<typeof AvatarPrimitive.Root>;
type AvatarOwnProps = AvatarPrimitiveProps &
    AvatarVariants & {
        css?: CSS;
        alt?: string;
        src?: string;
        fallback?: React.ReactNode;
        status?: StatusColors["variant"];
    };

export const Avatar = React.forwardRef<
    React.ElementRef<typeof StyledAvatar>,
    AvatarOwnProps
>(
    (
        { alt, src, fallback, size, variant, shape, css, status, ...props },
        forwardedRef
    ) => {
        return (
            <Box
                css={{
                    ...css,
                    position: "relative",
                    height: "fit-content",
                    width: "fit-content",
                }}
            >
                <StyledAvatar
                    {...props}
                    ref={forwardedRef}
                    size={size}
                    variant={variant}
                    shape={shape}
                >
                    <StyledAvatarImage alt={alt} src={src} />
                    <StyledAvatarFallback size={size}>
                        {fallback}
                    </StyledAvatarFallback>
                </StyledAvatar>
                {status && (
                    <Box
                        css={{
                            position: "absolute",
                            bottom: "0",
                            right: "0",
                            boxShadow: "0 0 0 3px $colors$loContrast",
                            borderRadius: "$round",
                            mr: "-3px",
                            mb: "-3px",
                        }}
                    >
                        <Status
                            size={size && size > 2 ? "2" : "1"}
                            variant={status}
                        />
                    </Box>
                )}
            </Box>
        );
    }
);
