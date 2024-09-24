import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";
import { badgeColorVariants } from "../badge";
import { clx } from "../../utils/clx";
const iconBadgeVariants = cva("flex items-center justify-center overflow-hidden rounded-md border", {
    variants: {
        size: {
            base: "h-6 w-6",
            large: "h-7 w-7",
        },
    },
});
const IconBadge = React.forwardRef(({ children, className, color = "grey", size = "base", asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "span";
    return (React.createElement(Component, { ref: ref, className: clx(badgeColorVariants({ color }), iconBadgeVariants({ size }), className), ...props }, children));
});
IconBadge.displayName = "IconBadge";
export { IconBadge };
//# sourceMappingURL=icon-badge.js.map