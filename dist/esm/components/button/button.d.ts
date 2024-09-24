import { type VariantProps } from "class-variance-authority";
import * as React from "react";
declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "transparent" | "danger" | null | undefined;
    size?: "base" | "large" | "xlarge" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface ButtonProps extends React.ComponentPropsWithoutRef<"button">, VariantProps<typeof buttonVariants> {
    isLoading?: boolean;
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
