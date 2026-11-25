/**
 * Props untuk komponen validasi kata sandi {@link Password}.
 */
interface PasswordProps {
    isValid: boolean
}

/** Merender pesan ketika kata sandi memenuhi aturan validasi. */
const ValidPassword = () => <h1>Valid Password</h1>

/** Merender pesan ketika kata sandi tidak memenuhi aturan validasi. */
const InvalidPassword = () => <h1>Invalid Password</h1>

/**
 * Memilih antara {@link ValidPassword} dan {@link InvalidPassword} menggunakan operator ternary.
 *
 * @param props Status validasi kata sandi.
 * @returns Indikator status validitas kata sandi.
 */
const Password = ({ isValid }: PasswordProps) => (isValid ? <ValidPassword /> : <InvalidPassword />)

/**
 * Mendemonstrasikan conditional rendering pada JSX berdasarkan nilai boolean.
 *
 * @returns Section contoh conditional rendering.
 */
const LogicalRendering = () => {
    return (
        <section>
            <Password isValid={true} />
        </section>
    )
}

export default LogicalRendering
