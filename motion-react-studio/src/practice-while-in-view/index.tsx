import { motion } from "framer-motion"

const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
} as const

/** Satu kartu yang muncul saat masuk viewport. */
const RevealCard = ({
    title,
    description,
    className,
}: {
    title: string
    description: string
    className: string
}) => (
    <motion.div
        className={className}
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    >
        <h4>{title}</h4>
        <p>{description}</p>
    </motion.div>
)

/** Daftar stagger yang muncul saat terlihat. */
const StaggeredList = () => {
    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
    return (
        <motion.ul
            className="stagger-list"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {items.map((item, index) => (
                <motion.li
                    key={index}
                    className="stagger-item"
                    variants={revealVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {item}
                </motion.li>
            ))}
        </motion.ul>
    )
}

/** Empat contoh whileInView dari konfigurasi. */
const RevealGallery = () => {
    const cards = [
        { title: "Kartu Balik", description: "Kartu ini muncul saat masuk viewport.", className: "flip-card" },
        { title: "Garis Waktu", description: "Elemen garis waktu muncul bertahap.", className: "timeline-item" },
        { title: "Kartu Interaktif", description: "Kartu dengan hover dan reveal animasi.", className: "interactive-card" },
    ]
    return (
        <>
            <StaggeredList />
            {cards.map((card) => (
                <RevealCard key={card.title} {...card} />
            ))}
        </>
    )
}

/**
 * Demo latihan whileInView.
 *
 * @returns Galeri empat contoh animasi saat terlihat.
 */
export default function PracticeWhileInView() {
    return (
        <section className="practice-demo" aria-labelledby="practice-while-in-view-title">
            <h3 id="practice-while-in-view-title">Latihan whileInView</h3>
            <div className="view-demo-group">
                <RevealGallery />
            </div>
            <p className="caption">
                Empat contoh whileInView: daftar stagger, kartu balik, garis
                waktu, dan kartu interaktif.
            </p>
        </section>
    )
}
