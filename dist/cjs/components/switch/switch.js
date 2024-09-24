"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const tslib_1 = require("tslib");
const Primitives = tslib_1.__importStar(require("@radix-ui/react-switch"));
const class_variance_authority_1 = require("class-variance-authority");
const React = tslib_1.__importStar(require("react"));
const clx_1 = require("../../utils/clx");
const switchVariants = (0, class_variance_authority_1.cva)("bg-ui-bg-switch-off hover:bg-ui-bg-switch-off-hover data-[state=unchecked]:hover:after:bg-switch-off-hover-gradient before:shadow-details-switch-background focus:shadow-details-switch-background-focus data-[state=checked]:bg-ui-bg-interactive disabled:!bg-ui-bg-disabled group relative inline-flex items-center rounded-full outline-none transition-all before:absolute before:inset-0 before:rounded-full before:content-[''] after:absolute after:inset-0 after:rounded-full after:content-[''] disabled:cursor-not-allowed", {
    variants: {
        size: {
            small: "h-[16px] w-[28px]",
            base: "h-[18px] w-[32px]",
        },
    },
    defaultVariants: {
        size: "base",
    },
});
const thumbVariants = (0, class_variance_authority_1.cva)("bg-ui-fg-on-color shadow-details-switch-handle group-disabled:bg-ui-fg-disabled pointer-events-none h-[14px] w-[14px] rounded-full transition-all group-disabled:shadow-none relative before:absolute before:content-[''] before:block before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-ui-bg-switch-off hover:before:bg-ui-bg-switch-off-hover data-[state=unchecked]:before:hover:after:bg-switch-off-hover-gradient data-[state=checked]:before:bg-ui-bg-interactive", {
    variants: {
        size: {
            small: "h-[12px] w-[12px] data-[state=checked]:translate-x-3.5 data-[state=unchecked]:translate-x-0.5 before:w-1 before:h-1",
            base: "h-[14px] w-[14px] transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5 before:w-1 before:h-1",
        },
    },
    defaultVariants: {
        size: "base",
    },
});
const Switch = React.forwardRef(({ className, size = "base", ...props }, ref) => (React.createElement(Primitives.Root, { className: (0, clx_1.clx)(switchVariants({ size }), className), ...props, ref: ref },
    React.createElement(Primitives.Thumb, { className: (0, clx_1.clx)(thumbVariants({ size })) }))));
exports.Switch = Switch;
Switch.displayName = "Switch";
//# sourceMappingURL=switch.js.map