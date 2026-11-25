import { motion } from "framer-motion"

/**
 * Komponen kartu yang dapat diseret (draggable).
 *
 * Single Responsibility: hanya merender satu kartu interaktif dengan gesture
 * seret; batas seret dikonfigurasi sebagai properti.
 */
interface DraggableCardProps {
    title: string
    index: number
}

const DraggableCard = ({ title, index }: DraggableCardProps) => (
    <motion.div
        className="draggable-card"
        drag
        dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
        dragElastic={0.3}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        <h4>{title}</h4>
        <p>Kartu #{index} dapat diseret.</p>
    </motion.div>
)

/**
 * Demo proyek kartu dapat diseret: 5 kartu interaktif.
 */
export default function ProjectDraggableCards() {
    return (
        <section className="project-demo" aria-labelledby="project-draggable-cards-title">
            <h3 id="project-draggable-cards-title">Kartu Dapat Diseret</h3>
            <div className="draggable-grid">
                {[1, 2, 3, 4, 5].map((index) => (
                    <DraggableCard key={index} title={`Kartu ${index}`} index={index} />
                ))}
            </div>
            <p className="caption">
                Lima kartu yang masing-masing dapat diseret dalam batas tertentu
                dengan responsi hover dan tap.
            </p>
        </section>
    )
}
