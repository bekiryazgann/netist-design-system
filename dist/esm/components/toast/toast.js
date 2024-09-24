"use client";
import { CheckCircleSolid, ExclamationCircleSolid, InformationCircleSolid, Spinner, XCircleSolid, } from "@medusajs/icons";
import * as Primitives from "@radix-ui/react-toast";
import * as React from "react";
import { clx } from "../../utils/clx";
const ToastProvider = Primitives.Provider;
ToastProvider.displayName = "ToastProvider";
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (React.createElement(Primitives.Viewport, { ref: ref, className: clx("fixed right-0 top-0 z-[9999] w-full p-6 md:max-w-[484px]", className), ...props })));
ToastViewport.displayName = "ToastViewport";
const Toast = React.forwardRef(({ className, variant, title, description, action, disableDismiss = false, ...props }, ref) => {
    let Icon = undefined;
    switch (variant) {
        case "success":
            Icon = React.createElement(CheckCircleSolid, { className: "text-ui-tag-green-icon" });
            break;
        case "warning":
            Icon = React.createElement(ExclamationCircleSolid, { className: "text-ui-tag-orange-icon" });
            break;
        case "error":
            Icon = React.createElement(XCircleSolid, { className: "text-ui-tag-red-icon" });
            break;
        case "loading":
            Icon = React.createElement(Spinner, { className: "text-ui-tag-blue-icon animate-spin" });
            break;
        default:
            Icon = React.createElement(InformationCircleSolid, { className: "text-ui-fg-base" });
            break;
    }
    if (action && !action.altText) {
        // eslint-disable-next-line turbo/no-undeclared-env-vars
        if (process.env.NODE_ENV === "development") {
            console.warn("Omitting `altText` from the action is not recommended. Please provide a description for screen readers.");
        }
    }
    return (React.createElement(Primitives.Root, { ref: ref, className: clx("bg-ui-bg-base border-ui-border-base flex h-fit min-h-[74px] w-full overflow-hidden rounded-md border shadow-[0_4px_12px_rgba(0,0,0,0.05)] md:max-w-[440px]", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none", className), ...props },
        React.createElement("div", { className: "border-ui-border-base flex flex-1 items-start space-x-3 border-r p-4" },
            React.createElement("span", { "aria-hidden": true }, Icon),
            React.createElement("div", null,
                title && (React.createElement(Primitives.Title, { className: "text-ui-fg-base txt-compact-small-plus" }, title)),
                description && (React.createElement(Primitives.Description, { className: "text-ui-fg-subtle txt-compact-medium" }, description)))),
        React.createElement("div", { className: "flex flex-col" },
            action && (React.createElement(React.Fragment, null,
                React.createElement(Primitives.Action, { altText: action.altText, className: clx("txt-compact-small-plus text-ui-fg-base bg-ui-bg-base hover:bg-ui-bg-base-hover active:bg-ui-bg-base-pressed flex flex-1 items-center justify-center px-6 transition-colors", {
                        "text-ui-fg-error": variant === "error",
                    }), onClick: (e) => {
                        e.preventDefault();
                        action.onClick();
                    }, type: "button" }, action.label),
                React.createElement("div", { className: "bg-ui-border-base h-px w-full" }))),
            !disableDismiss && (React.createElement(Primitives.Close, { className: clx("txt-compact-small-plus text-ui-fg-subtle bg-ui-bg-base hover:bg-ui-bg-base-hover active:bg-ui-bg-base-pressed flex flex-1 items-center justify-center px-6 transition-colors", {
                    "h-1/2": action,
                    "h-full": !action,
                }), "aria-label": "Close" }, "Close")))));
});
Toast.displayName = "Toast";
export { Toast, ToastProvider, ToastViewport, };
//# sourceMappingURL=toast.js.map