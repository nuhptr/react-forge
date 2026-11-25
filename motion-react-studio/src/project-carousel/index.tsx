import { motion } from "framer-motion"
import { useState } from "react"

import SlideThumbnail from "./components/slide-thumbnail"
import { slideImages, type SlideIndex } from "./data"

/**
 * Carousel gambar dengan transisi horizontal dan navigasi thumbnail.
 *
 * Single Responsibility: hanya mengelola indeks slide aktif;
 * data dan thumbnail berada di file terpisah.
 *
 * @returns Carousel dengan thumbnail dan tombol navigasi.
 */
export default function ProjectCarousel() {
    const [currentIndex, setCurrentIndex] = useState<SlideIndex>(0)

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slideImages.length)
    const prevSlide = () =>
        setCurrentIndex((prev) => (prev - 1 + slideImages.length) % slideImages.length)

    return (
        <section className="project-demo" aria-labelledby="project-carousel-title">
            <h3 id="project-carousel-title">Carousel</h3>
            <div className="carousel-container">
                <div className="carousel-thumbnails">
                    {slideImages.map((src, index) => (
                        <SlideThumbnail
                            key={index}
                            src={src}
                            alt={`Thumbnail ${index + 1}`}
                            isActive={currentIndex === index}
                            index={index}
                            onSelect={setCurrentIndex}
                        />
                    ))}
                </div>

                <div className="carousel-viewport">
                    <motion.div
                        className="carousel-track"
                        initial={{ x: "-100%" }}
                        animate={{ x: `${-currentIndex * 100}%` }}
                        transition={{ duration: 0.5 }}>
                        {slideImages.map((src, index) => (
                            <div key={index} className="carousel-main-slide">
                                <div className="slide-wrapper">
                                    <img
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        className="main-slide-img"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="carousel-nav">
                    <button
                        type="button"
                        onClick={prevSlide}
                        className="carousel-nav-btn"
                        aria-label="Slide sebelumnya">
                        ‹
                    </button>
                    <button
                        type="button"
                        onClick={nextSlide}
                        className="carousel-nav-btn"
                        aria-label="Slide berikutnya">
                        ›
                    </button>
                </div>
            </div>
            <p className="caption">
                Carousel gambar dengan transisi horizontal dan thumbnail navigasi.
            </p>
        </section>
    )
}
