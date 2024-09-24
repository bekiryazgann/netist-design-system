"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const tslib_1 = require("tslib");
const copy_1 = require("../copy");
const clx_1 = require("../../utils/clx");
const react_1 = tslib_1.__importDefault(require("react"));
const CommandComponent = ({ className, ...props }) => {
    return (react_1.default.createElement("div", { className: (0, clx_1.clx)("bg-ui-code-bg-header border-ui-code-border flex items-center rounded-lg border px-3 py-2", "[&>code]:text-ui-code-text-base [&>code]:txt-compact-small [&>code]:mx-3 [&>code]:font-mono [&>code]:leading-6", className), ...props }));
};
const Command = Object.assign(CommandComponent, { Copy: copy_1.Copy });
exports.Command = Command;
//# sourceMappingURL=command.js.map