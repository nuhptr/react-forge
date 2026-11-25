import { useToggle } from "../hooks/use-toggle";

/**
 * Challenge 1 Custom Hooks: menyembunyikan atau menampilkan panel informasi menggunakan `useToggle`.
 *
 * @returns Kartu panel dengan tombol toggle.
 */
const TogglePanel = () => {
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <div className="card">
      <h2>1. useToggle Hook</h2>
      <div className="controls">
        <button
          type="button"
          onClick={toggleVisibility}
          aria-expanded={isVisible}
        >
          {isVisible ? "Sembunyikan Pesan" : "Tampilkan Pesan"}
        </button>
      </div>
      {isVisible && (
        <p>Pesan rahasia ini dikendalikan oleh custom hook useToggle!</p>
      )}
    </div>
  );
};

export default TogglePanel;
