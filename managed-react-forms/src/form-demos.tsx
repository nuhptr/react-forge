import type { SubmitHandler } from "react-hook-form"

import RegistrationForm from "./registration-form"
import type { RegistrationFormData } from "./registration-form/validation"
import SimpleForm from "./simple-form"
import type { SimpleFormData } from "./simple-form/validation"

/**
 * Adapter: form menerima handler submit lewat props, sehingga katalog bisa
 * memakai komponen tanpa prop (sesuai kontrak `ComponentType`).
 *
 * Dependency Inversion: wiring handler berada di sini, bukan di dalam form.
 *
 * @returns Form registrasi dengan handler bawaan.
 */
export const RegistrationFormDemo = () => {
    const onSubmit: SubmitHandler<RegistrationFormData> = (data) => {
        console.log("RegistrationForm submitted:", data)
    }
    return <RegistrationForm onSubmit={onSubmit} />
}

/**
 * Adapter untuk Simple Form.
 *
 * @returns Form sederhana dengan handler bawaan.
 */
export const SimpleFormDemo = () => {
    const onSubmit: SubmitHandler<SimpleFormData> = (data) => {
        console.log("SimpleForm submitted:", data)
    }
    return <SimpleForm onSubmit={onSubmit} />
}
