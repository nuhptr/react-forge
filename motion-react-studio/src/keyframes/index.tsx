import { motion } from "framer-motion"

/**
 * Konfigurasi keyframes untuk animasi berulang.
 *
 * Single Responsibility: hanya mendefinisikan urutan keyframes.
 */
const pulseVariants = {
    animate: {
        keyframes: [
            { scale: 1, backgroundColor: "#6b96ff" },
            { scale: 1.1, backgroundColor: "#4d7bff" },
            { scale: 1, backgroundColor: "#6b96ff" },
        ],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
} as const

/**
 * Komponen keyframes dengan animasi denyut berulang.
 *
 * Single Responsibility: hanya merender elemen dengan animasi keyframes.
 */
export default function Keyframes() {
    return (
        <section className="animation-demo" aria-labelledby="keyframes-title">
            <h3 id="keyframes-title">Keyframes (Denyut)</h3>
            <motion.div className="animation-box" variants={pulseVariants} animate="animate" />
            <p className="caption">
                Kotak berdenyut terus-menerus dengan perubahan skala dan warna.
            </p>
        </section>
    )
}
