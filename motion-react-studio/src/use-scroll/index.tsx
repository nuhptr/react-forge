import { motion, useScroll, useTransform } from "framer-motion"

/**
 * Komponen indikator progres scroll menggunakan `useScroll` dan `useTransform`.
 *
 * Single Responsibility: hanya menampilkan bar progres berdasarkan posisi scroll;
 * logika perhitungan progres ditangani hook Framer Motion.
 */
export default function UseScroll() {
    const { scrollYProgress } = useScroll()

    const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <section className="animation-demo" aria-labelledby="use-scroll-title">
            <h3 id="use-scroll-title">useScroll (Progres Scroll)</h3>
            <div className="scroll-spacer" />
            <motion.div
                className="scroll-bar"
                style={{ width: barWidth }}
            />
            <p className="caption">
                Gulir halaman untuk melihat bar progres berubah sesuai posisi
                scroll.
            </p>
        </section>
    )
}
