"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textarea = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const clx_1 = require("../../utils/clx");
const input_1 = require("../input");
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement("textarea", { ref: ref, className: (0, clx_1.clx)(input_1.inputBaseStyles, "txt-medium min-h-[70px] h-full w-full px-3 py-[7px] pb-6", className), ...props }));
});
exports.Textarea = Textarea;
Textarea.displayName = "Textarea";
//# sourceMappingURL=textarea.js.map