import type {Meta, StoryObj} from "@storybook/react";
import * as React from "react";
import {Toaster, toast} from "./toast"
import {Button} from "@/components/button";

const meta: Meta<typeof Toaster> = {
    title: "Components/Toast",
    component: Toaster,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type Story = StoryObj<typeof Toaster>;

const ToastDemo = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="grid grid-cols-3 gap-4">
                <Button className="w-full" onClick={() => toast('Event has been created')}> Default Toast </Button>
                <Button className="w-full" onClick={() => toast.message('Event has been created', {description: 'Monday, January 3rd at 6:00pm'})}> Description Toast </Button>
                <Button className="w-full" onClick={() => toast.success('Event has been created')}> Success Toast </Button>
                <Button className="w-full" onClick={() => toast.info('Be at the area 10 minutes before the event time')}> Info Toast </Button>
                <Button className="w-full" onClick={() => toast.warning('Event start time cannot be earlier than 8am')}> Warning Toast </Button>
                <Button className="w-full" onClick={() => toast.error('Event has not been created')}> Error Toast </Button>
                <Button className="w-full" onClick={() => {
                    toast('Event has been created', {
                        action: {
                            label: 'Undo',
                            onClick: () => console.log('Undo')
                        },
                    })
                }}> Action Toast </Button>
                <Button className="w-full" onClick={() => {
                    const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));

                    toast.promise(promise, {
                        loading: 'Loading...',
                        success: (data: any) => {
                            return `${data.name} toast has been added`;
                        },
                        error: 'Error',
                    });
                }}> Promise Toast </Button>
                <Button className="w-full" onClick={() => toast(<div>A custom toast with default styling</div>)}> Custom Toast </Button>
            </div>

            <Toaster />
        </div>
    );
};

export const Default: Story = {
    render: () => <ToastDemo/>,
};

