import * as React from "react";

import { __DEV__, cx, filterUndefined } from "../../core/utils";
import { css } from "../react-stitches";
import { getValidChildren } from "../react-utils";

export interface InputGroupProps extends React.ComponentProps<"div"> {}

const inputGroup = css({
    width: "100%",
    display: "flex",
    position: "relative",
    color: "$neutral700",
});

export const InputGroup = React.forwardRef<
    React.ElementRef<"div">,
    InputGroupProps
>((props, ref) => {
    const { children, className, ...rest } = props;

    const inputStyles: InputGroupProps = {};

    const validChildren = getValidChildren(children);

    // const input: any = styles.field;

    validChildren.forEach((child: any) => {
        console.log(child.type.id);
        // if (!styles) return;
        if (child.type.id === "InputLeftElement") {
            inputStyles.paddingLeft = "$8";
        }
        if (child.type.id === "InputRightElement") {
            inputStyles.paddingRight = "$8";
        }
        if (child.type.id === "InputRightAddon") {
            inputStyles.borderEndRadius = 0;
        }
        if (child.type.id === "InputLeftAddon") {
            inputStyles.borderStartRadius = 0;
        }
    });

    const clones = validChildren.map((child: any) => {
        /**
         * Make it possible to override the size and variant from `Input`
         */

        const theming = filterUndefined({
            size: child.props?.size || props.size,
            variant: child.props?.variant || props.variant,
            css: inputStyles,
        });

        return child.type?.id !== "Input"
            ? React.cloneElement(child, theming)
            : React.cloneElement(
                  child,
                  Object.assign(theming, inputStyles, child.props)
              );
    });

    return (
        <div
            className={cx(
                "sui-input__group",
                inputGroup({
                    css: {},
                }),
                className
            )}
            ref={ref}
            {...rest}
        >
            {clones}
        </div>
    );
});

if (__DEV__) {
    InputGroup.displayName = "InputGroup";
}
