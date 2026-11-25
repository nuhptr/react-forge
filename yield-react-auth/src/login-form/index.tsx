import { useState } from "react"

/**
 * Form login dengan validasi sederhana.
 *
 * Single Responsibility: hanya menangani input dan validasi lokal;
 * pengiriman ke server diinjeksi lewat prop `onSubmit`.
 *
 * @returns Formulir login.
 */
export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [submitted, setSubmitted] = useState(false)

    return (
        <section className="panel" aria-labelledby="login-title">
            <h3 id="login-title" className="text-lg font-semibold text-blue-400">Login Form</h3>
            <form
                className="grid gap-3"
                onSubmit={(event) => {
                    event.preventDefault()
                    setSubmitted(true)
                }}
                noValidate
            >
                <div className="field">
                    <label htmlFor="login-email">Email</label>
                    <input
                        id="login-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="user@example.com"
                    />
                </div>
                <div className="field">
                    <label htmlFor="login-password">Password</label>
                    <input
                        id="login-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn justify-self-start">Masuk</button>
                {submitted && <p className="text-sm text-emerald-400">Form disubmit (simulasi).</p>}
            </form>
        </section>
    )
}
