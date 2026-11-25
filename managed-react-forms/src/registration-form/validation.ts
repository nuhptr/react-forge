import type { RegisterOptions } from "react-hook-form"

export interface RegistrationFormData {
    firstName: string
    lastName: string
    email: string
    city: string
    state: string
    zip: string
    country: string
    completeLocation: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const required = (message: string) => ({
    required: message,
})

/**
 * Aturan validasi Registration Form.
 *
 * Open/Closed: menambah field baru cukup dengan menambah entri di sini
 * lalu merender `TextField`/`TextAreaField`; perilaku field lama tidak berubah.
 */
export const registrationFormRules: Record<
    keyof RegistrationFormData,
    RegisterOptions<RegistrationFormData>
> = {
    firstName: required("First Name is required"),
    lastName: required("Last Name is required"),
    email: {
        ...required("Email Address is required"),
        pattern: {
            value: emailPattern,
            message: "Invalid email address",
        },
    },
    city: required("City is required"),
    state: required("State is required"),
    zip: required("ZIP is required"),
    country: required("Country is required"),
    completeLocation: required("Complete Location is required"),
}
