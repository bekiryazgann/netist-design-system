import { cva } from "class-variance-authority";
import * as React from "react";
import { clx } from "../../utils/clx";
const headingVariants = cva("font-sans font-medium", {
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
const Heading = ({ level, className, ...props }) => {
    const Component = level ? level : "h1";
    return (React.createElement(Component, { className: clx(headingVariants({ level }), className), ...props }));
};
export { Heading, headingVariants };
//# sourceMappingURL=heading.js.map