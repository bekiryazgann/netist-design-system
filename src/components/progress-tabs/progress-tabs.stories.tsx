import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Container } from "../container";
import { ProgressTabs } from "./progress-tabs";

const meta: Meta<typeof ProgressTabs> = {
  title: "Components/ProgressTabs",
  component: ProgressTabs,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ProgressTabs>;

const Demo = () => {
  return (
    <div className="h-screen max-h-[500px] max-w-[700px] w-screen overflow-hidden p-4">
      <Container className="h-full w-full overflow-hidden p-0">
        <ProgressTabs defaultValue="tab1">
          <ProgressTabs.List>
            <ProgressTabs.Trigger value="tab1" status="not-started">Not Started</ProgressTabs.Trigger>
            <ProgressTabs.Trigger value="tab2" status="in-progress">In Progress</ProgressTabs.Trigger>
            <ProgressTabs.Trigger value="tab3" status="completed">Completed</ProgressTabs.Trigger>
          </ProgressTabs.List>
          <div className="txt-compact-medium text-ui-fg-base border-ui-border-base h-full border-t p-3">
            <ProgressTabs.Content value="tab1">
              Not Started Content
            </ProgressTabs.Content>
            <ProgressTabs.Content value="tab2">
              In Progress Content
            </ProgressTabs.Content>
            <ProgressTabs.Content value="tab3">
              Completed Content
            </ProgressTabs.Content>
          </div>
        </ProgressTabs>
      </Container>
    </div>
  );
};

export const Default: Story = {
  render: () => <Demo />,
};
