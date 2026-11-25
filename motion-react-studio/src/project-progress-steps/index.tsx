import { motion } from "framer-motion"
import { useState } from "react"

/**
 * Data langkah progres.
 */
const steps = [
    { title: "Pilih Produk", description: "Pilih item yang ingin dibeli." },
    { title: "Keranjang Belanja", description: "Tinjukan item di keranjang." },
    { title: "Pembayaran", description: "Selesaikan pembayaran." },
    { title: "Konfirmasi", description: "Konfirmasi pesanan Anda." },
] as const

/**
 * Komponen satu langkah progres.
 */
interface StepProps {
    index: number
    title: string
    description: string
    isActive: boolean
    isCompleted: boolean
}

const Step = ({ index, title, description, isActive, isCompleted }: StepProps) => (
    <motion.div
        className={`progress-step ${isCompleted ? "completed" : ""} ${isActive ? "active" : ""}`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}>
        <div className="step-number">{isCompleted ? "✓" : index + 1}</div>
        <div className="step-content">
            <h4>{title}</h4>
            <p className="step-desc">{description}</p>
        </div>
        {index < steps.length - 1 && <motion.div className="step-connector" />}
    </motion.div>
)

/**
 * Demo proyek langkah progres: alur langkah dengan animasi hover.
 */
export default function ProjectProgressSteps() {
    const [activeStep, setActiveStep] = useState<number>(0)

    return (
        <section className="project-demo" aria-labelledby="project-progress-steps-title">
            <h3 id="project-progress-steps-title">Langkah Progres</h3>
            <div className="progress-container">
                {steps.map((step, index) => (
                    <Step
                        key={index}
                        index={index}
                        title={step.title}
                        description={step.description}
                        isActive={index === activeStep}
                        isCompleted={index < activeStep}
                    />
                ))}
            </div>
            <div className="progress-controls">
                <button
                    type="button"
                    onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
                    disabled={activeStep === 0}
                    className="action-button">
                    Sebelumnya
                </button>
                <button
                    type="button"
                    onClick={() => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))}
                    disabled={activeStep === steps.length - 1}
                    className="action-button">
                    Berikutnya
                </button>
            </div>
            <p className="caption">Alur empat langkah dengan navigasi sebelumnya dan berikutnya.</p>
        </section>
    )
}
