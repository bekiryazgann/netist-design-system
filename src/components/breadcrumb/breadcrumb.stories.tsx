import type {Meta, StoryObj} from "@storybook/react"
import * as React from "react"

import {EllipsisHorizontal, PencilSquare, Plus, Trash} from "@medusajs/icons";

import {Breadcrumb} from "./breadcrumb"
import {DropdownMenu} from "../dropdown-menu"
import {IconButton} from "../icon-button"

const meta: Meta<typeof Breadcrumb> = {
    title: "Components/Breadcrumb",
    component: Breadcrumb,
    parameters: {
        layout: "fullscreen",
    },
}

export default meta

type Story = StoryObj<typeof Breadcrumb>

const BreadcrumbDemo = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <Breadcrumb>
                <Breadcrumb.List>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <DropdownMenu>
                            <DropdownMenu.Trigger asChild>
                                <EllipsisHorizontal />
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Item className="gap-x-2">
                                    Documentation
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="gap-x-2">
                                    Themes
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="gap-x-2">
                                    Github
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="/docs/components">Components</Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
                    </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb>
        </div>
    )
}

export const Default: Story = {
    render: () => <BreadcrumbDemo/>,
}
