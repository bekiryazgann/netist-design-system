"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
const tslib_1 = require("tslib");
const Primitives = tslib_1.__importStar(require("@radix-ui/react-avatar"));
const class_variance_authority_1 = require("class-variance-authority");
const React = tslib_1.__importStar(require("react"));
const clx_1 = require("../../utils/clx");
const avatarVariants = (0, class_variance_authority_1.cva)("border-ui-border-strong flex shrink-0 items-center justify-center overflow-hidden border", {
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
const innerVariants = (0, class_variance_authority_1.cva)("aspect-square object-cover object-center", {
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
    return (React.createElement(Primitives.Root, { ref: ref, ...props, className: (0, clx_1.clx)(avatarVariants({ variant, size }), className) },
        src && (React.createElement(Primitives.Image, { src: src, className: innerVariants({ variant, size }) })),
        React.createElement(Primitives.Fallback, { className: (0, clx_1.clx)(innerVariants({ variant, size }), "bg-ui-bg-component text-ui-fg-subtle pointer-events-none flex select-none items-center justify-center") }, fallback)));
});
exports.Avatar = Avatar;
Avatar.displayName = "Avatar";
//# sourceMappingURL=avatar.js.map