import { useState } from "react";

import FadeComponent from "./components/fade-component";
import Modal from "./components/modal";
import Sidebar from "./components/sidebar";

/**
 * Demo latihan transisi: fade, sidebar, dan modal.
 *
 * Open/Closed: komponen transisi baru bisa ditambah tanpa mengubah yang lama.
 *
 * @returns Tiga kontrol transisi dengan statusnya.
 */
export default function PracticeTransitions() {
  const [fadeVisible, setFadeVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      className="practice-demo"
      aria-labelledby="practice-transitions-title"
    >
      <h3 id="practice-transitions-title">Latihan Transitions</h3>

      <div className="transition-controls">
        <button
          type="button"
          onClick={() => setFadeVisible((prev) => !prev)}
          className="btn"
        >
          {fadeVisible ? "Sembunyikan" : "Tampilkan"} Fade
        </button>
        <FadeComponent isVisible={fadeVisible} />

        <button
          type="button"
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="btn"
        >
          {sidebarOpen ? "Tutup" : "Buka"} Sidebar
        </button>
        <Sidebar isOpen={sidebarOpen} />

        <button
          type="button"
          onClick={() => setModalOpen((prev) => !prev)}
          className="btn"
        >
          {modalOpen ? "Tutup" : "Buka"} Modal
        </button>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>

      <p className="caption">
        Contoh transisi: elemen muncul/hilang, sidebar geser, dan modal dengan
        overlay.
      </p>
    </section>
  );
}
