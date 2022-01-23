import { ThemingProps } from "@sui/utils";
import * as React from "react";
export interface FormLabelProps extends React.ComponentPropsWithoutRef<"label">, ThemingProps {
    /**
     * @type React.ReactElement
     */
    requiredIndicator?: React.ReactElement;
}
/**
 * Used to enhance the usability of form controls.
 *
 * It is used to inform users as to what information
 * is requested for a form field.
 *
 * ♿️ Accessibility: Every form field should have a form label.
 */
export declare const FormLabel: React.ForwardRefExoticComponent<FormLabelProps & React.RefAttributes<"label">>;
export interface RequiredIndicatorProps extends React.ComponentPropsWithoutRef<"span"> {
}
/**
 * Used to show a "required" text or an asterisks (*) to indicate that
 * a field is required.
 */
export declare const RequiredIndicator: React.ForwardRefExoticComponent<RequiredIndicatorProps & React.RefAttributes<"span">>;
//# sourceMappingURL=form-label.d.ts.map