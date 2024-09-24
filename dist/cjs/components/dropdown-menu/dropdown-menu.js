"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownMenu = void 0;
const tslib_1 = require("tslib");
const icons_1 = require("@medusajs/icons");
const Primitives = tslib_1.__importStar(require("@radix-ui/react-dropdown-menu"));
const React = tslib_1.__importStar(require("react"));
const clx_1 = require("../../utils/clx");
const Root = Primitives.Root;
Root.displayName = "DropdownMenu.Root";
const Trigger = Primitives.Trigger;
Trigger.displayName = "DropdownMenu.Trigger";
const Group = Primitives.Group;
Group.displayName = "DropdownMenu.Group";
const SubMenu = Primitives.Sub;
SubMenu.displayName = "DropdownMenu.SubMenu";
const RadioGroup = Primitives.RadioGroup;
RadioGroup.displayName = "DropdownMenu.RadioGroup";
const SubMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => (React.createElement(Primitives.SubTrigger, { ref: ref, className: (0, clx_1.clx)("focus:bg-ui-bg-base-pressed data-[state=open]:bg-ui-bg-base-pressed txt-compact-small flex cursor-default select-none items-center rounded-sm px-3 py-2 outline-none", className), ...props },
    children,
    React.createElement(icons_1.ChevronRightMini, { className: "ml-auto" }))));
SubMenuTrigger.displayName = "DropdownMenu.SubMenuTrigger";
const SubMenuContent = React.forwardRef(({ className, collisionPadding = 8, ...props }, ref) => (React.createElement(Primitives.Portal, null,
    React.createElement(Primitives.SubContent, { ref: ref, collisionPadding: collisionPadding, className: (0, clx_1.clx)("bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout max-h-[var(--radix-popper-available-height)] min-w-[8rem] overflow-hidden rounded-lg border p-1", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }))));
SubMenuContent.displayName = "DropdownMenu.SubMenuContent";
const Content = React.forwardRef(({ className, sideOffset = 8, collisionPadding = 8, align = "start", ...props }, ref) => (React.createElement(Primitives.Portal, null,
    React.createElement(Primitives.Content, { ref: ref, sideOffset: sideOffset, align: align, collisionPadding: collisionPadding, className: (0, clx_1.clx)("bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout max-h-[var(--radix-popper-available-height)] min-w-[220px] overflow-hidden rounded-lg p-1", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }))));
Content.displayName = "DropdownMenu.Content";
const Item = React.forwardRef(({ className, ...props }, ref) => (React.createElement(Primitives.Item, { ref: ref, className: (0, clx_1.clx)("bg-ui-bg-base focus:bg-ui-bg-base-pressed text-ui-fg-base data-[disabled]:text-ui-fg-disabled txt-compact-small relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 outline-none transition-colors data-[disabled]:pointer-events-none", className), ...props })));
Item.displayName = "DropdownMenu.Item";
const CheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (React.createElement(Primitives.CheckboxItem, { ref: ref, className: (0, clx_1.clx)("focus:bg-ui-bg-base-pressed text-ui-fg-base data-[disabled]:text-ui-fg-disabled relative flex cursor-pointer select-none items-center rounded-md py-2 pl-10 pr-3 text-sm outline-none transition-colors data-[disabled]:pointer-events-none", className), checked: checked, ...props },
    React.createElement("span", { className: "absolute left-3 flex h-5 w-5 items-center justify-center" },
        React.createElement(Primitives.ItemIndicator, null,
            React.createElement(icons_1.CheckMini, null))),
    children)));
CheckboxItem.displayName = "DropdownMenu.CheckboxItem";
const RadioItem = React.forwardRef(({ className, children, ...props }, ref) => (React.createElement(Primitives.RadioItem, { ref: ref, className: (0, clx_1.clx)("focus:bg-ui-bg-base-pressed hover:bg-ui-base-hover bg-ui-bg-base txt-compact-small relative flex cursor-pointer select-none items-center rounded-md py-2 pl-10 pr-3 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[state=checked]:font-medium data-[disabled]:opacity-50", className), ...props },
    React.createElement("span", { className: "absolute left-3 flex h-5 w-5 items-center justify-center" },
        React.createElement(Primitives.ItemIndicator, null,
            React.createElement(icons_1.EllipseMiniSolid, { className: "text-ui-fg-base" }))),
    children)));
RadioItem.displayName = "DropdownMenu.RadioItem";
const Label = React.forwardRef(({ className, ...props }, ref) => (React.createElement(Primitives.Label, { ref: ref, className: (0, clx_1.clx)("text-ui-fg-subtle txt-compact-xsmall-plus px-2 py-1.5", className), ...props })));
Label.displayName = "DropdownMenu.Label";
const Separator = React.forwardRef(({ className, ...props }, ref) => (React.createElement(Primitives.Separator, { ref: ref, className: (0, clx_1.clx)("bg-ui-border-base -mx-1 my-1 h-px", className), ...props })));
Separator.displayName = "DropdownMenu.Separator";
const Shortcut = ({ className, ...props }) => {
    return (React.createElement("span", { className: (0, clx_1.clx)("text-ui-fg-subtle txt-compact-small ml-auto tracking-widest", className), ...props }));
};
Shortcut.displayName = "DropdownMenu.Shortcut";
const Hint = ({ className, ...props }) => {
    return (React.createElement("span", { className: (0, clx_1.clx)("text-ui-fg-subtle txt-compact-small ml-auto tracking-widest", className), ...props }));
};
Hint.displayName = "DropdownMenu.Hint";
const DropdownMenu = Object.assign(Root, {
    Trigger,
    Group,
    SubMenu,
    SubMenuContent,
    SubMenuTrigger,
    Content,
    Item,
    CheckboxItem,
    RadioGroup,
    RadioItem,
    Label,
    Separator,
    Shortcut,
    Hint,
});
exports.DropdownMenu = DropdownMenu;
//# sourceMappingURL=dropdown-menu.js.map