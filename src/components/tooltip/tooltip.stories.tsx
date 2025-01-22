import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { InfoCircle } from "@netist/icons";
import { Tooltip } from "./tooltip";
import {IconButton} from "@/components/icon-button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    side: {
      options: ["top", "bottom", "left", "right"],
      control: { type: "radio" },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "The quick brown fox jumps over the lazy dog.",
    side: "top",
    children: (
        <div>
          <InfoCircle width={16} height={16} />
        </div>
    ),
  },
};
