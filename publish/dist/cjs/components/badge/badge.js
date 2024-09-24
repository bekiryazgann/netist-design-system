"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badgeColorVariants = exports.Badge = void 0;
const tslib_1 = require("tslib");
const react_slot_1 = require("@radix-ui/react-slot");
const class_variance_authority_1 = require("class-variance-authority");
const React = tslib_1.__importStar(require("react"));
const clx_1 = require("../../utils/clx");
const badgeColorVariants = (0, class_variance_authority_1.cva)("", {
    variants: {
        color: {
            green: "bg-ui-tag-green-bg text-ui-tag-green-text [&_svg]:text-ui-tag-green-icon border-ui-tag-green-border",
            red: "bg-ui-tag-red-bg text-ui-tag-red-text [&_svg]:text-ui-tag-red-icon border-ui-tag-red-border",
            blue: "bg-ui-tag-blue-bg text-ui-tag-blue-text [&_svg]:text-ui-tag-blue-icon border-ui-tag-blue-border",
            orange: "bg-ui-tag-orange-bg text-ui-tag-orange-text [&_svg]:text-ui-tag-orange-icon border-ui-tag-orange-border",
            grey: "bg-ui-tag-neutral-bg text-ui-tag-neutral-text [&_svg]:text-ui-tag-neutral-icon border-ui-tag-neutral-border",
            purple: "bg-ui-tag-purple-bg text-ui-tag-purple-text [&_svg]:text-ui-tag-purple-icon border-ui-tag-purple-border",
        },
    },
    defaultVariants: {
        color: "grey",
    },
});
exports.badgeColorVariants = badgeColorVariants;
const badgeSizeVariants = (0, class_variance_authority_1.cva)("inline-flex items-center gap-x-0.5 border", {
    variants: {
        size: {
            small: "txt-compact-xsmall-plus px-1.5",
            base: "txt-compact-small-plus px-2 py-0.5",
            large: "txt-compact-medium-plus px-2.5 py-1",
        },
        rounded: {
            base: "rounded-full",
            medium: "rounded-md",
        },
    },
    defaultVariants: {
        size: "base",
        rounded: "base",
    },
});
const Badge = React.forwardRef(({ className, size = "base", rounded = "base", color = "grey", asChild = false, ...props }, ref) => {
    const Component = asChild ? react_slot_1.Slot : "span";
    return (React.createElement(Component, { ref: ref, className: (0, clx_1.clx)(badgeColorVariants({ color }), badgeSizeVariants({ size, rounded }), className), ...props }));
});
exports.Badge = Badge;
Badge.displayName = "Badge";
//# sourceMappingURL=badge.js.map