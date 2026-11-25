import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button, type ButtonProps } from "./components/button"

/** Story dengan TypeScript: Meta<Props> dan StoryObj<Props>. */
const meta: Meta<ButtonProps> = {
    title: "Storybook/TypeScript",
    component: Button,
    argTypes: {
        label: { control: "text" },
        disabled: { control: "boolean" },
        color: { control: "color" },
    },
}

export default meta

type Story = StoryObj<ButtonProps>

export const Default: Story = {
    args: { label: "Click Me", disabled: false },
}

export const Disabled: Story = {
    args: { label: "Disabled", disabled: true },
}

export const Red: Story = {
    args: { label: "Red", color: "#ff0000" },
}
