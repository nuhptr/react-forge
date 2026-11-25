interface InputProps {
  label?: string;
  placeholder?: string;
}

/**
 * Komponen Input dengan label dan aksesibilitas.
 *
 * Interface Segregation: hanya props yang relevan untuk input.
 *
 * @param props - Label dan placeholder.
 * @returns Input library.
 */
export default function Input({ label, placeholder }: InputProps) {
  return (
    <section className="panel" aria-label="Input library">
      <h3 className="text-lg font-semibold text-blue-400">Input Component</h3>
      <div className="field">
        <label htmlFor="lib-input">{label}</label>
        <input id="lib-input" type="text" placeholder={placeholder} />
      </div>
    </section>
  );
}
