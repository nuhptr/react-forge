import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "./components/button"
import { MyInput } from "./components/my-input"

interface CombinationProps {
    label: string
    placeholder: string
}

/**
 * Story gabungan: Button dan MyInput yang masing-masing punya story sendiri.
 *
 * @param props - Args untuk label tombol dan placeholder input.
 * @returns Form kecil hasil komposisi dua komponen.
 */
const Combination = ({ label, placeholder }: CombinationProps) => (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-300 p-4">
        <MyInput placeholder={placeholder} />
        <Button label={label} />
    </div>
)

/** Meta untuk story yang tersusun dari story lain. */
const meta: Meta<typeof Combination> = {
    title: "Storybook/Stories Within Stories",
    component: Combination,
    argTypes: {
        label: { control: "text", description: "Teks tombol" },
        placeholder: { control: "text", description: "Placeholder input" },
    },
}

export default meta

type Story = StoryObj<typeof Combination>

/** Komposisi form sederhana. */
export const Default: Story = {
    args: { label: "Kirim", placeholder: "Nama Anda" },
}

/** Komposisi dengan placeholder panjang. */
export const LongPlaceholder: Story = {
    args: { label: "Simpan Profil", placeholder: "Alamat email lengkap" },
}
