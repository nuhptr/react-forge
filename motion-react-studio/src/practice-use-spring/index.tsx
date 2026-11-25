import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Komponen slider spring menggunakan useSpring.
 */
const SpringSlider = () => {
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - 40);
  };

  return (
    <div className="spring-slider-group" onMouseMove={handleMove}>
      <motion.div className="animation-box" style={{ x: springX }} />
    </div>
  );
};

/**
 * Komponen rotasi dinamis dengan spring.
 */
const DynamicRotation = () => {
  const rotation = useMotionValue(0);
  const springRotation = useSpring(rotation, {
    stiffness: 200,
    damping: 30,
  });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    rotation.set(((event.clientX - rect.left) / rect.width) * 360 - 180);
  };

  return (
    <div className="spring-rotation-group" onMouseMove={handleMove}>
      <motion.div
        className="animation-box"
        style={{ rotate: springRotation }}
      />
    </div>
  );
};

/**
 * Demo latihan useSpring: slider spring dan rotasi dinamis.
 */
export default function PracticeUseSpring() {
  return (
    <section
      className="practice-demo"
      aria-labelledby="practice-use-spring-title"
    >
      <h3 id="practice-use-spring-title">Latihan useSpring</h3>
      <div className="spring-demo-group">
        <SpringSlider />
        <DynamicRotation />
      </div>
      <p className="caption">
        Dua contoh useSpring: slider dengan fisika spring dan rotasi dinamis
        mengikuti mouse.
      </p>
    </section>
  );
}
