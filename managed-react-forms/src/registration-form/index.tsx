import { useForm, type SubmitHandler } from "react-hook-form"

import TextAreaField from "../shared/text-area-field"
import TextField from "../shared/text-field"
import { registrationFormRules, type RegistrationFormData } from "./validation"

interface RegistrationFormProps {
    onSubmit: SubmitHandler<RegistrationFormData>
}

/**
 * Form registrasi multi-field untuk mendemonstrasikan validasi per field.
 *
 * Dependency Inversion: data diserahkan ke handler yang diinjeksi, bukan
 * ditulis langsung di dalam komponen.
 */
const RegistrationForm = ({ onSubmit }: RegistrationFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegistrationFormData>()

    return (
        <section
            className="grid gap-5 p-6 border rounded-xl border-slate-700 bg-slate-800/60"
            aria-labelledby="registration-form-title">
            <h2 className="text-xl font-semibold text-slate-100" id="registration-form-title">
                Registration Form
            </h2>

            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                    <TextField
                        id="first-name"
                        label="First Name"
                        type="text"
                        autoComplete="given-name"
                        registration={register("firstName", registrationFormRules.firstName)}
                        error={errors.firstName}
                    />
                    <TextField
                        id="last-name"
                        label="Last Name"
                        type="text"
                        autoComplete="family-name"
                        registration={register("lastName", registrationFormRules.lastName)}
                        error={errors.lastName}
                    />
                </div>

                <TextField
                    id="registration-email"
                    label="Email Address"
                    type="email"
                    autoComplete="email"
                    registration={register("email", registrationFormRules.email)}
                    error={errors.email}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                    <TextField
                        id="city"
                        label="City"
                        type="text"
                        autoComplete="address-level2"
                        registration={register("city", registrationFormRules.city)}
                        error={errors.city}
                    />
                    <TextField
                        id="state"
                        label="State"
                        type="text"
                        autoComplete="address-level1"
                        registration={register("state", registrationFormRules.state)}
                        error={errors.state}
                    />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <TextField
                        id="zip"
                        label="ZIP"
                        type="text"
                        autoComplete="postal-code"
                        registration={register("zip", registrationFormRules.zip)}
                        error={errors.zip}
                    />
                    <TextField
                        id="country"
                        label="Country"
                        type="text"
                        autoComplete="country-name"
                        registration={register("country", registrationFormRules.country)}
                        error={errors.country}
                    />
                </div>

                <TextAreaField
                    id="complete-location"
                    label="Complete Location"
                    rows={3}
                    autoComplete="street-address"
                    registration={register(
                        "completeLocation",
                        registrationFormRules.completeLocation,
                    )}
                    error={errors.completeLocation}
                />

                <button
                    type="submit"
                    className="px-5 py-3 font-semibold text-white transition bg-blue-600 rounded-lg justify-self-start hover:bg-blue-500">
                    Submit
                </button>
            </form>
        </section>
    )
}

export default RegistrationForm
