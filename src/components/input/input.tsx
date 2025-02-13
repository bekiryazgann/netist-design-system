"use client"

import {Eye, EyeOff, SearchRefraction} from "@netist/icons"
import { VariantProps, cva } from "class-variance-authority"
import * as React from "react"

import { clx } from "@/utils/clx"

const inputBaseStyles = clx(
  "caret-ui-fg-base bg-ui-bg-field hover:bg-ui-bg-field-hover shadow-borders-base placeholder-ui-fg-muted text-ui-fg-base transition-fg relative w-full appearance-none rounded-md outline-none",
  "focus:shadow-borders-interactive-with-active",
  "disabled:text-ui-fg-disabled disabled:!bg-ui-bg-disabled disabled:placeholder-ui-fg-disabled disabled:cursor-not-allowed",
  "aria-[invalid=true]:!shadow-borders-error  invalid:!shadow-borders-error w-full"
)

const inputVariants = cva(
  clx(
    inputBaseStyles,
    "[&::--webkit-search-cancel-button]:hidden [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
  ),
  {
    variants: {
      size: {
        base: "txt-compact-medium h-10 px-3 py-[9px]",
        small: "txt-compact-small h-8 px-2 py-[5px]",
      },
    },
    defaultVariants: {
      size: "base",
    },
  }
)

const Input = React.forwardRef<
  HTMLInputElement,
  VariantProps<typeof inputVariants> &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">
>(({ className, type, size = "base", ...props }, ref) => {
  const [typeState, setTypeState] = React.useState(type)

  const isPassword = type === "password"
  const isSearch = type === "search"

  return (
    <div className={clx(
        "relative",
        className
    )}>
      <input
        ref={ref}
        type={isPassword ? typeState : type}
        className={clx(
          inputVariants({ size: size }),
          {
            "pr-11": isPassword && size === "base",
            "pl-11": isSearch && size === "base",
            "pr-9": isPassword && size === "small",
            "pl-9": isSearch && size === "small",
          },
          className
        )}
        {...props}
      />
      {isSearch && (
        <div
          className={clx(
            "text-ui-fg-muted absolute bottom-0 left-0 flex items-center justify-center",
            {
              "h-10 w-11": size === "base",
              "h-8 w-9": size === "small",
            }
          )}
          role="img"
        >
          <SearchRefraction />
        </div>
      )}
      {isPassword && (
        <div
          className={clx(
            "absolute bottom-0 right-0 flex w-11 items-center justify-center",
            {
              "h-10 w-11": size === "base",
              "h-8 w-9": size === "small",
            }
          )}
        >
          <button
            className="text-ui-fg-muted hover:text-ui-fg-base focus:text-ui-fg-base focus:shadow-borders-interactive-w-focus active:text-ui-fg-base h-fit w-fit rounded-sm outline-none transition-all"
            type="button"
            onClick={() => {
              setTypeState(typeState === "password" ? "text" : "password")
            }}
          >
            <span className="sr-only">
              {typeState === "password" ? "Show password" : "Hide password"}
            </span>
            {typeState === "password" ? <Eye /> : <EyeOff />}
          </button>
        </div>
      )}
    </div>
  )
})
Input.displayName = "Input"

export { Input, inputBaseStyles }
