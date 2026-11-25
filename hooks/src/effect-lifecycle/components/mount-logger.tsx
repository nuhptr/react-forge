import { useEffect } from "react";

/**
 * Challenge 1 `useEffect`: menjalankan efek samping satu kali saat komponen pertama kali di-mount (`[]`).
 *
 * @returns Kartu informasi pencatatan mount.
 */
const MountLogger = () => {
  useEffect(() => {
    console.info("MountLogger berhasil dipasang ke DOM.");
  }, []);

  return (
    <div className="card">
      <h2>1. Mount Logger</h2>
      <p>
        Buka konsol browser untuk melihat log yang dicetak satu kali saat mount.
      </p>
    </div>
  );
};

export default MountLogger;
