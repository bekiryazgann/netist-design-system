import type {Meta, StoryObj} from "@storybook/react";
import * as React from "react";

import {Tabs} from "./tabs";

const meta: Meta<typeof Tabs> = {
    title: "Components/Tabs",
    component: Tabs,
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const Demo = () => {
    return (
        <div className="h-screen max-h-[500px] w-screen max-w-[700px]">
            <Tabs defaultValue="tab1">
                <Tabs.List>
                    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
                    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
                    <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
                </Tabs.List>
                <Tabs.ContentList>
                    <Tabs.Content value="tab1">Tab 1 content</Tabs.Content>
                    <Tabs.Content value="tab2">Tab 2 content</Tabs.Content>
                    <Tabs.Content value="tab3">Tab 3 content</Tabs.Content>
                </Tabs.ContentList>
            </Tabs>
        </div>
    );
};

export const Default: Story = {
    render: () => <Demo/>,
};
