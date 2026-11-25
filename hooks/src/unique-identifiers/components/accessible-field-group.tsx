import { useId } from "react"

/**
 * Props untuk komponen {@link AccessibleFieldGroup}.
 */
export interface AccessibleFieldGroupProps {
    groupTitle: string
}

/**
 * Menghasilkan pasangan ID deterministik bebas bentrok (`${baseId}-name` dan `${baseId}-email`)
 * menggunakan `useId()`, sehingga komponen aman dirender berkali-kali di halaman yang sama.
 *
 * @param props Judul kelompok input.
 * @returns Kartu kelompok input nama dan email berlabel aksesibel.
 */
const AccessibleFieldGroup = ({ groupTitle }: AccessibleFieldGroupProps) => {
    const baseId = useId()
    const nameInputId = `${baseId}-name`
    const emailInputId = `${baseId}-email`

    return (
        <section className="card">
            <h2>{groupTitle}</h2>
            <div className="controls">
                <label htmlFor={nameInputId}>Nama:</label>
                <input
                    id={nameInputId}
                    type="text"
                    autoComplete="name"
                    placeholder="Nama lengkap"
                />

                <label htmlFor={emailInputId}>Email:</label>
                <input
                    id={emailInputId}
                    type="email"
                    autoComplete="email"
                    placeholder="nama@domain.com"
                />
            </div>
        </section>
    )
}

export default AccessibleFieldGroup
