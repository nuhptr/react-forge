import type { ComponentType } from "react"

/** Varian warna yang dikenal pabrik tombol. */
export type ButtonTone = "primary" | "danger" | "ghost"

interface ActionButtonProps {
    onClick: () => void
    disabled?: boolean
}

/** Kelas warna per varian, dipisah dari logika komponen. */
const toneClass: Record<ButtonTone, string> = {
    primary: "bg-blue-600 hover:bg-blue-500",
    danger: "bg-rose-600 hover:bg-rose-500",
    ghost: "bg-slate-700 hover:bg-slate-600",
}

/**
 * Pabrik komponen: membentuk tombol dengan label dan gaya tetap.
 *
 * Single Responsibility: pabrik hanya membentuk komponen; perilaku klik
 * disuntikkan oleh pemanggil lewat props.
 *
 * @param label - Teks tombol hasil pabrik.
 * @param tone - Varian warna tombol.
 * @returns Komponen button yang siap dipakai.
 */
export function createActionButton(
    label: string,
    tone: ButtonTone,
): ComponentType<ActionButtonProps> {
    const ActionButton = ({ onClick, disabled = false }: ActionButtonProps) => (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={`rounded-lg px-4 py-2 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60 ${toneClass[tone]}`}>
            {label}
        </button>
    )

    ActionButton.displayName = `ActionButton(${label})`
    return ActionButton
}
