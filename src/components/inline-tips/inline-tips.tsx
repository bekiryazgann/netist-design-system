import * as React from "react";
import { clx } from "@/utils/clx";
import { cva } from "class-variance-authority";

const inlineTipsVariants = cva(
    "w-1 rounded-full flex-shrink-0 h-auto mr-3",
    {
        variants: {
            variant: {
                warning: "bg-ui-tag-orange-icon",
                tip: "bg-ui-tag-neutral-icon",
                donts: "bg-ui-tag-red-icon",
                dos: "bg-ui-tag-green-icon",
            },
        },
        defaultVariants: {
            variant: "tip",
        },
    }
);

interface RootProps extends React.HTMLProps<HTMLDivElement> {}
interface ContentProps extends React.HTMLProps<HTMLDivElement> {}
interface HintProps extends React.HTMLProps<HTMLDivElement> {}

const Root = ({ className, ...props }: RootProps) => {
    return (
        <div
            {...props}
            className={clx(
                className,
                "px-3 py-2.5 border border-zinc-200 bg-zinc-50 rounded-lg flex items-stretch"
            )} // items-stretch eklendi
        />
    );
};

const Content = ({ className, ...props }: ContentProps) => {
    return (
        <div
            {...props}
            className={clx(
                className,
                "text-ui-fg-subtle [&_b]:text-black flex-grow"
            )} // flex-grow eklendi
        />
    );
};

const Tip = ({ className, ...props }: HintProps) => {
    return (
        <div
            className={clx(inlineTipsVariants({ variant: "tip" }), className)}
            {...props}
        />
    );
};
const Warning = ({ className, ...props }: HintProps) => {
    return (
        <div
            className={clx(inlineTipsVariants({ variant: "warning" }), className)}
            {...props}
        />
    );
};

const Donts = ({ className, ...props }: HintProps) => {
    return (
        <div
            className={clx(inlineTipsVariants({ variant: "donts" }), className)}
            {...props}
        />
    );
};

const Dos = ({ className, ...props }: HintProps) => {
    return (
        <div
            className={clx(inlineTipsVariants({ variant: "dos" }), className)}
            {...props}
        />
    );
};

const InlineTips = Object.assign(Root, {
    Content,
    Warning,
    Tip,
    Donts,
    Dos,
});

export { InlineTips };
