import { motion } from "framer-motion"

/**
 * Konfigurasi transisi antar state.
 *
 * Single Responsibility: hanya mengatur timing dan easing transisi.
 */
const transitionConfig = {
    type: "spring",
    stiffness: 300,
    damping: 30,
} as const

/**
 * Komponen transisi dengan varian muncul dan hilang.
 *
 * Dependency Inversi: konfigurasi transisi dapat ditimpa melalui props
 * (diimplementasikan sebagai varian statis untuk demonstrasi).
 */
export default function Transitions() {
    return (
        <section className="animation-demo" aria-labelledby="transitions-title">
            <h3 id="transitions-title">Transisi Elemen</h3>
            <motion.div
                className="animation-box"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={transitionConfig}
            />
            <p className="caption">
                Elemen muncul dengan gerak spring dari bawah ke atas.
            </p>
        </section>
    )
}
