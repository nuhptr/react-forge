import { useForm, type SubmitHandler } from "react-hook-form"

import TextField from "../shared/text-field"
import { simpleFormRules, type SimpleFormData } from "./validation"

interface SimpleFormProps {
    onSubmit: SubmitHandler<SimpleFormData>
}

/**
 * Form login sederhana untuk mendemonstrasikan `register` dan `handleSubmit`.
 *
 * Dependency Inversion: komponen tidak tahu ke mana data dikirim; handler
 * diinjeksi lewat props sehingga mudah diganti tanpa mengubah form.
 */
const SimpleForm = ({ onSubmit }: SimpleFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SimpleFormData>()

    return (
        <section
            className="grid gap-5 rounded-xl border border-slate-700 bg-slate-800/60 p-6"
            aria-labelledby="simple-form-title"
        >
            <h2 className="text-xl font-semibold text-slate-100" id="simple-form-title">
                Simple Form
            </h2>

            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                <TextField
                    id="simple-name"
                    label="Name"
                    type="text"
                    placeholder="Jane Doe"
                    autoComplete="name"
                    registration={register("name", simpleFormRules.name)}
                    error={errors.name}
                />

                <TextField
                    id="simple-email"
                    label="Email"
                    type="email"
                    placeholder="jane@example.com"
                    autoComplete="email"
                    registration={register("email", simpleFormRules.email)}
                    error={errors.email}
                />

                <TextField
                    id="simple-password"
                    label="Password"
                    type="password"
                    placeholder="At least 8 characters"
                    autoComplete="new-password"
                    registration={register("password", simpleFormRules.password)}
                    error={errors.password}
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="justify-self-start rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isSubmitting ? "Loading..." : "Submit"}
                </button>
            </form>
        </section>
    )
}

export default SimpleForm
