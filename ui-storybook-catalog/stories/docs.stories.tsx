import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "./components/button"

/** Parameter docs mendeskripsikan komponen di halaman dokumentasi. */
const meta: Meta<typeof Button> = {
    title: "Storybook/Docs",
    component: Button,
    parameters: {
        docs: {
            description: {
                component:
                    "Button reusable dengan varian primary, secondary, dan danger. Digunakan di seluruh katalog.",
            },
        },
    },
    argTypes: {
        label: {
            description: "Teks yang ditampilkan pada tombol.",
            table: { defaultValue: { summary: '"Click Me"' } },
        },
        variant: { description: "Varian warna tombol.", control: "select" },
        disabled: { description: "Menonaktifkan interaksi tombol.", control: "boolean" },
    },
}

export default meta

type Story = StoryObj<typeof Button>

/** Contoh penggunaan normal yang tampil di dokumentasi. */
export const Documentation: Story = {
    args: { label: "Dokumentasi", variant: "primary" },
    parameters: {
        docs: {
            description: {
                story: "Story ini mendemonstrasikan tombol utama di halaman Docs.",
            },
        },
    },
}
