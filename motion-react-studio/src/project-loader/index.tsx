import { motion } from "framer-motion"

/**
 * Komponen loader spinner dengan animasi putar.
 *
 * Single Responsibility: hanya merender indikator pemuatan yang berputar.
 */
const LoaderSpinner = () => (
    <motion.div
        className="loader-spinner"
        animate={{ rotate: 360 }}
        transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
        }}
    />
)

/**
 * Komponen loader pulsing dengan keyframes opacity.
 */
const LoaderPulse = () => (
    <motion.div
        className="loader-pulse"
        animate={[
            { opacity: 0.4 },
            { opacity: 1 },
            { opacity: 0.4 },
        ] as any}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
)

/**
 * Demo proyek loader: spinner dan pulse loader.
 */
export default function ProjectLoader() {
    return (
        <section className="project-demo" aria-labelledby="project-loader-title">
            <h3 id="project-loader-title">Loader</h3>
            <div className="loader-group">
                <LoaderSpinner />
                <LoaderPulse />
            </div>
            <p className="caption">
                Dua gaya loader: spinner berputar dan elemen yang memulak-muliak
                (pulse).
            </p>
        </section>
    )
}
