"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hint = void 0;
const tslib_1 = require("tslib");
const class_variance_authority_1 = require("class-variance-authority");
const React = tslib_1.__importStar(require("react"));
const icons_1 = require("@medusajs/icons");
const clx_1 = require("../../utils/clx");
const hintVariants = (0, class_variance_authority_1.cva)("txt-compact-xsmall inline-flex items-center gap-x-2", {
    variants: {
        variant: {
            info: "text-ui-fg-subtle",
            error: "text-ui-fg-error",
        },
    },
    defaultVariants: {
        variant: "info",
    },
});
const Hint = React.forwardRef(({ className, variant = "info", children, ...props }, ref) => {
    return (React.createElement("span", { ref: ref, className: (0, clx_1.clx)(hintVariants({ variant }), className), ...props },
        variant === "error" && React.createElement(icons_1.ExclamationCircleSolid, null),
        children));
});
exports.Hint = Hint;
Hint.displayName = "Hint";
//# sourceMappingURL=hint.js.map