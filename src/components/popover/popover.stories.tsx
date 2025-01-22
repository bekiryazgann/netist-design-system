import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Button } from "@/components/button";
import { Popover } from "./popover";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => {
    return (
      <Popover>
        <Popover.Trigger asChild>
          <Button>Edit Variant</Button>
        </Popover.Trigger>
        <Popover.Content className="w-[372px]" align="center">
          <div className="p-3 flex flex-col gap-1">
            <h3 className="text-black font-medium">
              {" "}
              Explore AlignUI using this side navigation{" "}
            </h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere?
            </p>
          </div>
          <Popover.Seperator />
          <div className="px-3 py-3 flex items-center justify-between">
            <span className="text-gray-600 text-sm">Step 2 of 4</span>
            <div className="flex items-center gap-3">
              <Button className="px-6" variant="secondary">
                {" "}
                Back{" "}
              </Button>
              <Button className="px-6" variant="primary">
                {" "}
                Next{" "}
              </Button>
            </div>
          </div>
        </Popover.Content>
      </Popover>
    );
  },
};
