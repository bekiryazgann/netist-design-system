"use client";
import * as Primitives from "@radix-ui/react-alert-dialog";
import * as React from "react";
import { Button } from "../button";
import { Heading } from "../heading";
import { clx } from "../../utils/clx";
const Root = Primitives.AlertDialog;
Root.displayName = "Modal.Root";
const Trigger = Primitives.Trigger;
Trigger.displayName = "Modal.Trigger";
const Portal = ({ ...props }) => {
    return React.createElement(Primitives.AlertDialogPortal, { ...props });
};
Portal.displayName = "Modal.Portal";
const Overlay = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement(Primitives.Overlay, { ref: ref, className: clx("bg-ui-bg-overlay fixed inset-0", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", // Re-enable when Admin UI has been cleaned up
        className), ...props }));
});
Overlay.displayName = "Modal.Overlay";
const Title = React.forwardRef(({ className, children, ...props }, ref) => {
    return (React.createElement(Primitives.Title, { ref: ref, className: clx(className), ...props, asChild: true },
        React.createElement(Heading, { level: "h2", className: "text-ui-fg-base" }, children)));
});
Title.displayName = "Modal.Title";
const Content = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement(Portal, null,
        React.createElement(Overlay, null),
        React.createElement(Primitives.Content, { ref: ref, className: clx("bg-ui-bg-base shadow-elevation-flyout fixed left-[50%] top-[50%] flex w-full max-w-[400px] translate-x-[-50%] translate-y-[-50%] flex-col rounded-lg border focus:outline-none", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-200", // Re-enable when Admin UI has been cleaned up
            className), ...props })));
});
Content.displayName = "Modal.Content";
const Description = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement(Primitives.Description, { ref: ref, className: clx("text-ui-fg-subtle txt-compact-medium", className), ...props }));
});
Description.displayName = "Modal.Description";
const Action = React.forwardRef(({ className, children, type, ...props }, ref) => {
    return (React.createElement(Primitives.Action, { ref: ref, className: className, ...props, asChild: true },
        React.createElement(Button, { type: type, variant: "danger" }, children)));
});
Action.displayName = "Modal.Action";
const Cancel = React.forwardRef(({ className, children, ...props }, ref) => {
    return (React.createElement(Primitives.Cancel, { ref: ref, className: clx(className), ...props, asChild: true },
        React.createElement(Button, { variant: "secondary" }, children)));
});
Cancel.displayName = "Modal.Cancel";
const Header = ({ className, ...props }) => {
    return (React.createElement("div", { className: clx("flex flex-col gap-y-1 px-6 pt-6", className), ...props }));
};
const Footer = ({ className, ...props }) => {
    return (React.createElement("div", { className: clx("flex items-center justify-end gap-x-2 p-6", className), ...props }));
};
const Prompt = Object.assign(Root, {
    Trigger,
    Content,
    Title,
    Description,
    Action,
    Cancel,
    Header,
    Footer,
});
export { Prompt };
//# sourceMappingURL=prompt.js.map
