import { motion, useMotionValue, useTransform } from "framer-motion"

/**
 * Data kartu untuk scroll horizontal.
 */
const cardData = [
    { title: "Kartu 1", color: "#6b96ff" },
    { title: "Kartu 2", color: "#4d7bff" },
    { title: "Kartu 3", color: "#ff8a93" },
    { title: "Kartu 4", color: "#8ae39a" },
    { title: "Kartu 5", color: "#d4a3ff" },
] as const

/**
 * Komponen kartu dalam scroll horizontal.
 */
interface ScrollCardProps {
    title: string
    color: string
    style?: React.CSSProperties
}

const ScrollCard = ({ title, color, style }: ScrollCardProps) => (
    <motion.div className="hscroll-card" style={{ backgroundColor: color, ...style } as any}>
        <h4>{title}</h4>
    </motion.div>
)

/**
 * Demo proyek scroll horizontal: carousel kartu dengan gerak sinkron.
 */
export default function ProjectHorizontalScroll() {
    const scrollX = useMotionValue(0)

    const cardOpacity = useTransform(scrollX, [0, 400], [0.3, 1])

    return (
        <section className="project-demo" aria-labelledby="project-horizontal-scroll-title">
            <h3 id="project-horizontal-scroll-title">Scroll Horizontal</h3>
            <div
                className="hscroll-container"
                onWheel={(e) => {
                    e.preventDefault()
                    scrollX.set((scrollX.get() || 0) + e.deltaY)
                }}>
                <motion.div className="hscroll-track" style={{ x: scrollX }}>
                    {cardData.map((card, index) => (
                        <ScrollCard
                            key={index}
                            title={card.title}
                            color={card.color}
                            style={{ opacity: cardOpacity as any }}
                        />
                    ))}
                </motion.div>
            </div>
            <p className="caption">
                Gulir secara horizontal (gunakan roda mouse pada area track) untuk melihat kartu
                dengan efek opacity sinkron.
            </p>
        </section>
    )
}
