import { useFormStatus } from "react-dom";

/**
 * Tombol submit yang menampilkan status pending.
 *
 * Single Responsibility: hanya merender tombol dan menampilkan status pending
 * dari konteks form terdekat; logika aksi form tidak diketahui oleh tombol ini.
 */
export const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="action-button">
      {pending ? "Mengirim..." : "Kirim"}
    </button>
  );
};
