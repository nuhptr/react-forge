import { motion, useMotionValue } from "framer-motion"

/**
 * Komponen slider terhubung dengan skala menggunakan useMotionValue.
 */
const RangeSlider = () => {
    const scale = useMotionValue(1)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        scale.set(parseFloat(event.target.value))
    }

    return (
        <div className="mv-slider-group">
            <motion.div className="animation-box" style={{ scale }} />
            <label htmlFor="mv-scale">Skala:</label>
            <input
                id="mv-scale"
                type="range"
                min="0.5"
                max="5"
                step="0.01"
                defaultValue="1"
                onChange={handleChange}
            />
        </div>
    )
}

/**
 * Komponen skala terhubung: gerak satu elemen mempengaruhi yang lain.
 */
const HoverLinkedScale = () => {
    const parentScale = useMotionValue(1)
    const childScale = useMotionValue(1)

    return (
        <div className="mv-linked-group">
            <motion.div
                className="animation-box"
                style={{ scale: parentScale }}
                whileHover={{ scale: 1.5 }}
                onHoverStart={() => {
                    childScale.set(0.8)
                }}
                onHoverEnd={() => {
                    childScale.set(1)
                }}
            />
            <motion.div className="animation-box" style={{ scale: childScale }} />
        </div>
    )
}

/**
 * Demo latihan useMotionValue: slider dan skala terhubung.
 */
export default function PracticeUseMotionValue() {
    return (
        <section className="practice-demo" aria-labelledby="practice-use-motion-value-title">
            <h3 id="practice-use-motion-value-title">Latihan useMotionValue</h3>
            <div className="mv-demo-group">
                <RangeSlider />
                <HoverLinkedScale />
            </div>
            <p className="caption">
                Dua contoh useMotionValue: slider kontrol skala dan skala
                terhubung antar elemen.
            </p>
        </section>
    )
}
