import React from "react"
import {cva} from "class-variance-authority";
import {clx} from "@/utils/clx";


const buttonVariants = cva(
    clx(
        "transition-fg relative inline-flex w-fit items-center justify-center overflow-hidden border border-gray-200 rounded-lg",
    ),
    {
        variants: {
            size: {
                base: "txt-compact-small-plus gap-x-1 px-3 py-0.5 text-xs",
                large: "txt-compact-medium-plus gap-x-2 px-4 py-1 text-sm",
            },
        },
        defaultVariants: {
            size: "base",
        },
    }
)

interface TagProps {
    children: any,
    size?: "base" | "large",
}

export const Tag = ({children, size = "base"}: TagProps) => {
    return (
        <div className={buttonVariants({size})}>
            <div>
                {children}
            </div>
        </div>
    )
}
