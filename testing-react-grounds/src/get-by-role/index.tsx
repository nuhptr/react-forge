/**
 * Komponen dengan landmark semantik untuk diuji via peran (role).
 *
 * Single Responsibility: hanya merender elemen dengan role yang jelas.
 *
 * @returns Tombol dan input dengan atribut aksesibilitas.
 */
export default function GetByRole() {
    return (
        <section className="panel" aria-label="Get by role demo">
            <h3 className="text-lg font-semibold text-blue-400">Get By Role</h3>
            <div className="field">
                <label htmlFor="role-name">Nama</label>
                <input id="role-name" type="text" placeholder="Masukkan nama" />
            </div>
            <button type="button" className="btn" role="button">
                Kirim
            </button>
            <p className="text-xs text-slate-500">
                Testing Library: screen.getByRole(&quot;textbox&quot;), getByRole(&quot;button&quot;, &#123; name: &quot;Kirim&quot; &#125;)
            </p>
        </section>
    )
}
