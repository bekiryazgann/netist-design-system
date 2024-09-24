"use client";
import * as Primitives from "@radix-ui/react-avatar";
import { cva } from "class-variance-authority";
import * as React from "react";
import { clx } from "../../utils/clx";
const avatarVariants = cva("border-ui-border-strong flex shrink-0 items-center justify-center overflow-hidden border", {
    variants: {
        variant: {
            squared: "rounded-lg",
            rounded: "rounded-full",
        },
        size: {
            base: "h-8 w-8",
            large: "h-10 w-10",
            xlarge: "h-14 w-14"
        },
    },
    defaultVariants: {
        variant: "rounded",
        size: "base",
    },
});
const innerVariants = cva("aspect-square object-cover object-center", {
    variants: {
        variant: {
            squared: "rounded-lg",
            rounded: "rounded-full",
        },
        size: {
            base: "txt-compact-small-plus h-6 w-6",
            large: "txt-compact-medium-plus h-8 w-8",
            xlarge: "txt-compact-large-plus h-12 w-12"
        },
    },
    defaultVariants: {
        variant: "rounded",
        size: "base",
    },
});
const Avatar = React.forwardRef(({ src, fallback, variant = "rounded", size = "base", className, ...props }, ref) => {
    return (React.createElement(Primitives.Root, { ref: ref, ...props, className: clx(avatarVariants({ variant, size }), className) },
        src && (React.createElement(Primitives.Image, { src: src, className: innerVariants({ variant, size }) })),
        React.createElement(Primitives.Fallback, { className: clx(innerVariants({ variant, size }), "bg-ui-bg-component text-ui-fg-subtle pointer-events-none flex select-none items-center justify-center") }, fallback)));
});
Avatar.displayName = "Avatar";
export { Avatar };
//# sourceMappingURL=avatar.js.map