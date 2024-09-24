"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandBar = void 0;
const tslib_1 = require("tslib");
const Popover = tslib_1.__importStar(require("@radix-ui/react-popover"));
const Portal = tslib_1.__importStar(require("@radix-ui/react-portal"));
const React = tslib_1.__importStar(require("react"));
const kbd_1 = require("../kbd");
const clx_1 = require("../../utils/clx");
const Root = ({ open = false, onOpenChange, defaultOpen = false, disableAutoFocus = true, children, }) => {
    return (React.createElement(Popover.Root, { open: open, onOpenChange: onOpenChange, defaultOpen: defaultOpen },
        React.createElement(Portal.Root, null,
            React.createElement(Popover.Anchor, { className: (0, clx_1.clx)("fixed bottom-8 left-1/2 h-px w-px -translate-x-1/2") })),
        React.createElement(Popover.Portal, null,
            React.createElement(Popover.Content, { side: "top", sideOffset: 0, onOpenAutoFocus: (e) => {
                    if (disableAutoFocus) {
                        e.preventDefault();
                    }
                }, className: (0, clx_1.clx)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2") }, children))));
};
Root.displayName = "CommandBar";
const Value = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement("div", { ref: ref, className: (0, clx_1.clx)("txt-compact-small-plus text-ui-contrast-fg-secondary px-3 py-2.5", className), ...props }));
});
Value.displayName = "CommandBar.Value";
const Bar = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement("div", { ref: ref, className: (0, clx_1.clx)("bg-ui-contrast-bg-base relative flex items-center overflow-hidden rounded-full px-1", "after:shadow-elevation-flyout after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:content-['']", className), ...props }));
});
Bar.displayName = "CommandBar.Bar";
const Seperator = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement("div", { ref: ref, className: (0, clx_1.clx)("bg-ui-contrast-border-base h-10 w-px", className), ...props }));
});
Seperator.displayName = "CommandBar.Seperator";
const Command = React.forwardRef(({ className, type = "button", label, action, shortcut, disabled, ...props }, ref) => {
    React.useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === shortcut) {
                event.preventDefault();
                event.stopPropagation();
                action();
            }
        };
        if (!disabled) {
            document.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [action, shortcut, disabled]);
    return (React.createElement("button", { ref: ref, className: (0, clx_1.clx)("bg-ui-contrast-bg-base txt-compact-small-plus transition-fg text-ui-contrast-fg-primary flex items-center gap-x-2 px-3 py-2.5 outline-none", "focus:bg-ui-contrast-bg-highlight focus:hover:bg-ui-contrast-bg-base-hover hover:bg-ui-contrast-bg-base-hover active:bg-ui-contrast-bg-base-pressed focus:active:bg-ui-contrast-bg-base-pressed disabled:!bg-ui-bg-disabled disabled:!text-ui-fg-disabled", "last-of-type:-mr-1 last-of-type:pr-4", className), type: type, onClick: action, ...props },
        React.createElement("span", null, label),
        React.createElement(kbd_1.Kbd, { className: "bg-ui-contrast-bg-subtle border-ui-contrast-border-base text-ui-contrast-fg-secondary" }, shortcut.toUpperCase())));
});
Command.displayName = "CommandBar.Command";
const CommandBar = Object.assign(Root, {
    Command,
    Value,
    Bar,
    Seperator,
});
exports.CommandBar = CommandBar;
//# sourceMappingURL=command-bar.js.map