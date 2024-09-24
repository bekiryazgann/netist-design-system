import type {Meta, StoryObj} from "@storybook/react"
import * as React from "react"

import {Button} from "@/components/button"
import {Modal} from "./modal"
import {Tabs} from "@/components/tabs";
import {TabsContent} from "@radix-ui/react-tabs";

const meta: Meta<typeof Modal> = {
    title: "Components/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
    render: () => {
        return (
            <Modal>
                <Modal.Trigger asChild>
                    <Button>Open Modal</Button>
                </Modal.Trigger>
                <Modal.Content>
                    <Modal.Header>
                        <Modal.Title>Delete something</Modal.Title>
                        <Modal.Description>
                            Are you sure? This cannot be undone.
                        </Modal.Description>
                    </Modal.Header>
                    <Modal.Body>
                        <Tabs defaultValue="email">
                            <Tabs.List>
                                <Tabs.Trigger value={"email"}>Email</Tabs.Trigger>
                                <Tabs.Trigger value={"sms"}>SMS</Tabs.Trigger>
                                <Tabs.Trigger value={"push"}>Push</Tabs.Trigger>
                            </Tabs.List>
                            <TabsContent value="email" className="pt-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et impedit pariatur perferendis quidem. A asperiores consequatur cupiditate, debitis dolore ea eius illum ipsa minus necessitatibus nostrum repellat sapiente similique totam ullam ut velit! Animi beatae cumque dolor dolorem, harum ipsum magnam minus optio, perspiciatis quam quisquam, tempore vel veritatis. Numquam. </TabsContent>
                            <TabsContent value="sms" className="pt-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum incidunt magni nobis praesentium sunt, ut? A adipisci alias consectetur culpa deleniti eum impedit ipsam itaque, libero mollitia neque nobis nostrum perferendis quasi vero? A, accusantium animi consequuntur esse quibusdam quos totam. Est magnam, sapiente! Adipisci debitis, numquam? Enim, similique! </TabsContent>
                            <TabsContent value="push" className="pt-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa dicta eaque labore obcaecati odio qui saepe tempora. Accusamus ad asperiores consequuntur culpa cumque deleniti deserunt doloremque eaque eligendi error eum eveniet excepturi exercitationem ipsam iste labore laboriosam maxime necessitatibus nemo numquam perferendis quidem quis, saepe sequi soluta tempore ullam? </TabsContent>
                        </Tabs>
                    </Modal.Body>
                    <Modal.Footer>
                        <Modal.Cancel>Cancel</Modal.Cancel>
                        <Modal.Action>Delete</Modal.Action>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        )
    },
}
