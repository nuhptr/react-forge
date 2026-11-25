import { motion } from "framer-motion"

/**
 * Varian transformasi (skala dan rotasi).
 *
 * Single Responsibility: hanya mendefinisikan state skala dan rotasi.
 */
const transformVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: 15 },
    tap: { scale: 0.9, rotate: -15 },
} as const

/**
 * Komponen transformasi dengan interaksi hover dan tap.
 *
 * Interface Segregation: hanya menangani skala dan rotasi, tanpa properti
 * animasi yang tidak terkait.
 */
export default function Transformations() {
    return (
        <section className="animation-demo" aria-labelledby="transformations-title">
            <h3 id="transformations-title">Transformasi (Skala & Rotasi)</h3>
            <motion.div
                className="animation-box"
                variants={transformVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
            />
            <p className="caption">Hover untuk memperbesar dan memutar; klik untuk mengecilkan.</p>
        </section>
    )
}
