import React from "react";
declare const Command: (({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element) & {
    Copy: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLButtonElement> & {
        content: string;
        asChild?: boolean;
    } & React.RefAttributes<HTMLButtonElement>>;
};
export { Command };
