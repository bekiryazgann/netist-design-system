import { type VariantProps } from "class-variance-authority";
import * as React from "react";
import { badgeColorVariants } from "../badge";
declare const iconBadgeVariants: (props?: ({
    size?: "base" | "large" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface IconBadgeProps extends Omit<React.ComponentPropsWithoutRef<"span">, "color">, VariantProps<typeof badgeColorVariants>, VariantProps<typeof iconBadgeVariants> {
    asChild?: boolean;
}
declare const IconBadge: React.ForwardRefExoticComponent<IconBadgeProps & React.RefAttributes<HTMLSpanElement>>;
export { IconBadge };
