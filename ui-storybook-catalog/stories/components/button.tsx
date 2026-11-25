export type ButtonVariant = "primary" | "secondary" | "danger"

export interface ButtonProps {
    label?: string
    variant?: ButtonVariant
    disabled?: boolean
    color?: string
    onClick?: () => void
}

/**
 * Tombol reusable yang dipakai seluruh story.
 *
 * Single Responsibility: hanya merender tombol; dekorasi dan kontrol
 * diberikan lewat props.
 */
export const Button = ({
    label = "Click Me",
    variant = "primary",
    disabled = false,
    color,
    onClick,
}: ButtonProps) => (
    <button
        type="button"
        disabled={disabled}
        onClick={onClick}
        style={color ? { backgroundColor: color, color: "#fff" } : undefined}
        className={`rounded-lg px-4 py-2 font-semibold ${
            variant === "danger"
                ? "bg-rose-500 text-white"
                : variant === "secondary"
                  ? "bg-slate-600 text-white"
                  : "bg-blue-600 text-white"
        } disabled:cursor-not-allowed disabled:opacity-50`}>
        {label}
    </button>
)

export default Button
