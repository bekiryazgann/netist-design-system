"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const tslib_1 = require("tslib");
const Primitives = tslib_1.__importStar(require("@radix-ui/react-label"));
const class_variance_authority_1 = require("class-variance-authority");
const React = tslib_1.__importStar(require("react"));
const clx_1 = require("../../utils/clx");
const labelVariants = (0, class_variance_authority_1.cva)("font-sans", {
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
    return (React.createElement(Primitives.Root, { ref: ref, className: (0, clx_1.clx)(labelVariants({ size, weight }), className), ...props }));
});
exports.Label = Label;
Label.displayName = "Label";
//# sourceMappingURL=label.js.map