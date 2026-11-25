import clsx from "clsx";

interface ClsxDemoProps {
  active?: boolean;
  disabled?: boolean;
}

/**
 * Demo clsx: menggabungkan className secara kondisional.
 *
 * Single Responsibility: utilitas hanya menggabungkan kelas, bukan logika UI.
 *
 * @param props - Status aktif dan disabled.
 * @returns Tombol dengan kelas yang digabung clsx.
 */
export default function Clsx({
  active = false,
  disabled = false,
}: ClsxDemoProps) {
  const className = clsx(
    "rounded-lg px-4 py-2 font-semibold",
    active ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300",
    disabled && "cursor-not-allowed opacity-50",
  );

  return (
    <section className="panel" aria-label="CLSX demo">
      <h3 className="text-lg font-semibold text-blue-400">CLSX</h3>
      <p className="text-xs text-slate-500">Kelas: {className}</p>
      <button type="button" className={className} disabled={disabled}>
        Tombol CLSX
      </button>
    </section>
  );
}
