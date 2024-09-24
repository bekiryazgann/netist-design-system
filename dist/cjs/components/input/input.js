"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputBaseStyles = exports.Input = void 0;
const tslib_1 = require("tslib");
const icons_1 = require("@medusajs/icons");
const class_variance_authority_1 = require("class-variance-authority");
const React = tslib_1.__importStar(require("react"));
const clx_1 = require("../../utils/clx");
const inputBaseStyles = (0, clx_1.clx)("caret-ui-fg-base bg-ui-bg-field hover:bg-ui-bg-field-hover shadow-borders-base placeholder-ui-fg-muted text-ui-fg-base transition-fg relative w-full appearance-none rounded-md outline-none", "focus:shadow-borders-interactive-with-active", "disabled:text-ui-fg-disabled disabled:!bg-ui-bg-disabled disabled:placeholder-ui-fg-disabled disabled:cursor-not-allowed", "aria-[invalid=true]:!shadow-borders-error  invalid:!shadow-borders-error");
exports.inputBaseStyles = inputBaseStyles;
const inputVariants = (0, class_variance_authority_1.cva)((0, clx_1.clx)(inputBaseStyles, "[&::--webkit-search-cancel-button]:hidden [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"), {
    variants: {
        size: {
            base: "txt-compact-medium h-10 px-3 py-[9px]",
            small: "txt-compact-small h-8 px-2 py-[5px]",
        },
    },
    defaultVariants: {
        size: "base",
    },
});
const Input = React.forwardRef(({ className, type, size = "base", ...props }, ref) => {
    const [typeState, setTypeState] = React.useState(type);
    const isPassword = type === "password";
    const isSearch = type === "search";
    return (React.createElement("div", { className: "relative" },
        React.createElement("input", { ref: ref, type: isPassword ? typeState : type, className: (0, clx_1.clx)(inputVariants({ size: size }), {
                "pr-11": isPassword && size === "base",
                "pl-11": isSearch && size === "base",
                "pr-9": isPassword && size === "small",
                "pl-9": isSearch && size === "small",
            }, className), ...props }),
        isSearch && (React.createElement("div", { className: (0, clx_1.clx)("text-ui-fg-muted absolute bottom-0 left-0 flex items-center justify-center", {
                "h-10 w-11": size === "base",
                "h-8 w-9": size === "small",
            }), role: "img" },
            React.createElement(icons_1.MagnifyingGlassMini, null))),
        isPassword && (React.createElement("div", { className: (0, clx_1.clx)("absolute bottom-0 right-0 flex w-11 items-center justify-center", {
                "h-10 w-11": size === "base",
                "h-8 w-9": size === "small",
            }) },
            React.createElement("button", { className: "text-ui-fg-muted hover:text-ui-fg-base focus:text-ui-fg-base focus:shadow-borders-interactive-w-focus active:text-ui-fg-base h-fit w-fit rounded-sm outline-none transition-all", type: "button", onClick: () => {
                    setTypeState(typeState === "password" ? "text" : "password");
                } },
                React.createElement("span", { className: "sr-only" }, typeState === "password" ? "Show password" : "Hide password"),
                typeState === "password" ? React.createElement(icons_1.Eye, null) : React.createElement(icons_1.EyeSlash, null))))));
});
exports.Input = Input;
Input.displayName = "Input";
//# sourceMappingURL=input.js.map