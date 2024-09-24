import * as React from "react";
export type DialogProps = {
    open: boolean;
    title: string;
    description: string;
    verificationText?: string;
    cancelText?: string;
    confirmText?: string;
    onConfirm: () => void;
    onCancel: () => void;
};
declare const Dialog: ({ open, title, description, verificationText, cancelText, confirmText, onConfirm, onCancel, }: DialogProps) => React.JSX.Element;
export default Dialog;
