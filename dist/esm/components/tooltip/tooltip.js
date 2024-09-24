"use client";
import * as Primitives from "@radix-ui/react-tooltip";
import * as React from "react";
import { clx } from "../../utils/clx";
const Tooltip = ({ children, content, open, defaultOpen, onOpenChange, delayDuration, maxWidth = 220, className, side, sideOffset = 8, onClick, ...props }) => {
    return (React.createElement(Primitives.Provider, { delayDuration: 100 },
        React.createElement(Primitives.Root, { open: open, defaultOpen: defaultOpen, onOpenChange: onOpenChange, delayDuration: delayDuration },
            React.createElement(Primitives.Trigger, { onClick: onClick, asChild: true }, children),
            React.createElement(Primitives.Portal, null,
                React.createElement(Primitives.Content, { side: side, sideOffset: sideOffset, align: "center", className: clx("txt-compact-xsmall-plus text-ui-fg-subtle bg-ui-bg-base shadow-elevation-tooltip rounded-lg px-3 py-2", "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props, style: { ...props.style, maxWidth } }, content)))));
};
export { Tooltip };
//# sourceMappingURL=tooltip.js.map