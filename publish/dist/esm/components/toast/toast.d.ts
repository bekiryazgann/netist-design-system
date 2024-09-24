import * as Primitives from "@radix-ui/react-toast";
import * as React from "react";
declare const ToastProvider: React.FC<Primitives.ToastProviderProps>;
declare const ToastViewport: React.ForwardRefExoticComponent<Omit<Primitives.ToastViewportProps & React.RefAttributes<HTMLOListElement>, "ref"> & React.RefAttributes<HTMLOListElement>>;
interface ActionProps {
    label: string;
    altText: string;
    onClick: () => void | Promise<void>;
}
interface ToastProps extends React.ComponentPropsWithoutRef<typeof Primitives.Root> {
    variant?: "info" | "success" | "warning" | "error" | "loading";
    title?: string;
    description?: string;
    action?: ActionProps;
    disableDismiss?: boolean;
}
declare const Toast: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLLIElement>>;
type ToastActionElement = ActionProps;
export { Toast, ToastProvider, ToastViewport, type ToastActionElement, type ToastProps, };
