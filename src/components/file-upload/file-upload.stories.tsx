import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { FileUpload } from "./file-upload"

const meta: Meta<typeof FileUpload> = {
    title: "Components/FileUpload",
    component: FileUpload,
    parameters: {
        layout: "fullscreen"
    },
}

export default meta

type Story = StoryObj<typeof FileUpload>

export const Default: Story = {
    render: () => (
        <div className="flex h-screen w-screen items-center justify-center">
            <FileUpload>
                <FileUpload.Trigger />
            </FileUpload>
        </div>
    )
}
export const Disabled: Story = {
    render: () => (
        <div className="flex h-screen w-screen items-center justify-center">
            <FileUpload disabled={true}>
                <FileUpload.Trigger/>
            </FileUpload>
        </div>
    )
}
