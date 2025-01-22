import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Tag } from "./tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Base: Story = {
  render: () => {
    return (
      <Tag>
        Product <span className="text-gray-500">(4)</span>
      </Tag>
    );
  },
};

export const Large: Story = {
  render: () => {
    return (
      <Tag size="large">
        Product <span className="text-gray-500">(4)</span>
      </Tag>
    );
  },
};
