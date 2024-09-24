import React from "react"
import {clx} from "@/utils/clx";

interface ContentDividerProps{
    children?: any,
    className?: string,
}

export const ContentDivider = ({children, className}: ContentDividerProps) => {
    const isChildren = children !== undefined

    return (
        <div className={clx("flex items-center justify-center relative w-full stretch", className)}>
            {isChildren ? (
                <>
                    <span className="block w-full flex-1 h-[1px] bg-gray-200"></span>
                    <div className="relative z-10 px-2.5 flex items-center gap-2.5">{children}</div>
                    <span className="block w-full flex-1 h-[1px] bg-gray-200"></span>
                </>
            ) : (
                <>
                    <span className="block w-full flex-1 h-[1px] bg-gray-200"></span>
                </>
            )}
        </div>
    )
}
