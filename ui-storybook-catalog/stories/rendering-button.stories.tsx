import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "./components/button"

/** Story paling sederhana: merender satu komponen Button. */
const meta: Meta<typeof Button> = {
    title: "Storybook/Rendering Button",
    component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

/** Story default. */
export const Default: Story = {
    args: { label: "Klik Saya" },
}
