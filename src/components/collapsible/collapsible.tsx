import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Root = CollapsiblePrimitive.Root

const Trigger = CollapsiblePrimitive.CollapsibleTrigger

const Content = CollapsiblePrimitive.CollapsibleContent


const Collapsible = Object.assign(Root, {
    Trigger,
    Content,
})

export {Collapsible}