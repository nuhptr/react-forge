import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "./components/button"

/** Parameters: konfigurasi perilaku story (layout, viewport, background). */
const meta: Meta<typeof Button> = {
    title: "Storybook/Parameters",
    component: Button,
    parameters: {
        layout: "centered",
        viewport: { defaultViewport: "mobile1" },
        backgrounds: { default: "light" },
    },
}

export default meta

type Story = StoryObj<typeof Button>

export const Centered: Story = {
    args: { label: "Tengah" },
}
