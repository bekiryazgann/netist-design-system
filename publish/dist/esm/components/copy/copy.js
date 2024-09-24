"use client";
import { Tooltip } from "../tooltip";
import { clx } from "../../utils/clx";
import { CheckCircleSolid, SquareTwoStack } from "@medusajs/icons";
import { Slot } from "@radix-ui/react-slot";
import copy from "copy-to-clipboard";
import React, { useState } from "react";
const Copy = React.forwardRef(({ children, className, content, asChild = false, ...props }, ref) => {
    const [done, setDone] = useState(false);
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("Copy");
    const copyToClipboard = () => {
        setDone(true);
        copy(content);
        setTimeout(() => {
            setDone(false);
        }, 2000);
    };
    React.useEffect(() => {
        if (done) {
            setText("Copied");
            return;
        }
        setTimeout(() => {
            setText("Copy");
        }, 500);
    }, [done]);
    const Component = asChild ? Slot : "button";
    return (React.createElement(Tooltip, { content: text, open: done || open, onOpenChange: setOpen },
        React.createElement(Component, { ref: ref, "aria-label": "Copy code snippet", type: "button", className: clx("text-ui-code-icon h-fit w-fit", className), onClick: copyToClipboard, ...props }, children ? children : done ? React.createElement(CheckCircleSolid, null) : React.createElement(SquareTwoStack, null))));
});
Copy.displayName = "Copy";
export { Copy };
//# sourceMappingURL=copy.js.map