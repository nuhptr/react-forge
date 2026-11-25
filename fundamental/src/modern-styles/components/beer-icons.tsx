import { FaBeer } from "react-icons/fa";

/**
 * Mendemonstrasikan pengaturan ukuran (`size`) dan warna (`color`) pada komponen `react-icons`.
 *
 * @returns Deretan variasi ikon gelas bir.
 */
const BeerIcons = () => {
  return (
    <div aria-label="Beer icon variations">
      <FaBeer aria-hidden="true" />
      <FaBeer size={30} aria-hidden="true" />
      <FaBeer size={30} color="gold" aria-hidden="true" />
    </div>
  );
};

export default BeerIcons;
