"use client"

import * as TabsPrimitives from "@radix-ui/react-tabs"
import * as React from "react"

import {clx} from "@/utils/clx"

const TabsRoot = (
    props: React.ComponentPropsWithoutRef<typeof TabsPrimitives.Root>
) => {
    return <TabsPrimitives.Root {...props} />
}
TabsRoot.displayName = "Tabs"

const TabsTrigger = React.forwardRef<
    React.ElementRef<typeof TabsPrimitives.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitives.Trigger>
>(({className, children, ...props}, ref) => (
    <TabsPrimitives.Trigger
        ref={ref}
        className={clx(
            "txt-compact-small-plus transition-fg text-ui-fg-subtle inline-flex items-center justify-center rounded-lg border border-transparent bg-transparent px-3 py-1.5 outline-none",
            "hover:text-ui-fg-base",
            "focus:border-ui-border-interactive focus:!shadow-borders-focus focus:bg-ui-bg-base",
            "data-[state=active]:text-ui-fg-base data-[state=active]:bg-ui-bg-base data-[state=active]:shadow-elevation-card-rest",
            className
        )}
        {...props}
    >
        {children}
    </TabsPrimitives.Trigger>
))
TabsTrigger.displayName = "Tabs.Trigger"

const TabsList = React.forwardRef<
    React.ElementRef<typeof TabsPrimitives.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitives.List>
>(({className, ...props}, ref) => (
    <TabsPrimitives.List
        ref={ref}
        className={clx("flex items-center gap-2", className)}
        {...props}
    />
))
TabsList.displayName = "Tabs.List"

const TabsContent = React.forwardRef<
    React.ElementRef<typeof TabsPrimitives.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitives.Content>
>(({className, ...props}, ref) => (
    <TabsPrimitives.Content
        ref={ref}
        className={clx(className)}
        {...props}
    />
))
TabsContent.displayName = "Tabs.Content"

interface TabsContentListProps{
    className?: string,
    children?: any
}

const TabsContentList = ({className, children, ...props}: TabsContentListProps) => (
    <div className={clx("shadow-elevation-card-rest bg-ui-bg-base w-full rounded-lg px-8 pb-8 pt-6 txt-compact-medium text-ui-fg-base mt-4 h-full p-3", className)} {...props}>
        {children}
    </div>
)

TabsContentList.displayName = "Tabs.ContentList"

const Tabs = Object.assign(TabsRoot, {
    Trigger: TabsTrigger,
    List: TabsList,
    Content: TabsContent,
    ContentList: TabsContentList
})

export {Tabs}
