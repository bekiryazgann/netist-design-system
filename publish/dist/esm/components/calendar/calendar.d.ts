import * as React from "react";
import { type DayPickerRangeProps, type DayPickerSingleProps } from "react-day-picker";
type OmitKeys<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P];
};
type KeysToOmit = "showWeekNumber" | "captionLayout" | "mode";
type SingleProps = OmitKeys<DayPickerSingleProps, KeysToOmit>;
type RangeProps = OmitKeys<DayPickerRangeProps, KeysToOmit>;
type CalendarProps = ({
    mode: "single";
} & SingleProps) | ({
    mode?: undefined;
} & SingleProps) | ({
    mode: "range";
} & RangeProps);
declare const Calendar: {
    ({ className, classNames, mode, showOutsideDays, ...props }: CalendarProps): React.JSX.Element;
    displayName: string;
};
export { Calendar };
