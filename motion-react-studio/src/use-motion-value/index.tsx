import { motion, useMotionValue } from "framer-motion"

/**
 * Komponen kontrol skala menggunakan `useMotionValue`.
 *
 * Single Responsibility: hanya menangani sinkronisasi nilai gerak dari input
 * range ke properti skala motion; logika animasi ditangani Framer Motion.
 */
export default function UseMotionValue() {
    const scale = useMotionValue(1)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        scale.set(parseFloat(event.target.value))
    }

    return (
        <section className="animation-demo" aria-labelledby="use-motion-value-title">
            <h3 id="use-motion-value-title">useMotionValue (Kontrol Skala)</h3>
            <motion.div className="animation-box" style={{ scale }} />
            <div className="control-group">
                <label htmlFor="motion-scale">Skala:</label>
                <input
                    id="motion-scale"
                    type="range"
                    min="0.5"
                    max="5"
                    step="0.01"
                    defaultValue="1"
                    onChange={handleChange}
                    aria-valuenow={1}
                    aria-valuemin={0.5}
                    aria-valuemax={5}
                />
            </div>
            <p className="caption">Geser slider untuk mengubah skala kotak secara real-time.</p>
        </section>
    )
}
