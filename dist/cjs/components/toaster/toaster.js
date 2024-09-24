"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toaster = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const toast_1 = require("../toast");
const use_toast_1 = require("../../hooks/use-toast");
const Toaster = () => {
    const { toasts } = (0, use_toast_1.useToast)();
    return (React.createElement(toast_1.ToastProvider, { swipeDirection: "right" },
        toasts.map(({ id, ...props }) => {
            return React.createElement(toast_1.Toast, { key: id, ...props });
        }),
        React.createElement(toast_1.ToastViewport, null)));
};
exports.Toaster = Toaster;
//# sourceMappingURL=toaster.js.map