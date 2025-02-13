import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "@netist/icons"
import {clx} from "@/utils/clx";

const Root = SheetPrimitive.Root
const Trigger = SheetPrimitive.Trigger
const Close = SheetPrimitive.Close
const Portal = SheetPrimitive.Portal

const Overlay = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <SheetPrimitive.Overlay
        className={clx(
            "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className
        )}
        {...props}
        ref={ref}
    />
))
Overlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
    "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
    {
        variants: {
            side: {
                top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                bottom:
                    "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                right:
                    "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
            },
        },
        defaultVariants: {
            side: "right",
        },
    }
)

interface SheetContentProps
    extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
        VariantProps<typeof sheetVariants> {}

const Content = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Content>,
    SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
    <Portal>
        <Overlay />
        <SheetPrimitive.Content
            ref={ref}
            className={clx(sheetVariants({ side }), className)}
            {...props}
        >
            <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </SheetPrimitive.Close>
            {children}
        </SheetPrimitive.Content>
    </Portal>
))
Content.displayName = SheetPrimitive.Content.displayName

const Header = ({
                         className,
                         ...props
                     }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={clx(
            "flex flex-col space-y-2 text-center sm:text-left",
            className
        )}
        {...props}
    />
)
Header.displayName = "SheetHeader"

const Footer = ({
                         className,
                         ...props
                     }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={clx(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            className
        )}
        {...props}
    />
)
Footer.displayName = "SheetFooter"

const Title = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
    <SheetPrimitive.Title
        ref={ref}
        className={clx("text-lg font-semibold text-foreground", className)}
        {...props}
    />
))
Title.displayName = SheetPrimitive.Title.displayName

const Description = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
    <SheetPrimitive.Description
        ref={ref}
        className={clx("text-sm text-muted-foreground", className)}
        {...props}
    />
))
Description.displayName = SheetPrimitive.Description.displayName

const Sheet = Object.assign(Root, {
    Portal,
    Overlay,
    Trigger,
    Close,
    Content,
    Header,
    Footer,
    Title,
    Description,
})

export {Sheet}
