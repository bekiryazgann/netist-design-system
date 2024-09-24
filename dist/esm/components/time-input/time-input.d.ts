import { AriaTimeFieldProps, TimeValue } from "@react-aria/datepicker";
import * as React from "react";
type TimeInputProps = Omit<AriaTimeFieldProps<TimeValue>, "label" | "shouldForceLeadingZeros" | "description" | "errorMessage">;
declare const TimeInput: React.ForwardRefExoticComponent<TimeInputProps & React.RefAttributes<HTMLDivElement>>;
export { TimeInput };
