"use client";
import { XMark } from "@medusajs/icons";
import * as DrawerPrimitives from "@radix-ui/react-dialog";
import * as React from "react";
import { Heading } from "../heading";
import { IconButton } from "../icon-button";
import { Text } from "../text";
import { clx } from "../../utils/clx";
const DrawerRoot = (props) => {
    return React.createElement(DrawerPrimitives.Root, { ...props });
};
DrawerRoot.displayName = "Drawer.Root";
const DrawerTrigger = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement(DrawerPrimitives.Trigger, { ref: ref, className: clx(className), ...props }));
});
DrawerTrigger.displayName = "Drawer.Trigger";
const DrawerClose = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement(DrawerPrimitives.Close, { ref: ref, className: clx(className), ...props }));
});
DrawerClose.displayName = "Drawer.Close";
const DrawerPortal = (props) => {
    return React.createElement(DrawerPrimitives.DialogPortal, { ...props });
};
DrawerPortal.displayName = "Drawer.Portal";
const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement(DrawerPrimitives.Overlay, { ref: ref, className: clx("bg-ui-bg-overlay fixed inset-0", className), ...props }));
});
DrawerOverlay.displayName = "Drawer.Overlay";
const DrawerContent = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement(DrawerPortal, null,
        React.createElement(DrawerOverlay, null),
        React.createElement(DrawerPrimitives.Content, { ref: ref, className: clx("bg-ui-bg-base shadow-elevation-modal border-ui-border-base fixed inset-y-0 right-0 flex w-full max-w-[560px] flex-1 flex-col border focus:outline-none", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-right-1/2 data-[state=open]:slide-in-from-right-1/2 duration-200", className), ...props })));
});
DrawerContent.displayName = "Drawer.Content";
const DrawerHeader = React.forwardRef(({ children, className, ...props }, ref) => {
    return (React.createElement("div", { ref: ref, ...props, className: "border-ui-border-base flex items-start justify-between gap-x-4 border-b p-5" },
        React.createElement("div", { className: clx("flex flex-col gap-y-1", className) }, children),
        React.createElement("div", { className: "flex items-center gap-x-2" },
            React.createElement(DrawerPrimitives.Close, { asChild: true },
                React.createElement(IconButton, { variant: "transparent" },
                    React.createElement(XMark, null))))));
});
DrawerHeader.displayName = "Drawer.Header";
const DrawerBody = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement("div", { ref: ref, className: clx("flex-1 px-8 pb-16 pt-6", className), ...props }));
});
DrawerBody.displayName = "Drawer.Body";
const DrawerFooter = ({ className, ...props }) => {
    return (React.createElement("div", { className: clx("border-ui-border-base flex items-center justify-end space-x-2 overflow-y-scroll border-t px-8 pb-6 pt-4", className), ...props }));
};
DrawerFooter.displayName = "Drawer.Footer";
const DrawerTitle = React.forwardRef(({ className, children, ...props }, ref) => (React.createElement(DrawerPrimitives.Title, { ref: ref, className: clx(className), asChild: true, ...props },
    React.createElement(Heading, { level: "h1" }, children))));
DrawerTitle.displayName = "Drawer.Title";
const DrawerDescription = React.forwardRef(({ className, children, ...props }, ref) => (React.createElement(DrawerPrimitives.Description, { ref: ref, className: clx(className), asChild: true, ...props },
    React.createElement(Text, null, children))));
DrawerDescription.displayName = "Drawer.Description";
const Drawer = Object.assign(DrawerRoot, {
    Body: DrawerBody,
    Close: DrawerClose,
    Content: DrawerContent,
    Description: DrawerDescription,
    Footer: DrawerFooter,
    Header: DrawerHeader,
    Title: DrawerTitle,
    Trigger: DrawerTrigger,
});
export { Drawer };
//# sourceMappingURL=drawer.js.map