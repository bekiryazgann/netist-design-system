import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, EllipsisHorizontal } from "@medusajs/icons"

import {clx} from "@/utils/clx";

const Root = React.forwardRef<
    HTMLElement,
    React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
}
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Root.displayName = "Breadcrumb"

const List = React.forwardRef<
    HTMLOListElement,
    React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
    <ol
        ref={ref}
        className={clx(
            "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
            className
        )}
        {...props}
    />
))
List.displayName = "BreadcrumbList"

const Item = React.forwardRef<
    HTMLLIElement,
    React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
    <li
        ref={ref}
        className={clx("inline-flex items-center gap-1.5", className)}
        {...props}
    />
))
Item.displayName = "BreadcrumbItem"

const Link = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
}
>(({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a"

    return (
        <Comp
            ref={ref}
            className={clx("transition-colors hover:text-foreground", className)}
            {...props}
        />
    )
})
Link.displayName = "BreadcrumbLink"

const Page = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
    <span
        ref={ref}
        role="link"
        aria-disabled="true"
        aria-current="page"
        className={clx("font-normal text-foreground", className)}
        {...props}
    />
))
Page.displayName = "BreadcrumbPage"

const Separator = ({children, className, ...props}: React.ComponentProps<"li">) => (
    <li
        role="presentation"
        aria-hidden="true"
        className={clx("[&>svg]:w-5 [&>svg]:h-5 scale-90", className)}
        {...props}
    >
        {children ?? <ChevronRight />}
    </li>
)
Separator.displayName = "BreadcrumbSeparator"

const Ellipsis = ({className, ...props}: React.ComponentProps<"span">) => (
    <span
        role="presentation"
        aria-hidden="true"
        className={clx("flex h-9 w-9 items-center justify-center", className)}
        {...props}
    >
    <EllipsisHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
Ellipsis.displayName = "BreadcrumbElipssis"

const Breadcrumb = Object.assign(Root, {
    List,
    Item,
    Link,
    Page,
    Separator,
    Ellipsis,
})

export {Breadcrumb}