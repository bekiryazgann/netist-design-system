import type {Meta, StoryObj} from "@storybook/react"
import * as React from "react"

import {Separator} from "./separator"

const meta: Meta<typeof Separator> = {
    title: "Components/Separator",
    component: Separator,
    parameters: {
        layout: "fullscreen",
    },
}

export default meta

type Story = StoryObj<typeof Separator>

const SeparatorDemo = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div>
                <div className="space-y-1">
                    <h4 className="text-sm font-medium leading-none">Separator</h4>
                    <p className="text-sm text-muted-foreground">
                        An developed by Netist Web Techs
                    </p>
                </div>
                <Separator className="my-4"/>
                <div className="flex h-5 items-center space-x-4 text-sm">
                    <div>Blog</div>
                    <Separator orientation="vertical"/>
                    <div>Docs</div>
                    <Separator orientation="vertical"/>
                    <div>Source</div>
                </div>
            </div>
        </div>
    )
}

export const Default: Story = {
    render: () => <SeparatorDemo/>,
}
