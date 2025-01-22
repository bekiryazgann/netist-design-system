import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Chart } from "./chart";
import {Card} from "../card"
import { LabelList, RadialBar, RadialBarChart } from "recharts"
import {TrendUp01} from "@netist/icons"


const meta: Meta<typeof Chart> = {
    title: "Components/Chart",
    component: Chart,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type Story = StoryObj<typeof Chart>;

export const Default: Story = {
    render: () => {
        return (
            <div className="flex h-screen w-screen items-center justify-center">
                <Card className="flex flex-col">
                    <Card.Header className="items-center pb-0">
                        <Card.Title>Radial Chart - Label</Card.Title>
                        <Card.Description>January - June 2024</Card.Description>
                    </Card.Header>
                    <Card.Content className="flex-1 pb-0">
                        <Chart
                            config={{
                                visitors: {
                                    label: "Visitors",
                                },
                                chrome: {
                                    label: "Chrome",
                                    color: "hsl(var(--chart-1))",
                                },
                                safari: {
                                    label: "Safari",
                                    color: "hsl(var(--chart-2))",
                                },
                                firefox: {
                                    label: "Firefox",
                                    color: "hsl(var(--chart-3))",
                                },
                                edge: {
                                    label: "Edge",
                                    color: "hsl(var(--chart-4))",
                                },
                                other: {
                                    label: "Other",
                                    color: "hsl(var(--chart-5))",
                                },
                            }}
                            className="mx-auto aspect-square max-h-[250px]"
                        >
                            <RadialBarChart
                                data={[
                                    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
                                    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
                                    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
                                    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
                                    { browser: "other", visitors: 90, fill: "var(--color-other)" },
                                ]}
                                startAngle={-90}
                                endAngle={380}
                                innerRadius={30}
                                outerRadius={110}
                            >
                                <Chart.Tooltip
                                    cursor={false}
                                    content={<Chart.TooltipContent hideLabel nameKey="browser" />}
                                />
                                <RadialBar dataKey="visitors" background>
                                    <LabelList
                                        position="insideStart"
                                        dataKey="browser"
                                        className="fill-white capitalize mix-blend-luminosity"
                                        fontSize={11}
                                    />
                                </RadialBar>
                            </RadialBarChart>
                        </Chart>
                    </Card.Content>
                    <Card.Footer className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Trending up by 5.2% this month <TrendUp01 className="h-4 w-4" />
                        </div>
                        <div className="leading-none text-muted-foreground">
                            Showing total visitors for the last 6 months
                        </div>
                    </Card.Footer>
                </Card>
            </div>
        );
    },
};
