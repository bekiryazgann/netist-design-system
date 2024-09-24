"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusBadge = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const clx_1 = require("../../utils/clx");
const icons_1 = require("@medusajs/icons");
const StatusBadge = React.forwardRef(({ children, className, color = "grey", ...props }, ref) => {
    const StatusIndicator = {
        green: icons_1.EllipseGreenSolid,
        red: icons_1.EllipseRedSolid,
        orange: icons_1.EllipseOrangeSolid,
        blue: icons_1.EllipseBlueSolid,
        purple: icons_1.EllipsePurpleSolid,
        grey: icons_1.EllipseGreySolid,
    }[color];
    return (React.createElement("span", { ref: ref, className: (0, clx_1.clx)("bg-ui-bg-base border-ui-border-base txt-compact-small text-ui-fg-base inline-flex items-center justify-center rounded-full border py-1 pl-1 pr-3", className), ...props },
        React.createElement(StatusIndicator, { className: "mr-0.5" }),
        children));
});
exports.StatusBadge = StatusBadge;
StatusBadge.displayName = "StatusBadge";
//# sourceMappingURL=status-badge.js.map