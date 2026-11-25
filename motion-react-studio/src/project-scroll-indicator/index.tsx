import { motion, useScroll, useTransform } from "framer-motion"

/**
 * Komponen indikator progres scroll.
 *
 * Single Responsibility: hanya merender bar progres yang mencerminkan posisi
 * scroll halaman; perhitungan progres ditangani useScroll dan useTransform.
 */
export default function ProjectScrollIndicator() {
    const { scrollYProgress } = useScroll()
    const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <section className="project-demo" aria-labelledby="project-scroll-indicator-title">
            <h3 id="project-scroll-indicator-title">Indikator Scroll</h3>
            <div className="scroll-content">
                {[...Array(50)].map((_, i) => (
                    <p key={i} className="scroll-item">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                ))}
            </div>
            <motion.div className="scroll-progress-bar" style={{ width: barWidth }} />
            <p className="caption">
                Gulir halaman untuk melihat bar progres berubah sesuai posisi scroll.
            </p>
        </section>
    )
}
