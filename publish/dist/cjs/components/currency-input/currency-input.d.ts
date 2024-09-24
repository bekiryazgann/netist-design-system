import * as React from "react";
import Primitive from "react-currency-input-field";
import { VariantProps } from "class-variance-authority";
declare const currencyInputVariants: (props?: ({
    size?: "base" | "small" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface CurrencyInputProps extends Omit<React.ComponentPropsWithoutRef<typeof Primitive>, "prefix" | "suffix" | "size">, VariantProps<typeof currencyInputVariants> {
    symbol: string;
    code: string;
}
declare const CurrencyInput: React.ForwardRefExoticComponent<CurrencyInputProps & React.RefAttributes<HTMLInputElement>>;
export { CurrencyInput };
