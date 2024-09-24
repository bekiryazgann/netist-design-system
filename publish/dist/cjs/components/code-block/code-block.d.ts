import * as React from "react";
export type CodeSnippet = {
    label: string;
    language: string;
    code: string;
    hideLineNumbers?: boolean;
};
type RootProps = {
    snippets: CodeSnippet[];
};
type HeaderProps = {
    hideLabels?: boolean;
};
declare const CodeBlock: (({ snippets, className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & RootProps) => React.JSX.Element) & {
    Body: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
    Header: (({ children, className, hideLabels, ...props }: React.HTMLAttributes<HTMLDivElement> & HeaderProps) => React.JSX.Element) & {
        Meta: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
    };
    Meta: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
};
export { CodeBlock };
