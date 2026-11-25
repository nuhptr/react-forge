export interface MyInputProps {
    size?: string
    placeholder?: string
}

/**
 * Input dengan lebar yang dapat diatur lewat props.
 */
export const MyInput = ({ size = "20rem", placeholder = "Enter your name" }: MyInputProps) => (
    <input
        type="text"
        placeholder={placeholder}
        style={{ width: size }}
        className="rounded-lg border border-slate-300 px-3 py-2"
    />
)

export default MyInput
