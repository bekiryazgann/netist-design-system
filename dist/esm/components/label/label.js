"use client";
import * as Primitives from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import * as React from "react";
import { clx } from "../../utils/clx";
const labelVariants = cva("font-sans", {
    variants: {
        size: {
            xsmall: "txt-compact-xsmall",
            small: "txt-compact-small",
            base: "txt-compact-medium",
            large: "txt-compact-large",
        },
        weight: {
            regular: "font-normal",
            plus: "font-medium",
        },
    },
    defaultVariants: {
        size: "base",
        weight: "regular",
    },
});
const Label = React.forwardRef(({ className, size = "base", weight = "regular", ...props }, ref) => {
    return (React.createElement(Primitives.Root, { ref: ref, className: clx(labelVariants({ size, weight }), className), ...props }));
});
Label.displayName = "Label";
export { Label };
//# sourceMappingURL=label.js.map