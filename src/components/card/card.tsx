import * as React from "react"

import {clx} from "@/utils/clx";

const Root = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={clx(
            "rounded-xl border bg-card text-card-foreground",
            className
        )}
        {...props}
    />
))
Root.displayName = "Card"

const Header = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={clx("flex flex-col space-y-1.5 p-6", className)}
        {...props}
    />
))
Header.displayName = "Card.Header"

const Title = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={clx("font-semibold leading-none tracking-tight", className)}
        {...props}
    />
))
Title.displayName = "Card.Title"

const Description = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={clx("text-sm text-muted-foreground", className)}
        {...props}
    />
))
Description.displayName = "Card.Description"

const Content = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={clx("p-6 pt-0", className)} {...props} />
))
Content.displayName = "Card.Content"

const Footer = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={clx("flex items-center p-6 pt-0", className)}
        {...props}
    />
))
Footer.displayName = "Card.Footer"

const Card = Object.assign(Root, {
    Header,
    Footer,
    Title,
    Description,
    Content
})

export {Card}