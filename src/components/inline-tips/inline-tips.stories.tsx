import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { InlineTips } from "./inline-tips"

const meta: Meta<typeof InlineTips> = {
    title: "Components/InlineTips",
    component: InlineTips,
    parameters: {
        layout: "fullscreen"
    }
}

export default meta

type Story = StoryObj<typeof InlineTips>


export const Default: Story = {
    render: () => (
        <div className="flex h-screen w-screen items-center justify-center">
            <InlineTips className="w-[630px]">
                <InlineTips.Tip />
                <InlineTips.Content>
                    <b>Tip:</b> You can always install the storefront at a later point. Netist is a headless backend, so it operates without a storefront by default. You can connect any storefront to it. The Next.js Starter storefront is a good option to use, but you can also build your own storefront later on.
                </InlineTips.Content>
            </InlineTips>
        </div>
    )
}

export const Warning: Story = {
    render: () => (
        <div className="flex h-screen w-screen items-center justify-center">
            <InlineTips className="w-[630px]">
                <InlineTips.Warning />
                <InlineTips.Content>
                    <b>Warning:</b> If you have multiple storage plugins configured, the last plugin declared in the netist-config.js file will be used.
                </InlineTips.Content>
            </InlineTips>
        </div>
    )
}

export const Donts: Story = {
    render: () => (
        <div className="flex h-screen w-screen items-center justify-center">
            <InlineTips className="w-[630px]">
                <InlineTips.Donts />
                <InlineTips.Content>
                    <b>Don’t’s:</b> Don’t use data models if you want to store simple key-value pairs related to a Netist data model. Instead, use the metadata field that modles have, which is an object of custom key-value pairs.
                </InlineTips.Content>
            </InlineTips>
        </div>
    )
}

export const Dos: Story = {
    render: () => (
        <div className="flex h-screen w-screen items-center justify-center">
            <InlineTips className="w-[630px]">
                <InlineTips.Dos />
                <InlineTips.Content>
                    <b>Do’s:</b> Use data models when you want to store data related to your customization in the database.
                </InlineTips.Content>
            </InlineTips>
        </div>
    )
}
