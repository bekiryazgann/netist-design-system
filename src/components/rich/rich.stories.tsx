import type {Meta, StoryObj} from "@storybook/react";
import * as React from "react";

import {Rich} from "./rich";

const meta: Meta<typeof Rich> = {
    title: "Components/Rich",
    component: Rich,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type Story = StoryObj<typeof Rich>;

const RichDemo = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <Rich className="w-[700px]">
                <Rich.Toolbar/>
                <Rich.Content/>
                <Rich.BottomBar/>
            </Rich>
        </div>
    );
};

export const Default: Story = {
    render: () => <RichDemo/>,
};
