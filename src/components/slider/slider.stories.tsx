import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "./slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    className: "w-[320px]",
    defaultValue: [10],
  },
};
