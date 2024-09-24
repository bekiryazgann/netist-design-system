import * as Primitives from "@radix-ui/react-avatar";
import { type VariantProps } from "class-variance-authority";
import * as React from "react";
declare const avatarVariants: (props?: ({
    variant?: "squared" | "rounded" | null | undefined;
    size?: "base" | "large" | "xlarge" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface AvatarProps extends Omit<React.ComponentPropsWithoutRef<typeof Primitives.Root>, "asChild" | "children" | "size">, VariantProps<typeof avatarVariants> {
    src?: string;
    fallback: string;
}
declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLSpanElement>>;
export { Avatar };
