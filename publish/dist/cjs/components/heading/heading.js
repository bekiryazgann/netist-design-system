"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headingVariants = exports.Heading = void 0;
const tslib_1 = require("tslib");
const class_variance_authority_1 = require("class-variance-authority");
const React = tslib_1.__importStar(require("react"));
const clx_1 = require("../../utils/clx");
const headingVariants = (0, class_variance_authority_1.cva)("font-sans font-medium", {
    variants: {
        level: {
            h1: "h1-core",
            h2: "h2-core",
            h3: "h3-core",
        },
    },
    defaultVariants: {
        level: "h1",
    },
});
exports.headingVariants = headingVariants;
const Heading = ({ level, className, ...props }) => {
    const Component = level ? level : "h1";
    return (React.createElement(Component, { className: (0, clx_1.clx)(headingVariants({ level }), className), ...props }));
};
exports.Heading = Heading;
//# sourceMappingURL=heading.js.map