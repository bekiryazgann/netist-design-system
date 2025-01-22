import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Collapsible } from "./collapsible";
import {ChevronDown} from "@netist/icons"
import { IconButton } from "@/components/icon-button";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

const CollapsibleDemo = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            @bekiryazgann starred 3 repositories
          </h4>
          <Collapsible.Trigger asChild>
            <IconButton variant="transparent">
              <ChevronDown />
              <span className="sr-only">Toggle</span>
            </IconButton>
          </Collapsible.Trigger>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @radix-ui/primitives
        </div>
        <Collapsible.Content className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @stitches/react
          </div>
        </Collapsible.Content>
      </Collapsible>
    </div>
  );
};

export const Default: Story = {
  render: () => <CollapsibleDemo />,
};
