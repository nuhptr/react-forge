import { motion } from "framer-motion"

/**
 * Varian animasi stagger untuk daftar item.
 *
 * Single Responsibility: hanya mengatur pola kemunculan bertahap item daftar.
 */
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, staggerChildren: 0.1 },
    },
} as const

const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
} as const

/**
 * Komponen daftar dengan animasi stagger (muncul bertahap).
 *
 * Single Responsibility: hanya merender daftar item dengan animasi stagger;
 * konfigurasi animasi dipisahkan ke varian.
 */
export default function StaggerAnimation() {
    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]

    return (
        <section className="animation-demo" aria-labelledby="stagger-animation-title">
            <h3 id="stagger-animation-title">Animasi Stagger</h3>
            <motion.ul
                className="stagger-list"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
            >
                {items.map((item, index) => (
                    <motion.li
                        key={index}
                        className="stagger-item"
                        variants={childVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {item}
                    </motion.li>
                ))}
            </motion.ul>
            <p className="caption">
                Item daftar muncul satu per satu dengan jeda yang tersusun.
            </p>
        </section>
    )
}
