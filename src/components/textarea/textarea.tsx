import * as React from "react"

import {clx} from "@/utils/clx"
import {inputBaseStyles} from "../input"

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentPropsWithoutRef<"textarea">>((
    {
        className,
        ...props
    }, ref) => {
    return (
        <textarea
            ref={ref}
            className={clx(
                inputBaseStyles,
                "txt-medium min-h-[70px] h-full w-full px-3 py-[7px] pb-6",
                className
            )}
            {...props}
        />
    )
})
Textarea.displayName = "Textarea"

export {Textarea}
