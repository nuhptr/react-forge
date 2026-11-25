import { motion } from "framer-motion"

import { keyframeExamples, type KeyframeConfig } from "./data"

/**
 * Renderer generik untuk satu contoh keyframes.
 *
 * Single Responsibility: hanya menerapkan konfigurasi animasi ke elemen;
 * data animasi ada di `data.ts`.
 *
 * @param props - Konfigurasi keyframes, className, dan opsional children.
 * @returns Elemen motion dengan animasi keyframes.
 */
const KeyframeDemo = ({
    config,
    className,
    children,
}: {
    config: KeyframeConfig
    className: string
    children?: React.ReactNode
}) => {
    const { keyframes, duration, ease } = config
    return (
        <motion.div
            className={className}
            animate={keyframes as any}
            transition={{ duration, repeat: Infinity, ease }}>
            {children}
        </motion.div>
    )
}

/** Tombol dengan keyframes dan respons tap. */
const PulsatingButton = () => (
    <motion.button
        className="practice-pulse-btn"
        whileTap={{ scale: 0.9 }}
        animate={keyframeExamples.pulse.keyframes as any}
        transition={{ duration: keyframeExamples.pulse.duration, repeat: Infinity }}>
        Saya Berdenyut
    </motion.button>
)

/** Daftar semua contoh keyframes dalam satu grid. */
const KeyframeGallery = () => (
    <div className="keyframes-grid">
        <KeyframeDemo className="practice-ball" config={keyframeExamples.bounce} />
        <PulsatingButton />
        <KeyframeDemo className="practice-color-square" config={keyframeExamples.color} />
        <KeyframeDemo className="practice-sliding-text" config={keyframeExamples.slide}>
            Teks Bergerak
        </KeyframeDemo>
        <KeyframeDemo className="practice-zigzag" config={keyframeExamples.zigzag} />
        <KeyframeDemo className="practice-wave" config={keyframeExamples.wave} />
        <KeyframeDemo className="practice-bg" config={keyframeExamples.background} />
    </div>
)

/**
 * Demo latihan keyframes: 7 contoh animasi keyframes.
 *
 * @returns Galeri keyframes.
 */
export default function PracticeKeyframes() {
    return (
        <section className="practice-demo" aria-labelledby="practice-keyframes-title">
            <h3 id="practice-keyframes-title">Latihan Keyframes</h3>
            <KeyframeGallery />
            <p className="caption">
                Tujuh contoh animasi keyframes: bola memantul, tombol berdenyut, persegi ganti
                warna, teks melengkap, zigzag, gelombang, dan latar belakang.
            </p>
        </section>
    )
}
