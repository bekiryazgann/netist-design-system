import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { clx } from "@/utils/clx"
import { Loading02 } from "@netist/icons"

const buttonVariants = cva(
  clx(
    "transition-fg relative inline-flex w-fit items-center justify-center overflow-hidden rounded-md outline-none",
    "disabled:bg-ui-bg-disabled disabled:border-ui-border-base disabled:text-ui-fg-disabled disabled:shadow-buttons-neutral disabled:after:hidden",
    "after:transition-fg after:absolute after:inset-0 after:content-['']"
  ),
  {
    variants: {
      variant: {
        primary: clx(
          "shadow-buttons-inverted text-ui-fg-on-inverted bg-ui-button-inverted after:button-inverted-gradient",
          "hover:bg-ui-button-inverted-hover hover:after:button-inverted-hover-gradient",
          "active:bg-ui-button-inverted-pressed active:after:button-inverted-pressed-gradient",
          "focus:!shadow-buttons-inverted-focus"
        ),
        secondary: clx(
          "shadow-buttons-neutral text-ui-fg-base bg-ui-button-neutral after:button-neutral-gradient",
          "hover:bg-ui-button-neutral-hover hover:after:button-neutral-hover-gradient",
          "active:bg-ui-button-neutral-pressed active:after:button-neutral-pressed-gradient",
          "focus:shadow-buttons-neutral-focus"
        ),
        transparent: clx(
          "after:hidden",
          "text-ui-fg-base bg-ui-button-transparent",
          "hover:bg-ui-button-transparent-hover",
          "active:bg-ui-button-transparent-pressed",
          "focus:shadow-buttons-neutral-focus focus:bg-ui-bg-base",
          "disabled:!bg-transparent disabled:!shadow-none"
        ),
        danger: clx(
          "shadow-buttons-colored shadow-buttons-danger text-ui-fg-on-color bg-ui-button-danger after:button-danger-gradient",
          "hover:bg-ui-button-danger-hover hover:after:button-danger-hover-gradient",
          "active:bg-ui-button-danger-pressed active:after:button-danger-pressed-gradient",
          "focus:shadow-buttons-danger-focus"
        ),
      },
      size: {
        base: "txt-compact-small-plus gap-x-1.5 px-5 py-1.5",
        large: "txt-compact-medium-plus gap-x-1.5 px-6 py-2.5",
        xlarge: "txt-compact-large-plus gap-x-1.5 px-7 py-3.5",
      },
    },
    defaultVariants: {
      size: "base",
      variant: "primary",
    },
  }
)

interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "base",
      className,
      asChild = false,
      children,
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : "button"

    const renderInner = () => {
      if (isLoading) {
        return (
          <span className="pointer-events-none">
            <div
              className={clx(
                "bg-ui-bg-disabled absolute inset-0 flex items-center justify-center rounded-md"
              )}
            >
              <Loading02 className="animate-spin animate-pulse" />
            </div>
            {children}
          </span>
        )
      }

      return children
    }

    return (
      <Component
        ref={ref}
        {...props}
        className={clx(buttonVariants({ variant, size }), className)}
        disabled={disabled || isLoading}
      >
        {renderInner()}
      </Component>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
