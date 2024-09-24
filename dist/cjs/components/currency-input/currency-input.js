"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyInput = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_currency_input_field_1 = tslib_1.__importDefault(require("react-currency-input-field"));
const text_1 = require("../text");
const clx_1 = require("../../utils/clx");
const class_variance_authority_1 = require("class-variance-authority");
const currencyInputVariants = (0, class_variance_authority_1.cva)((0, clx_1.clx)("flex items-center gap-x-1", "bg-ui-bg-field hover:bg-ui-bg-field-hover shadow-buttons-neutral placeholder-ui-fg-muted text-ui-fg-base transition-fg relative w-full rounded-md", "focus-within:shadow-borders-interactive-with-active"), {
    variants: {
        size: {
            base: "txt-compact-medium h-10 px-3",
            small: "txt-compact-small h-8 px-2",
        },
    },
    defaultVariants: {
        size: "base",
    },
});
const CurrencyInput = React.forwardRef(({ size = "base", symbol, code, disabled, onInvalid, className, ...props }, ref) => {
    const innerRef = React.useRef(null);
    React.useImperativeHandle(ref, () => innerRef.current);
    const [valid, setValid] = React.useState(true);
    const onInnerInvalid = React.useCallback((event) => {
        setValid(event.currentTarget.validity.valid);
        if (onInvalid) {
            onInvalid(event);
        }
    }, [onInvalid]);
    return (React.createElement("div", { onClick: () => {
            if (innerRef.current) {
                innerRef.current.focus();
            }
        }, className: (0, clx_1.clx)("w-full cursor-text justify-between overflow-hidden", currencyInputVariants({ size }), {
            "text-ui-fg-disabled !bg-ui-bg-disabled !shadow-buttons-neutral !placeholder-ui-fg-disabled cursor-not-allowed": disabled,
            "!shadow-borders-error invalid:!shadow-borders-error": props["aria-invalid"] || !valid,
        }, className) },
        React.createElement("span", { className: (0, clx_1.clx)("w-fit", {
                "py-[9px]": size === "base",
                "py-[5px]": size === "small",
            }), role: "presentation" },
            React.createElement(text_1.Text, { className: (0, clx_1.clx)("text-ui-fg-muted pointer-events-none select-none uppercase", {
                    "text-ui-fg-disabled": disabled,
                }) }, code)),
        React.createElement(react_currency_input_field_1.default, { className: "h-full min-w-0 flex-1 appearance-none bg-transparent text-right outline-none disabled:cursor-not-allowed", disabled: disabled, onInvalid: onInnerInvalid, ref: innerRef, ...props }),
        React.createElement("span", { className: (0, clx_1.clx)("w-fit min-w-[16px] text-right", {
                "py-[9px]": size === "base",
                "py-[5px]": size === "small",
            }), role: "presentation" },
            React.createElement(text_1.Text, { className: (0, clx_1.clx)("text-ui-fg-muted pointer-events-none select-none", {
                    "text-ui-fg-disabled": disabled,
                }) }, symbol))));
});
exports.CurrencyInput = CurrencyInput;
CurrencyInput.displayName = "CurrencyInput";
//# sourceMappingURL=currency-input.js.map