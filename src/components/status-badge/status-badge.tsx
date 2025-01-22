import * as React from "react"

import { clx } from "@/utils/clx"

interface StatusBadgeProps
  extends Omit<React.ComponentPropsWithoutRef<"span">, "color"> {
  color?: "green" | "red" | "blue" | "orange" | "grey" | "purple"
}

const StatusIcon = ({color = "grey", className}: {color?: "green" | "red" | "blue" | "orange" | "grey" | "purple", className?: string}) => {
    const renderedColor = {
        green: "bg-green-500",
        red: "bg-red-500",
        blue: "bg-blue-500",
        orange: "bg-orange-500",
        grey: "bg-gray-500",
        purple: "bg-purple-500"
    }[color]

    return (
        <div className="w-5 h-5 flex items-center justify-center">
            <span className={clx("w-[13px] h-[13px] rounded-full border border-gray-200 flex items-center justify-center", className)}>
                <span className={clx("w-[7px] h-[7px] rounded-full block", renderedColor)}></span>
            </span>
        </div>
    )
}

const StatusBadge = React.forwardRef<HTMLSpanElement, StatusBadgeProps>(
  ({ children, className, color = "grey", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={clx(
          "bg-ui-bg-base border-ui-border-base txt-compact-small text-ui-fg-base inline-flex items-center justify-center rounded-full border py-1 pl-1 pr-3",
          className
        )}
        {...props}
      >
        <StatusIcon className="mr-0.5" color={color} />
        {children}
      </span>
    )
  }
)
StatusBadge.displayName = "StatusBadge"

export { StatusBadge }
