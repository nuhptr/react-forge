import { useScroll, useTransform } from "framer-motion"

/**
 * Komponen navbar yang menempel (sticky) saat digulir.
 *
 * Single Responsibility: hanya merender navbar yang berubah gaya berdasarkan
 * posisi scroll; logika deteksi posisi ditangani useScroll.
 */
export default function ProjectStickyNavbar() {
    const { scrollYProgress } = useScroll()
    const bgOpacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

    return (
        <section className="project-demo" aria-labelledby="project-sticky-navbar-title">
            <h3 id="project-sticky-navbar-title">Navbar Melekat</h3>
            <nav
                className="sticky-navbar"
                style={{ backgroundColor: `rgba(20, 24, 35, ${bgOpacity})` }}
            >
                <div className="navbar-content">
                    <span className="navbar-brand">MotionStudio</span>
                    <div className="navbar-links">
                        <a href="#home" className="navbar-link">
                            Beranda
                        </a>
                        <a href="#about" className="navbar-link">
                            Tentang
                        </a>
                        <a href="#contact" className="navbar-link">
                            Kontak
                        </a>
                    </div>
                </div>
            </nav>

            <div className="navbar-spacer" />
            <p className="caption">
                Navbar di bagian atas tetap terlihat dengan latar yang semakin
                pekat saat digulir.
            </p>
        </section>
    )
}
