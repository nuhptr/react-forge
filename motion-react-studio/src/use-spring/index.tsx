import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Komponen kontrol spring menggunakan `useSpring`.
 *
 * Single Responsibility: hanya menerapkan fisika spring pada nilai gerak;
 * presentasi ditanggalkan ke motion.div.
 */
export default function UseSpring() {
  const x = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 100, damping: 20 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - 40);
  };

  return (
    <section className="animation-demo" aria-labelledby="use-spring-title">
      <h3 id="use-spring-title">useSpring (Fisika Spring)</h3>
      <div
        className="spring-track"
        onMouseMove={handleMove}
        role="region"
        aria-label="Gerakkan mouse untuk menggerakkan kotak"
      >
        <motion.div className="animation-box" style={{ x: springX }} />
      </div>
      <p className="caption">
        Gerakkan mouse di atas area latar untuk menggerakkan kotak dengan efek
        spring.
      </p>
    </section>
  );
}
