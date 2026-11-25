import { useRef } from "react";

/**
 * Input uncontrolled: nilai dibaca dari DOM lewat ref.
 *
 * @returns Input dengan nilai awal yang dibaca saat tombol ditekan.
 */
export default function UncontrolledField() {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="field">
      <label htmlFor="uncontrolled">Uncontrolled (useRef)</label>
      <input id="uncontrolled" ref={ref} defaultValue="teks awal" />
      <button
        type="button"
        className="btn"
        onClick={() => alert(ref.current?.value ?? "")}
      >
        Baca nilai
      </button>
    </div>
  );
}
