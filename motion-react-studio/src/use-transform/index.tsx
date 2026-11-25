import { motion, useMotionValue, useTransform } from "framer-motion"

/**
 * Komponen transformasi nilai gerak menggunakan `useTransform`.
 *
 * Single Responsibility: hanya memetakan nilai gerak input ke properti output
 * (opacity dan skala); presentasi ditanggalkan ke komponen motion.
 */
export default function UseTransform() {
    const x = useMotionValue(0)

    const opacity = useTransform(x, [0, 200], [0, 1])
    const scale = useTransform(x, [0, 200], [1, 1.5])

    const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect()
        x.set(event.clientX - rect.left - 40)
    }

    return (
        <section className="animation-demo" aria-labelledby="use-transform-title">
            <h3 id="use-transform-title">useTransform (Maping Nilai)</h3>
            <div
                className="transform-track"
                onMouseMove={handleMove}
                role="region"
                aria-label="Gerakkan mouse untuk mengubah opacity dan skala">
                <motion.div className="animation-box" style={{ opacity, scale }} />
            </div>
            <p className="caption">
                Gerakkan mouse untuk mengubah opacity dan skala kotak secara sinkron.
            </p>
        </section>
    )
}
