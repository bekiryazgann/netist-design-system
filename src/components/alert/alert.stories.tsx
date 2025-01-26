import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { Alert } from "./alert"

const meta: Meta<typeof Alert> = {
    title: "Components/Alert",
    component: Alert,
    parameters: {
        layout: "fullscreen"
    },
}

export default meta

type Story = StoryObj<typeof Alert>


export const Default: Story = {
    render: () => (
        <div className="flex h-screen w-screen items-center justify-center">
            <Alert>
                <Alert.Icon>
                    <Alert.Icon.Info />
                </Alert.Icon>
                <Alert.Header>
                    <Alert.Title>Insert your alert title here!</Alert.Title>
                    <Alert.Content>
                        <Alert.Description> Insert the alert description here. It would look better as two lines of text. </Alert.Description>
                        <Alert.Link.Container>
                            <Alert.Link href="https://netist.net/" target="_blank">Upgrade</Alert.Link>
                            <Alert.Link href="https://netist.net/" target="_blank">Learn more</Alert.Link>
                        </Alert.Link.Container>
                    </Alert.Content>
                </Alert.Header>
                <Alert.Close />
            </Alert>
        </div>
    )
}

export const DefaultInPage: Story = {
    render: () => (
        <div className="flex h-screen w-screen items-center justify-center">
            <Alert className="w-[540px]">
                <Alert.Icon>
                    <Alert.Icon.Info />
                </Alert.Icon>
                <Alert.Header>
                    <Alert.Title>
                        Insert your alert title here!
                        <Alert.Link icon={true} href="https://netist.net/" target="_blank" className="border-r border-r-zinc-200 pr-2">Learn more</Alert.Link>
                    </Alert.Title>
                </Alert.Header>
                <Alert.Close />
            </Alert>
        </div>
    )
}

export const Warning: Story = {
    render: () => (
        <div className="flex h-screen w-screen items-center justify-center">
            <Alert>
                <Alert.Icon>
                    <Alert.Icon.Warning className="text-orange-400"/>
                </Alert.Icon>
                <Alert.Header>
                    <Alert.Title>Insert your alert title here!</Alert.Title>
                    <Alert.Content>
                        <Alert.Description> Insert the alert description here. It would look better as two lines of text. </Alert.Description>
                        <Alert.Link.Container>
                            <Alert.Link href="https://netist.net/" target="_blank">Upgrade</Alert.Link>
                            <Alert.Link href="https://netist.net/" target="_blank">Learn more</Alert.Link>
                        </Alert.Link.Container>
                    </Alert.Content>
                </Alert.Header>
                <Alert.Close />
            </Alert>
        </div>
    )
}

export const WarningInPage: Story = {
    render: () => (
        <div className="flex h-screen w-screen items-center justify-center">
            <Alert className="w-[540px]">
                <Alert.Icon>
                    <Alert.Icon.Warning className="text-orange-400"/>
                </Alert.Icon>
                <Alert.Header>
                    <Alert.Title>
                        Insert your alert title here!
                        <Alert.Link icon={true} href="https://netist.net/" target="_blank" className="border-r border-r-zinc-200 pr-2">Learn more</Alert.Link>
                    </Alert.Title>
                </Alert.Header>
                <Alert.Close />
            </Alert>
        </div>
    )
}

export const Success: Story = {
    render: () => (
        <div className="flex h-screen w-screen items-center justify-center">
            <Alert>
                <Alert.Icon>
                    <Alert.Icon.Success className="text-green-500" />
                </Alert.Icon>
                <Alert.Header>
                    <Alert.Title>Insert your alert title here!</Alert.Title>
                    <Alert.Content>
                        <Alert.Description> Insert the alert description here. It would look better as two lines of text. </Alert.Description>
                        <Alert.Link.Container>
                            <Alert.Link href="https://netist.net/" target="_blank">Upgrade</Alert.Link>
                            <Alert.Link href="https://netist.net/" target="_blank">Learn more</Alert.Link>
                        </Alert.Link.Container>
                    </Alert.Content>
                </Alert.Header>
                <Alert.Close />
            </Alert>
        </div>
    )
}

export const SuccessInPage: Story = {
    render: () => (
        <div className="flex h-screen w-screen items-center justify-center">
            <Alert className="w-[540px]">
                <Alert.Icon>
                    <Alert.Icon.Success className="text-green-500" />
                </Alert.Icon>
                <Alert.Header>
                    <Alert.Title>
                        Insert your alert title here!
                        <Alert.Link icon={true} href="https://netist.net/" target="_blank" className="border-r border-r-zinc-200 pr-2">Learn more</Alert.Link>
                    </Alert.Title>
                </Alert.Header>
                <Alert.Close />
            </Alert>
        </div>
    )
}

export const Error: Story = {
    render: () => (
        <div className="flex h-screen w-screen items-center justify-center">
            <Alert>
                <Alert.Icon>
                    <Alert.Icon.Success className="text-red-500" />
                </Alert.Icon>
                <Alert.Header>
                    <Alert.Title>Insert your alert title here!</Alert.Title>
                    <Alert.Content>
                        <Alert.Description> Insert the alert description here. It would look better as two lines of text. </Alert.Description>
                        <Alert.Link.Container>
                            <Alert.Link href="https://netist.net/" target="_blank">Upgrade</Alert.Link>
                            <Alert.Link href="https://netist.net/" target="_blank">Learn more</Alert.Link>
                        </Alert.Link.Container>
                    </Alert.Content>
                </Alert.Header>
                <Alert.Close />
            </Alert>
        </div>
    )
}

export const ErrorInPage: Story = {
    render: () => (
        <div className="flex h-screen w-screen items-center justify-center">
            <Alert className="w-[540px]">
                <Alert.Icon>
                    <Alert.Icon.Success className="text-red-500" />
                </Alert.Icon>
                <Alert.Header>
                    <Alert.Title>
                        Insert your alert title here!
                        <Alert.Link icon={true} href="https://netist.net/" target="_blank" className="border-r border-r-zinc-200 pr-2">Learn more</Alert.Link>
                    </Alert.Title>
                </Alert.Header>
                <Alert.Close />
            </Alert>
        </div>
    )
}
