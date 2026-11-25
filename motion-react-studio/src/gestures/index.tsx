import { motion } from "framer-motion"

/**
 * Konfigurasi gesture untuk kartu interaktif.
 *
 * Single Responsibility: hanya mendefinisikan responsi hover, tap, dan drag.
 */
const cardVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.05, rotate: 3 },
    tap: { scale: 0.95 },
} as const

/**
 * Komponen kartu dengan gesture hover, tap, dan drag.
 *
 * Single Responsibility: hanya menangani presentasi kartu;
 * gesture dikonfigurasikan melalui props motion.
 */
export default function Gestures() {
    return (
        <section className="animation-demo" aria-labelledby="gestures-title">
            <h3 id="gestures-title">Kartu Interaktif (Gesture)</h3>
            <motion.div
                className="gesture-card"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                dragElastic={0.2}
                transition={{ type: "spring", stiffness: 300 }}>
                <h4>Seret Saya</h4>
                <p>Hover, klik, atau seret kartu ini.</p>
            </motion.div>
            <p className="caption">
                Kartu merespons hover, klik, dan dapat diseret dalam batas tertentu.
            </p>
        </section>
    )
}
