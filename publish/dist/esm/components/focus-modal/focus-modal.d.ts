import * as FocusModalPrimitives from "@radix-ui/react-dialog";
import * as React from "react";
declare const FocusModal: {
    (props: React.ComponentPropsWithoutRef<typeof FocusModalPrimitives.Root>): React.JSX.Element;
    displayName: string;
} & {
    Trigger: React.ForwardRefExoticComponent<Omit<FocusModalPrimitives.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<Omit<FocusModalPrimitives.DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Header: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Body: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
export { FocusModal };
