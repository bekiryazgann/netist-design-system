import * as React from "react";
import type { DateRange } from "../../types";
interface Preset {
    label: string;
}
interface DatePreset extends Preset {
    date: Date;
}
interface DateRangePreset extends Preset {
    dateRange: DateRange;
}
type CalendarProps = {
    fromYear?: number;
    toYear?: number;
    fromMonth?: Date;
    toMonth?: Date;
    fromDay?: Date;
    toDay?: Date;
    fromDate?: Date;
    toDate?: Date;
};
interface PickerProps extends CalendarProps {
    className?: string;
    disabled?: boolean;
    required?: boolean;
    size?: "small" | "base";
    showTimePicker?: boolean;
    id?: string;
    "aria-invalid"?: boolean;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "aria-required"?: boolean;
}
type DatePickerProps = ({
    mode?: "single";
    presets?: DatePreset[];
    defaultValue?: Date;
    value?: Date;
    onChange?: (date: Date | undefined) => void;
} | {
    mode: "range";
    presets?: DateRangePreset[];
    defaultValue?: DateRange;
    value?: DateRange;
    onChange?: (dateRange: DateRange | undefined) => void;
}) & PickerProps;
declare const DatePicker: ({ mode, ...props }: DatePickerProps) => React.JSX.Element;
export { DatePicker };
