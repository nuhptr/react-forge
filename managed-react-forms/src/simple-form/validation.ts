import type { RegisterOptions } from "react-hook-form"

export interface SimpleFormData {
    name: string
    email: string
    password: string
}

const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

/**
 * Aturan validasi Simple Form.
 *
 * Single Responsibility: aturan validasi dipisahkan dari komponen agar
 * punya satu sumber kebenaran yang bisa dipakai ulang dan diuji terpisah.
 */
export const simpleFormRules: Record<keyof SimpleFormData, RegisterOptions<SimpleFormData>> = {
    name: {
        required: "Name is required",
    },
    email: {
        required: "Email is required",
        pattern: {
            value: emailPattern,
            message: "Invalid email address",
        },
    },
    password: {
        minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
        },
    },
}
