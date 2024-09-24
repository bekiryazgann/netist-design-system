import type { Meta, StoryObj } from "@storybook/react"

import { ProgressBar } from "./progress-bar"

const meta: Meta<typeof ProgressBar> = {
    title: "Components/ProgressBar",
    component: ProgressBar,
    parameters: {
        layout: "centered",
    },
}

export default meta

type Story = StoryObj<typeof ProgressBar>

export const BlueLine: Story = {
    args: {
        className: "w-[400px]",
        color: "blue",
        size: 40
    },
}

export const RedLine: Story = {
    args: {
        className: "w-[400px]",
        color: "red",
        size: 40
    },
}

export const OrangeLine: Story = {
    args: {
        className: "w-[400px]",
        color: "orange",
        size: 40
    },
}

export const GreenLine: Story = {
    args: {
        className: "w-[400px]",
        color: "green",
        size: 40
    },
}
