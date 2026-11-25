import { motion, useScroll, useTransform } from "framer-motion"

/**
 * Komponen elemen yang muncul saat digulir.
 *
 * Single Responsibility: hanya merender satu item yang dianimasikan saat
 * masuk viewport; logika deteksi posisi ditangani useScroll.
 */
interface RevealItemProps {
    delay: number
    content: string
}

const RevealItem = ({ delay, content }: RevealItemProps) => {
    const { scrollYProgress } = useScroll()
    const opacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

    return (
        <motion.div
            className="scroll-reveal-item"
            style={{ opacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
        >
            <p>{content}</p>
        </motion.div>
    )
}

/**
 * Demo proyek animasi scroll: elemen muncul saat halaman digulir.
 */
export default function ProjectScrollAnimation() {
    const contents = [
        "Elemen pertama muncul saat digulir.",
        "Elemen kedua muncul dengan jeda sedikit lebih lama.",
        "Elemen ketiga muncul setelah elemen kedua.",
        "Elemen keempat muncul sebagai elemen terakhir.",
    ]

    return (
        <section className="project-demo" aria-labelledby="project-scroll-animation-title">
            <h3 id="project-scroll-animation-title">Animasi Scroll</h3>
            <div className="scroll-animation-content">
                {contents.map((content, index) => (
                    <RevealItem
                        key={index}
                        delay={index * 0.2}
                        content={content}
                    />
                ))}
            </div>
            <p className="caption">
                Empat elemen teks yang muncul secara bertahap saat halaman
                digulir ke bawah.
            </p>
        </section>
    )
}
