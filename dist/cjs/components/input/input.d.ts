import { VariantProps } from "class-variance-authority";
import * as React from "react";
declare const inputBaseStyles: string;
declare const Input: React.ForwardRefExoticComponent<VariantProps<(props?: ({
    size?: "base" | "small" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & React.RefAttributes<HTMLInputElement>>;
export { Input, inputBaseStyles };
