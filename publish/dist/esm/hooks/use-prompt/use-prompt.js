"use client";
import * as React from "react";
import { createRoot } from "react-dom/client";
import Dialog from "./dialog";
const usePrompt = () => {
    const dialog = async (props) => {
        return new Promise((resolve) => {
            let open = true;
            const onCancel = () => {
                open = false;
                render();
                resolve(false);
            };
            const onConfirm = () => {
                open = false;
                resolve(true);
                render();
            };
            const mountRoot = createRoot(document.createElement("div"));
            const render = () => {
                mountRoot.render(React.createElement(Dialog, { open: open, onConfirm: onConfirm, onCancel: onCancel, ...props }));
            };
            render();
        });
    };
    return dialog;
};
export { usePrompt };
//# sourceMappingURL=use-prompt.js.map