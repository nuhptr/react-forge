import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "./components/button"

/** Dekorator meta membungkus semua story dalam file ini. */
const meta: Meta<typeof Button> = {
    title: "Storybook/Decorators",
    component: Button,
    decorators: [
        (Story) => (
            <div className="rounded-xl border border-blue-400 bg-blue-50 p-6">
                <Story />
            </div>
        ),
    ],
}

export default meta

type Story = StoryObj<typeof Button>

/** Story hanya memakai dekorator level meta. */
export const WithMetaDecorator: Story = {
    args: { label: "Dekorasi meta" },
}

/** Story menambah dekorator lokal di atas dekorator meta. */
export const WithLocalDecorator: Story = {
    args: { label: "Dekorasi story" },
    decorators: [
        (Story) => (
            <div className="rounded-xl border border-emerald-400 bg-emerald-50 p-6">
                <Story />
            </div>
        ),
    ],
}
