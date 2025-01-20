import React from "react"
import {clx} from "@/utils/clx";

function Skeleton({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={clx("animate-pulse rounded-md bg-zinc-900/10", className)}
            {...props}
        />
    )
}

export {Skeleton}
