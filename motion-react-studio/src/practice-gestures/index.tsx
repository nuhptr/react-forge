import { motion } from "framer-motion"

/** Satu kartu gesture dengan judul, deskripsi, dan konfigurasi motion. */
const GestureCard = ({
    title,
    description,
    motionProps,
}: {
    title: string
    description: string
    motionProps: Record<string, unknown>
}) => (
    <motion.div className="practice-swipe-card" {...motionProps}>
        <h4>{title}</h4>
        <p>{description}</p>
    </motion.div>
)

/** Enam contoh gesture yang dirender dari konfigurasi. */
const GestureGallery = () => {
    const cards = [
        {
            title: "Kartu Geser",
            description: "Seret kartu ke kiri atau kanan.",
            motionProps: {
                initial: { x: 0 },
                drag: "x",
                dragConstraints: { left: -200, right: 200 },
                dragElastic: 0.4,
            },
        },
        {
            title: "Kotak Seret",
            description: "Seret bebas dalam batas.",
            motionProps: {
                drag: true,
                dragConstraints: { left: -100, right: 100, top: -100, bottom: 100 },
            },
        },
        {
            title: "Putar Seret",
            description: "Kartu berputar saat diseret.",
            motionProps: {
                drag: true,
                dragConstraints: { left: -100, right: 100, top: -100, bottom: 100 },
                whileDrag: { rotate: 45 },
            },
        },
        {
            title: "Sentuh Saya",
            description: "Sentuh untuk mengubah warna.",
            motionProps: { whileTap: { backgroundColor: "#ff8a93" } },
        },
        {
            title: "Tekan Lama",
            description: "Tekan untuk memperbesar.",
            motionProps: { whileTap: { scale: 1.2 } },
        },
        {
            title: "Galeri Gesture",
            description: "Seret untuk melihat lebih banyak.",
            motionProps: { drag: "x", dragConstraints: { left: -200, right: 0 } },
        },
    ]

    return (
        <div className="gesture-grid">
            {cards.map((card) => (
                <GestureCard key={card.title} {...card} />
            ))}
        </div>
    )
}

/**
 * Demo latihan gestures.
 *
 * @returns Galeri enam contoh gesture.
 */
export default function PracticeGestures() {
    return (
        <section className="practice-demo" aria-labelledby="practice-gestures-title">
            <h3 id="practice-gestures-title">Latihan Gestures</h3>
            <GestureGallery />
            <p className="caption">
                Enam contoh interaksi gesture: geser, seret, putar, sentuh, tekan lama, dan galeri
                berbasis gesture.
            </p>
        </section>
    )
}
