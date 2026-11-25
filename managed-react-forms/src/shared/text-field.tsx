import type { InputHTMLAttributes } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface TextFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id"
> {
  id: string;
  label: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

/**
 * Input teks dengan label, pesan error, dan atribut aksesibilitas.
 *
 * Single Responsibility: hanya menangani presentasi satu field;
 * validasi dan state form tetap dipegang React Hook Form.
 *
 * @param props - Konfigurasi field (id, label, registration, error, atribut input).
 * @returns Elemen input beserta label dan pesan error aksesibel.
 */
const TextField = ({
  id,
  label,
  registration,
  error,
  ...inputProps
}: TextFieldProps) => {
  const errorId = `${id}-error`;

  return (
    <div className="grid gap-1">
      <label className="text-sm font-semibold text-slate-400" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        {...inputProps}
        {...registration}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
      />
      {error && (
        <p className="text-sm text-rose-400" id={errorId} role="alert">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default TextField;
