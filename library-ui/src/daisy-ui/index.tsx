/**
 * Demo DaisyUI: komponen memakai class semantik `btn`, `card`, `badge`, `input`,
 * `toggle` dari plugin DaisyUI di atas Tailwind CSS.
 *
 * @returns Berbagai komponen DaisyUI.
 */
export default function DaisyUi() {
    return (
        <section className="grid gap-6" aria-labelledby="daisy-title">
            <div>
                <h2 id="daisy-title" className="text-2xl font-bold text-slate-900">
                    DaisyUI Components
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                    Kelas semantik dari plugin DaisyUI (tanpa utility Tailwind manual).
                </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
                <button type="button" className="btn btn-primary">
                    Primary
                </button>
                <button type="button" className="btn btn-secondary">
                    Secondary
                </button>
                <button type="button" className="btn btn-accent">
                    Accent
                </button>
                <span className="badge badge-info">Info</span>
                <span className="badge badge-success">Success</span>
            </div>

            <div className="card bg-base-200 shadow-sm w-full max-w-md">
                <div className="card-body">
                    <h3 className="card-title">Card dari DaisyUI</h3>
                    <p>Satu class `card` menggantikan banyak utility Tailwind.</p>
                    <div className="card-actions justify-end">
                        <button type="button" className="btn btn-sm">
                            Buka
                        </button>
                    </div>
                </div>
            </div>

            <label className="form-control w-full max-w-xs">
                <span className="label-text">Nama</span>
                <input type="text" placeholder="Jane Doe" className="input input-bordered w-full" />
            </label>

            <label className="flex items-center gap-2">
                <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                <span className="text-sm text-slate-600">Aktifkan notifikasi</span>
            </label>
        </section>
    )
}
