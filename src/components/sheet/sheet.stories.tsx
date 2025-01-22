import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Sheet } from "./sheet";
import { Button } from "../button";
import { Label } from "../label";
import { Input } from "../input";

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Sheet>;

const SheetDemo = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Sheet>
        <Sheet.Trigger asChild>
          <Button variant="primary">Open</Button>
        </Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Header>
            <Sheet.Title>Edit profile</Sheet.Title>
            <Sheet.Description>
              Make changes to your profile here. Click save when you're done.
            </Sheet.Description>
          </Sheet.Header>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <Sheet.Footer>
            <Sheet.Close asChild>
              <Button type="submit">Save changes</Button>
            </Sheet.Close>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet>
    </div>
  );
};

export const Default: Story = {
  render: () => <SheetDemo />,
};
