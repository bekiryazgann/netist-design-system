import * as React from "react";
interface StatusBadgeProps extends Omit<React.ComponentPropsWithoutRef<"span">, "color"> {
    color?: "green" | "red" | "blue" | "orange" | "grey" | "purple";
}
declare const StatusBadge: React.ForwardRefExoticComponent<StatusBadgeProps & React.RefAttributes<HTMLSpanElement>>;
export { StatusBadge };
