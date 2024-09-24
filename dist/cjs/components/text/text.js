"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const tslib_1 = require("tslib");
const react_slot_1 = require("@radix-ui/react-slot");
const class_variance_authority_1 = require("class-variance-authority");
const React = tslib_1.__importStar(require("react"));
const clx_1 = require("../../utils/clx");
const textVariants = (0, class_variance_authority_1.cva)("", {
    variants: {
        size: {
            xsmall: "",
            small: "",
            base: "",
            large: "",
            xlarge: "",
        },
        weight: {
            regular: "font-normal",
            plus: "font-medium",
        },
        family: {
            sans: "font-sans",
            mono: "font-mono",
        },
        leading: {
            normal: "",
            compact: "",
        },
    },
    defaultVariants: {
        family: "sans",
        size: "base",
        weight: "regular",
        leading: "normal",
    },
    compoundVariants: [
        {
            size: "xsmall",
            leading: "normal",
            className: "txt-xsmall",
        },
        {
            size: "xsmall",
            leading: "compact",
            className: "txt-compact-xsmall",
        },
        {
            size: "small",
            leading: "normal",
            className: "txt-small",
        },
        {
            size: "small",
            leading: "compact",
            className: "txt-compact-small",
        },
        {
            size: "base",
            leading: "normal",
            className: "txt-medium",
        },
        {
            size: "base",
            leading: "compact",
            className: "txt-compact-medium",
        },
        {
            size: "large",
            leading: "normal",
            className: "txt-large",
        },
        {
            size: "large",
            leading: "compact",
            className: "txt-compact-large",
        },
        {
            size: "xlarge",
            leading: "normal",
            className: "txt-xlarge",
        },
        {
            size: "xlarge",
            leading: "compact",
            className: "txt-compact-xlarge",
        },
    ],
});
const Text = React.forwardRef(({ className, asChild = false, as = "p", size = "base", weight = "regular", family = "sans", leading = "normal", children, ...props }, ref) => {
    const Component = asChild ? react_slot_1.Slot : as;
    return (React.createElement(Component, { ref: ref, className: (0, clx_1.clx)(textVariants({ size, weight, family, leading }), className), ...props }, children));
});
exports.Text = Text;
Text.displayName = "Text";
//# sourceMappingURL=text.js.map