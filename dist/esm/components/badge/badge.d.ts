import { VariantProps } from "class-variance-authority";
import * as React from "react";
declare const badgeColorVariants: (props?: ({
    color?: "green" | "red" | "blue" | "orange" | "grey" | "purple" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const badgeSizeVariants: (props?: ({
    size?: "base" | "large" | "small" | null | undefined;
    rounded?: "base" | "medium" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">, VariantProps<typeof badgeSizeVariants>, VariantProps<typeof badgeColorVariants> {
    asChild?: boolean;
}
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
export { Badge, badgeColorVariants };
