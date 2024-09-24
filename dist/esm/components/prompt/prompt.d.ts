import * as Primitives from "@radix-ui/react-alert-dialog";
import * as React from "react";
declare const Prompt: React.FC<Primitives.AlertDialogProps> & {
    Trigger: React.ForwardRefExoticComponent<Primitives.AlertDialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<Omit<Primitives.AlertDialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Title: React.ForwardRefExoticComponent<Omit<Omit<Primitives.AlertDialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref">, "asChild"> & React.RefAttributes<HTMLHeadingElement>>;
    Description: React.ForwardRefExoticComponent<Omit<Primitives.AlertDialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
    Action: React.ForwardRefExoticComponent<Omit<Omit<Primitives.AlertDialogActionProps & React.RefAttributes<HTMLButtonElement>, "ref">, "asChild"> & React.RefAttributes<HTMLButtonElement>>;
    Cancel: React.ForwardRefExoticComponent<Omit<Omit<Primitives.AlertDialogCancelProps & React.RefAttributes<HTMLButtonElement>, "ref">, "asChild"> & React.RefAttributes<HTMLButtonElement>>;
    Header: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
    Footer: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
};
export { Prompt };
