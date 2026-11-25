import { motion } from "framer-motion"

const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
} as const

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
} as const

/** Daftar item dengan animasi bertahap. */
const StaggeredList = () => (
    <motion.ul className="stagger-list" variants={listVariants} initial="hidden" animate="visible">
        {["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"].map((item, index) => (
            <motion.li
                key={index}
                className="stagger-item"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
            >
                {item}
            </motion.li>
        ))}
    </motion.ul>
)

/** Galeri gambar dengan animasi bertahap. */
const StaggeredGallery = () => (
    <motion.div className="stagger-gallery" variants={listVariants} initial="hidden" animate="visible">
        {[1, 2, 3, 4, 5, 6].map((index) => (
            <motion.div
                key={index}
                className="gallery-item"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
            >
                {`Gambar ${index}`}
            </motion.div>
        ))}
    </motion.div>
)

/** Tombol dengan respons hover. */
const StaggeredButton = () => (
    <motion.div className="stagger-buttons" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
        <h4>Tombol Stagger</h4>
    </motion.div>
)

/**
 * Demo latihan stagger animation.
 *
 * @returns Tiga contoh animasi bertahap.
 */
export default function PracticeStaggerAnimation() {
    return (
        <section className="practice-demo" aria-labelledby="practice-stagger-animation-title">
            <h3 id="practice-stagger-animation-title">Latihan Stagger Animation</h3>
            <div className="stagger-demo-group">
                <StaggeredList />
                <StaggeredGallery />
                <StaggeredButton />
            </div>
            <p className="caption">Tiga contoh animasi stagger: daftar, galeri gambar, dan tombol.</p>
        </section>
    )
}
