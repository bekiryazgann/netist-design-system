"use client"

import {Circle, StopCircle, CheckCircle} from "@netist/icons"
import * as ProgressTabsPrimitives from "@radix-ui/react-tabs"
import * as React from "react"

import {ProgressStatus} from "@/types"
import {clx} from "@/utils/clx"

const ProgressTabsRoot = ({className, ...props}: ProgressTabsPrimitives.TabsProps) => {
    return (
        <ProgressTabsPrimitives.Root
            className={clx(
                "shadow-elevation-card-rest bg-ui-bg-base w-full rounded-lg overflow-hidden",
                className
            )}
            {...props}
        />
    )
}
ProgressTabsRoot.displayName = "ProgressTabs"

interface IndicatorProps
    extends Omit<React.ComponentPropsWithoutRef<"span">, "children"> {
    status?: ProgressStatus
}

const ProgressIndicator = ({status, className, ...props}: IndicatorProps) => {
    const Icon = React.useMemo(() => {
        switch (status) {
            case "not-started":
                return Circle
            case "in-progress":
                return StopCircle
            case "completed":
                return CheckCircle
            default:
                return Circle
        }
    }, [status])

    return (
        <span {...props}
              className={clx(
                  "text-ui-fg-muted group-data-[state=active]/trigger:text-ui-fg-interactive",
                  className
              )}>
      <Icon width={18} height={18}/>
    </span>
    )
}

interface ProgressTabsTriggerProps
    extends Omit<
        React.ComponentPropsWithoutRef<typeof ProgressTabsPrimitives.Trigger>,
        "asChild"
    > {
    status?: ProgressStatus
}

const ProgressTabsTrigger = React.forwardRef<
    React.ElementRef<typeof ProgressTabsPrimitives.Trigger>,
    ProgressTabsTriggerProps
>(({className, children, status = "not-started", ...props}, ref) => (
    <ProgressTabsPrimitives.Trigger
        ref={ref}
        className={clx(
            "txt-compact-small-plus transition-fg text-ui-fg-muted bg-ui-bg-subtle border-r-ui-border-base flex-1 last:border-r-transparent",
            "inline-flex h-14 w-full flex-1 items-center gap-x-2 border-r px-4 text-left outline-none",

            "group/trigger overflow-hidden text-ellipsis whitespace-nowrap",
            "disabled:bg-ui-bg-disabled disabled:text-ui-fg-muted",
            "hover:bg-ui-bg-subtle-hover",
            "focus:bg-ui-bg-base focus:z-[1]",
            "data-[state=active]:text-ui-fg-base data-[state=active]:bg-ui-bg-base",
            className
        )}
        {...props}
    >
        <ProgressIndicator status={status}/>
        {children}
    </ProgressTabsPrimitives.Trigger>
))
ProgressTabsTrigger.displayName = "ProgressTabs.Trigger"

const ProgressTabsList = React.forwardRef<
    React.ElementRef<typeof ProgressTabsPrimitives.List>,
    React.ComponentPropsWithoutRef<typeof ProgressTabsPrimitives.List>
>(({className, ...props}, ref) => (
    <ProgressTabsPrimitives.List
        ref={ref}
        className={clx("flex items-center justify-between", className)}
        {...props}
    />
))
ProgressTabsList.displayName = "ProgressTabs.List"

const ProgressTabsContent = React.forwardRef<
    React.ElementRef<typeof ProgressTabsPrimitives.Content>,
    React.ComponentPropsWithoutRef<typeof ProgressTabsPrimitives.Content>
>(({className, ...props}, ref) => {
    return (
        <ProgressTabsPrimitives.Content
            ref={ref}
            className={clx("outline-none", className)}
            {...props}
        />
    )
})
ProgressTabsContent.displayName = "ProgressTabs.Content"

const ProgressTabs = Object.assign(ProgressTabsRoot, {
    Trigger: ProgressTabsTrigger,
    List: ProgressTabsList,
    Content: ProgressTabsContent,
})

export {ProgressTabs}
