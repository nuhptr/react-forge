import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "./components/button"

/** Variasi story dan penamaan ulang (storyName). */
const meta: Meta<typeof Button> = {
    title: "Storybook/Variations & Renaming",
    component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: { variant: "primary", label: "Primary" },
    name: "Blue Button",
}

export const Secondary: Story = {
    args: { variant: "secondary", label: "Secondary" },
    name: "Green Button",
}

export const Danger: Story = {
    args: { variant: "danger", label: "Danger" },
    name: "Red Button",
}
