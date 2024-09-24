"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconButtonVariants = exports.IconButton = void 0;
const tslib_1 = require("tslib");
const icons_1 = require("@medusajs/icons");
const react_slot_1 = require("@radix-ui/react-slot");
const class_variance_authority_1 = require("class-variance-authority");
const React = tslib_1.__importStar(require("react"));
const clx_1 = require("../../utils/clx");
const iconButtonVariants = (0, class_variance_authority_1.cva)((0, clx_1.clx)("transition-fg relative inline-flex w-fit items-center justify-center overflow-hidden rounded-md outline-none", "disabled:bg-ui-bg-disabled disabled:shadow-buttons-neutral disabled:text-ui-fg-disabled disabled:after:hidden"), {
    variants: {
        variant: {
            primary: (0, clx_1.clx)("shadow-buttons-neutral text-ui-fg-subtle bg-ui-button-neutral after:button-neutral-gradient", "hover:bg-ui-button-neutral-hover hover:after:button-neutral-hover-gradient", "active:bg-ui-button-neutral-pressed active:after:button-neutral-pressed-gradient", "focus:shadow-buttons-neutral-focus", "after:absolute after:inset-0 after:content-['']"),
            transparent: (0, clx_1.clx)("text-ui-fg-subtle bg-ui-button-transparent", "hover:bg-ui-button-transparent-hover", "active:bg-ui-button-transparent-pressed", "focus:shadow-buttons-neutral-focus focus:bg-ui-bg-base", "disabled:!bg-transparent disabled:!shadow-none"),
        },
        size: {
            base: "h-8 w-8 p-1.5",
            large: "h-10 w-10 p-2.5",
            xlarge: "h-12 w-12 p-3.5",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "base",
    },
});
exports.iconButtonVariants = iconButtonVariants;
const IconButton = React.forwardRef(({ variant = "primary", size = "base", asChild = false, className, children, isLoading = false, disabled, ...props }, ref) => {
    const Component = asChild ? react_slot_1.Slot : "button";
    /**
     * In the case of a button where asChild is true, and isLoading is true, we ensure that
     * only on element is passed as a child to the Slot component. This is because the Slot
     * component only accepts a single child.
     */
    const renderInner = () => {
        if (isLoading) {
            return (React.createElement("span", { className: "pointer-events-none" },
                React.createElement("div", { className: (0, clx_1.clx)("bg-ui-bg-disabled absolute inset-0 flex items-center justify-center rounded-md") },
                    React.createElement(icons_1.Spinner, { className: "animate-spin" })),
                children));
        }
        return children;
    };
    return (React.createElement(Component, { ref: ref, ...props, className: (0, clx_1.clx)(iconButtonVariants({ variant, size }), className), disabled: disabled || isLoading }, renderInner()));
});
exports.IconButton = IconButton;
IconButton.displayName = "IconButton";
//# sourceMappingURL=icon-button.js.map