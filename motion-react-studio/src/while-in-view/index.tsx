import { motion } from "framer-motion"

/**
 * Varian animasi elemen saat masuk viewport.
 *
 * Single Responsibility: hanya mendefinisikan animasi muncul saat terlihat.
 */
const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
} as const

/**
 * Komponen elemen yang muncul saat masuk viewport (`whileInView`).
 *
 * Single Responsibility: hanya merender konten yang akan dianimasikan saat
 * terlihat oleh pengguna.
 */
export default function WhileInView() {
    return (
        <section className="animation-demo" aria-labelledby="while-in-view-title">
            <h3 id="while-in-view-title">whileInView (Muncul Saat Terlihat)</h3>
            <div className="view-spacer" />
            <motion.div
                className="animation-box"
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            />
            <p className="caption">
                Gulir ke bawah untuk melihat kotak muncul saat masuk viewport.
            </p>
        </section>
    )
}
