import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "./components/button"

/** ArgTypes: mengontrol props lewat panel Controls. */
const meta: Meta<typeof Button> = {
    title: "Storybook/ArgTypes",
    component: Button,
    argTypes: {
        label: { control: "text", description: "Teks tombol" },
        variant: {
            control: "select",
            options: ["primary", "secondary", "danger"],
        },
        disabled: { control: "boolean" },
        color: { control: "color" },
    },
}

export default meta

type Story = StoryObj<typeof Button>

export const Playground: Story = {
    args: { label: "Ubah Saya", variant: "primary", disabled: false },
}
