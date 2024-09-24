import { VariantProps } from "class-variance-authority";
import * as React from "react";
declare const iconButtonVariants: (props?: ({
    variant?: "primary" | "transparent" | null | undefined;
    size?: "base" | "large" | "xlarge" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface IconButtonProps extends React.ComponentPropsWithoutRef<"button">, VariantProps<typeof iconButtonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
}
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { IconButton, iconButtonVariants };
