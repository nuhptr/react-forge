import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "./components/button"

/** Args adalah props story yang dapat diubah lewat panel Controls. */
const meta: Meta<typeof Button> = {
    title: "Storybook/Args",
    component: Button,
    argTypes: {
        label: { control: "text", description: "Teks yang ditampilkan tombol" },
        variant: {
            control: "select",
            options: ["primary", "secondary", "danger"],
            description: "Varian warna tombol",
        },
        disabled: { control: "boolean" },
        color: { control: "color" },
    },
    args: { label: "Args Playground", variant: "primary", disabled: false },
}

export default meta

type Story = StoryObj<typeof Button>

/** Story memakai args dari meta, bisa diubah di Controls. */
export const Default: Story = {}

/** Args ditimpa pada level story. */
export const Disabled: Story = {
    args: { label: "Tidak aktif", disabled: true },
}

/** Varian bahaya dengan args berbeda. */
export const Danger: Story = {
    args: { label: "Bahaya", variant: "danger" },
}
