import type {Meta, StoryObj} from "@storybook/react"
import * as React from "react"

import {Sidebar, useSidebar} from "./sidebar"
import {Separator} from "../separator"
import {Breadcrumb} from "../breadcrumb"
import {Collapsible} from "../collapsible"
import {DropdownMenu} from "../dropdown-menu"
import {Swatch, ArchiveBox, CircleHalfSolid, Map, ChevronRight, Folder, ForwardSolid, EllipsisHorizontal, Trash, ChevronUpDown, ArrowRightOnRectangle, SparklesMiniSolid, CheckCircleSolid, CreditCardSolid, BellAlert} from "@medusajs/icons"
import {Avatar} from "../avatar"

const meta: Meta<typeof Sidebar> = {
    title: "Components/Sidebar",
    component: Sidebar,
    parameters: {
        layout: "fullscreen",
    },
}

export default meta

type Story = StoryObj<typeof Sidebar>


// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Netist Web Techs",
            logo: Swatch,
            plan: "Free",
        },
        {
            name: "Socore Digital Systems",
            logo: Swatch,
            plan: "Free",
        },
        {
            name: "Eskiz.psd Creative Studio",
            logo: Swatch,
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "Playground",
            url: "#",
            icon: ArchiveBox,
            isActive: true,
            items: [
                {
                    title: "History",
                    url: "#",
                },
                {
                    title: "Starred",
                    url: "#",
                },
                {
                    title: "Settings",
                    url: "#",
                },
            ],
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: CircleHalfSolid,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
}

const RealComponent = () => {
    const { isMobile } = useSidebar()
    return (
        <>
            <Sidebar collapsible="icon">
                <Sidebar.Header>
                    {/* <TeamSwitcher teams={data.teams} /> */}
                </Sidebar.Header>
                <Sidebar.Content>
                    <Sidebar.Group>
                        <Sidebar.GroupLabel>Platform</Sidebar.GroupLabel>
                        <Sidebar.Menu>
                            {data.navMain.map((item) => (
                                <Collapsible
                                    key={item.title}
                                    asChild
                                    defaultOpen={item.isActive}
                                    className="group/collapsible"
                                >
                                    <Sidebar.MenuItem>
                                        <Collapsible.Trigger asChild>
                                            <Sidebar.MenuButton tooltip={item.title}>
                                                {item.icon && <item.icon className="scale-80 !w-5 !h-5" />}
                                                <span>{item.title}</span>
                                                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                            </Sidebar.MenuButton>
                                        </Collapsible.Trigger>
                                        <Collapsible.Content>
                                            <Sidebar.MenuSub>
                                                {item.items?.map((subItem) => (
                                                    <Sidebar.MenuSubItem key={subItem.title}>
                                                        <Sidebar.MenuSubButton asChild>
                                                            <a href={subItem.url}>
                                                                <span>{subItem.title}</span>
                                                            </a>
                                                        </Sidebar.MenuSubButton>
                                                    </Sidebar.MenuSubItem>
                                                ))}
                                            </Sidebar.MenuSub>
                                        </Collapsible.Content>
                                    </Sidebar.MenuItem>
                                </Collapsible>
                            ))}
                        </Sidebar.Menu>
                    </Sidebar.Group>
                    <Sidebar.Group className="group-data-[collapsible=icon]:hidden">
                        <Sidebar.GroupLabel>Projects</Sidebar.GroupLabel>
                        <Sidebar.Menu>
                            {data.projects.map((item) => (
                                <Sidebar.MenuItem key={item.name}>
                                    <Sidebar.MenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon className="scale-80 !w-5 !h-5" />
                                            <span>{item.name}</span>
                                        </a>
                                    </Sidebar.MenuButton>
                                    <DropdownMenu>
                                        <DropdownMenu.Trigger asChild>
                                            <Sidebar.MenuAction showOnHover>
                                                <EllipsisHorizontal className="scale-80 !w-5 !h-5" />
                                                <span className="sr-only">More</span>
                                            </Sidebar.MenuAction>
                                        </DropdownMenu.Trigger>
                                        <DropdownMenu.Content
                                            className="w-48 rounded-lg relative z-40"
                                            side={isMobile ? "bottom" : "right"}
                                            align={isMobile ? "end" : "start"}
                                        >
                                            <DropdownMenu.Item>
                                                <Folder className="text-muted-foreground" />
                                                <span>View Project</span>
                                            </DropdownMenu.Item>
                                            <DropdownMenu.Item>
                                                <ForwardSolid className="text-muted-foreground" />
                                                <span>Share Project</span>
                                            </DropdownMenu.Item>
                                            <DropdownMenu.Separator />
                                            <DropdownMenu.Item>
                                                <Trash className="text-muted-foreground" />
                                                <span>Delete Project</span>
                                            </DropdownMenu.Item>
                                        </DropdownMenu.Content>
                                    </DropdownMenu>
                                </Sidebar.MenuItem>
                            ))}
                            <Sidebar.MenuItem>
                                <Sidebar.MenuButton className="text-sidebar-foreground/70">
                                    <EllipsisHorizontal className="text-sidebar-foreground/70" />
                                    <span>More</span>
                                </Sidebar.MenuButton>
                            </Sidebar.MenuItem>
                        </Sidebar.Menu>
                    </Sidebar.Group>
                </Sidebar.Content>
                <Sidebar.Footer>
                    <Sidebar.Menu>
                        <Sidebar.MenuItem>
                            <DropdownMenu>
                                <DropdownMenu.Trigger asChild>
                                    <Sidebar.MenuButton
                                        size="lg"
                                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                    >
                                        <Avatar className="h-8 w-8 rounded-lg" src={data.user.avatar} fallback="CN" />
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-semibold">{data.user.name}</span>
                                            <span className="truncate text-xs">{data.user.email}</span>
                                        </div>
                                        <ChevronUpDown className="ml-auto size-4" />
                                    </Sidebar.MenuButton>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content
                                    className="rounded-lg relative z-40"
                                    side={isMobile ? "bottom" : "right"}
                                    align="end"
                                    sideOffset={4}
                                >
                                    <DropdownMenu.Label className="p-0 font-normal">
                                        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                            <Avatar className="h-8 w-8 rounded-lg" src={data.user.avatar} fallback="CN" />
                                            <div className="grid flex-1 text-left text-sm leading-tight">
                                                <span className="truncate font-semibold">{data.user.name}</span>
                                                <span className="truncate text-xs">{data.user.email}</span>
                                            </div>
                                        </div>
                                    </DropdownMenu.Label>
                                    <DropdownMenu.Separator />
                                    <DropdownMenu.Group>
                                        <DropdownMenu.Item>
                                            <SparklesMiniSolid className="scale-90" />
                                            Upgrade to Pro
                                        </DropdownMenu.Item>
                                    </DropdownMenu.Group>
                                    <DropdownMenu.Separator />
                                    <DropdownMenu.Group>
                                        <DropdownMenu.Item>
                                            <CheckCircleSolid className="scale-90 mr-1" />
                                            Account
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Item>
                                            <CreditCardSolid className="scale-90" />
                                            Billing
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Item>
                                            <BellAlert className="scale-90" />
                                            Notifications
                                        </DropdownMenu.Item>
                                    </DropdownMenu.Group>
                                    <DropdownMenu.Separator />
                                    <DropdownMenu.Item>
                                        <ArrowRightOnRectangle className="scale-90" />
                                        Log out
                                    </DropdownMenu.Item>
                                </DropdownMenu.Content>
                            </DropdownMenu>
                        </Sidebar.MenuItem>
                    </Sidebar.Menu>
                </Sidebar.Footer>
                <Sidebar.Rail />
            </Sidebar>
            <Sidebar.Inset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <Sidebar.Trigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <Breadcrumb.List>
                                <Breadcrumb.Item className="hidden md:block">
                                    <Breadcrumb.Link href="#">
                                        Building Your Application
                                    </Breadcrumb.Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Separator className="hidden md:block" />
                                <Breadcrumb.Item>
                                    <Breadcrumb.Page>Data Fetching</Breadcrumb.Page>
                                </Breadcrumb.Item>
                            </Breadcrumb.List>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="aspect-video rounded-xl bg-muted/50" />
                        <div className="aspect-video rounded-xl bg-muted/50" />
                        <div className="aspect-video rounded-xl bg-muted/50" />
                    </div>
                    <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
                </div>
            </Sidebar.Inset>
        </>
    )
}

const SheetDemo = () => {
    return (
        <Sidebar.Provider>
            <RealComponent />
        </Sidebar.Provider>
    )
}

export const Default: Story = {
    render: () => <SheetDemo/>,
}
