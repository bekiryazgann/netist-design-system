"use client"

import { Check, Minus } from "@netist/icons"
import * as Primitives from "@radix-ui/react-checkbox"
import * as React from "react"

import { clx } from "@/utils/clx"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof Primitives.Root>,
  React.ComponentPropsWithoutRef<typeof Primitives.Root>
>(({ className, checked, ...props }, ref) => {
  return (
    <Primitives.Root
      {...props}
      ref={ref}
      checked={checked}
      className={clx(
        "group relative inline-flex h-5 w-5 items-center justify-center outline-none ",
        className
      )}
    >
      <div className="text-ui-fg-on-inverted bg-ui-bg-base shadow-borders-base group-hover:bg-ui-bg-base-hover group-focus:!shadow-borders-interactive-with-focus group-data-[state=checked]:bg-ui-bg-interactive group-data-[state=checked]:shadow-borders-interactive-with-shadow group-data-[state=indeterminate]:bg-ui-bg-interactive group-data-[state=indeterminate]:shadow-borders-interactive-with-shadow [&_path]:shadow-details-contrast-on-bg-interactive group-disabled:text-ui-fg-disabled group-disabled:!bg-ui-bg-disabled group-disabled:!shadow-borders-base transition-fg h-[14px] w-[14px] rounded-[3px]">
        <Primitives.Indicator className="absolute inset-0">
          {checked === "indeterminate" ? <Minus width={20} height={20} className="p-[3px]"/> : <Check width={20} height={20} className="p-[3px]"/>}
        </Primitives.Indicator>
      </div>
    </Primitives.Root>
  )
})
Checkbox.displayName = "Checkbox"

export { Checkbox }
