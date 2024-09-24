import React from "react"
import {cva} from "class-variance-authority";
import {clx} from "@/utils/clx";


const ProgressBarColorVariants = cva("h-2 rounded-full", {
    variants: {
        color: {
            blue: "bg-blue-500 text-ui-tag-blue-text [&_svg]:text-ui-tag-blue-icon border-ui-tag-blue-border",
            red: "bg-red-500 text-ui-tag-red-text [&_svg]:text-ui-tag-red-icon border-ui-tag-red-border",
            orange: "bg-orange-500 text-ui-tag-orange-text [&_svg]:text-ui-tag-orange-icon border-ui-tag-orange-border",
            green: "bg-green-500 text-ui-tag-green-text [&_svg]:text-ui-tag-green-icon border-ui-tag-green-border"
        },
    },
    defaultVariants: {
        color: "blue",
    },
})

interface ProgressBarProps{
    color: "blue"|"red"|"orange"|"green",
    size: number
    className?: string,
}

export const ProgressBar = ({className, color, size = 10}: ProgressBarProps) => {
    return (
        <div className={clx("w-full h-2 rounded-full bg-gray-200", className)}>
            <div className={ProgressBarColorVariants({color})}
                 style={{
                    width: size + "%"
                }}></div>
        </div>
    )
}
