import * as React from "react";
import { clx } from "../../utils/clx";
import { EllipseBlueSolid, EllipseGreenSolid, EllipseGreySolid, EllipseOrangeSolid, EllipsePurpleSolid, EllipseRedSolid, } from "@medusajs/icons";
const StatusBadge = React.forwardRef(({ children, className, color = "grey", ...props }, ref) => {
    const StatusIndicator = {
        green: EllipseGreenSolid,
        red: EllipseRedSolid,
        orange: EllipseOrangeSolid,
        blue: EllipseBlueSolid,
        purple: EllipsePurpleSolid,
        grey: EllipseGreySolid,
    }[color];
    return (React.createElement("span", { ref: ref, className: clx("bg-ui-bg-base border-ui-border-base txt-compact-small text-ui-fg-base inline-flex items-center justify-center rounded-full border py-1 pl-1 pr-3", className), ...props },
        React.createElement(StatusIndicator, { className: "mr-0.5" }),
        children));
});
StatusBadge.displayName = "StatusBadge";
export { StatusBadge };
//# sourceMappingURL=status-badge.js.map