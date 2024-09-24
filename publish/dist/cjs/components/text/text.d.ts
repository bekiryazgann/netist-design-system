import { VariantProps } from "class-variance-authority";
import * as React from "react";
declare const textVariants: (props?: ({
    size?: "base" | "large" | "xlarge" | "small" | "xsmall" | null | undefined;
    weight?: "regular" | "plus" | null | undefined;
    family?: "sans" | "mono" | null | undefined;
    leading?: "normal" | "compact" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface TextProps extends React.ComponentPropsWithoutRef<"p">, VariantProps<typeof textVariants> {
    asChild?: boolean;
    as?: "p" | "span" | "div";
}
declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLParagraphElement>>;
export { Text };
