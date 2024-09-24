"use client";
import * as React from "react";
import { Toast, ToastProvider, ToastViewport } from "../toast";
import { useToast } from "../../hooks/use-toast";
const Toaster = () => {
    const { toasts } = useToast();
    return (React.createElement(ToastProvider, { swipeDirection: "right" },
        toasts.map(({ id, ...props }) => {
            return React.createElement(Toast, { key: id, ...props });
        }),
        React.createElement(ToastViewport, null)));
};
export { Toaster };
//# sourceMappingURL=toaster.js.map