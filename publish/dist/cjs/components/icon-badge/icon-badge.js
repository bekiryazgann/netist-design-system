"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconBadge = void 0;
const tslib_1 = require("tslib");
const react_slot_1 = require("@radix-ui/react-slot");
const class_variance_authority_1 = require("class-variance-authority");
const React = tslib_1.__importStar(require("react"));
const badge_1 = require("../badge");
const clx_1 = require("../../utils/clx");
const iconBadgeVariants = (0, class_variance_authority_1.cva)("flex items-center justify-center overflow-hidden rounded-md border", {
    variants: {
        size: {
            base: "h-6 w-6",
            large: "h-7 w-7",
        },
    },
});
const IconBadge = React.forwardRef(({ children, className, color = "grey", size = "base", asChild = false, ...props }, ref) => {
    const Component = asChild ? react_slot_1.Slot : "span";
    return (React.createElement(Component, { ref: ref, className: (0, clx_1.clx)((0, badge_1.badgeColorVariants)({ color }), iconBadgeVariants({ size }), className), ...props }, children));
});
exports.IconBadge = IconBadge;
IconBadge.displayName = "IconBadge";
//# sourceMappingURL=icon-badge.js.map