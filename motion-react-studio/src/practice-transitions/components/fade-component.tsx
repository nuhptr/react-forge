import { AnimatePresence, motion } from "framer-motion"

interface FadeComponentProps {
    isVisible: boolean
}

/** Elemen yang muncul/hilang dengan transisi opacity. */
const FadeComponent = ({ isVisible }: FadeComponentProps) => (
    <AnimatePresence>
        {isVisible && (
            <motion.div
                className="practice-fade"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.3 } },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
            />
        )}
    </AnimatePresence>
)

export default FadeComponent
