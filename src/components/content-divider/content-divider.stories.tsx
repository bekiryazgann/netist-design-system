import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { ContentDivider } from "./content-divider";
import { Button } from "@/components/button";

const meta: Meta<typeof ContentDivider> = {
  title: "Components/ContentDivider",
  component: ContentDivider,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ContentDivider>;

export const Default: Story = {
  render: () => {
    return (
      <ContentDivider className="w-[480px]">
        <Button>Publish</Button>
        <Button variant="secondary">Publish</Button>
        <Button variant="transparent">Publish</Button>
        <Button variant="danger">Publish</Button>
      </ContentDivider>
    );
  },
};
