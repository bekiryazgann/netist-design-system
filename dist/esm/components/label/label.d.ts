import { type VariantProps } from "class-variance-authority";
import * as React from "react";
declare const labelVariants: (props?: ({
    size?: "base" | "large" | "small" | "xsmall" | null | undefined;
    weight?: "regular" | "plus" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface LabelProps extends React.ComponentPropsWithoutRef<"label">, VariantProps<typeof labelVariants> {
}
declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;
export { Label };
