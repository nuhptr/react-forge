import { useState } from "react";

/**
 * Form registrasi dengan konfirmasi password.
 *
 * @returns Formulir pendaftaran.
 */
export default function RegisterForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const mismatch = confirm.length > 0 && password !== confirm;

  return (
    <section className="panel" aria-labelledby="register-title">
      <h3 id="register-title" className="text-lg font-semibold text-blue-400">
        Register Form
      </h3>
      <form
        className="grid gap-3"
        onSubmit={(event) => event.preventDefault()}
        noValidate
      >
        <div className="field">
          <label htmlFor="reg-name">Nama</label>
          <input
            id="reg-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="reg-password">Password</label>
          <input
            id="reg-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="reg-confirm">Konfirmasi Password</label>
          <input
            id="reg-confirm"
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          {mismatch && (
            <p className="text-sm text-rose-400" role="alert">
              Password tidak cocok.
            </p>
          )}
        </div>
        <button
          type="submit"
          className="btn justify-self-start"
          disabled={mismatch}
        >
          Daftar
        </button>
      </form>
    </section>
  );
}
