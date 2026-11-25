import { motion } from "framer-motion"

import type { SlideIndex } from "../data"

interface SlideThumbnailProps {
    src: string
    alt: string
    isActive: boolean
    index: SlideIndex
    onSelect: (index: SlideIndex) => void
}

/** Thumbnail yang bisa dipilih untuk berpindah slide. */
const SlideThumbnail = ({ src, alt, isActive, index, onSelect }: SlideThumbnailProps) => (
    <motion.div
        className="carousel-thumbnail"
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelect(index)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
            if (event.key === "Enter") onSelect(index)
        }}>
        <img src={src} alt={alt} className="thumbnail-img" />
        {isActive && <span className="active-indicator" />}
    </motion.div>
)

export default SlideThumbnail
