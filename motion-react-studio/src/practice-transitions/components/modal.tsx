import { AnimatePresence, motion } from "framer-motion"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
}

/** Modal dengan overlay dan transisi scale. */
const Modal = ({ isOpen, onClose }: ModalProps) => (
    <AnimatePresence>
        {isOpen && (
            <>
                <motion.div
                    className="practice-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                />
                <motion.div
                    className="practice-modal"
                    variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <h4>Modal</h4>
                    <button type="button" onClick={onClose} className="close-btn">
                        Tutup
                    </button>
                </motion.div>
            </>
        )}
    </AnimatePresence>
)

export default Modal
