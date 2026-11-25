import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface NavItem {
    label: string
    href: string
}

const navItems: NavItem[] = [
    { label: "Beranda", href: "#home" },
    { label: "Galeri", href: "#gallery" },
    { label: "Proyek", href: "#projects" },
    { label: "Kontak", href: "#contact" },
]

/**
 * Komponen item navigasi sidebar.
 */
interface SidebarItemProps {
    item: NavItem
    isActive: boolean
    onSelect: () => void
}

const SidebarItem = ({ item, isActive, onSelect }: SidebarItemProps) => (
    <motion.div
        className={`sidebar-item ${isActive ? "active" : ""}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onSelect}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                onSelect()
            }
        }}>
        <span className="nav-label">{item.label}</span>
    </motion.div>
)

/**
 * Komponen konten halaman navigasi.
 */
interface PageContentProps {
    activeItem: NavItem
}

const PageContent = ({ activeItem }: PageContentProps) => (
    <motion.div
        className="page-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}>
        <h4>{activeItem.label}</h4>
        <p>Konten halaman {activeItem.label.toLowerCase()}.</p>
    </motion.div>
)

/**
 * Demo proyek navigasi animasi lanjut: sidebar dengan transisi halaman.
 */
export default function ProjectAdvanceAnimationNavigation() {
    const [activeIndex, setActiveIndex] = useState(0)
    const activeItem = navItems[activeIndex]

    return (
        <section
            className="project-demo"
            aria-labelledby="project-advance-animation-navigation-title">
            <h3 id="project-advance-animation-navigation-title">Navigasi Animasi Lanjut</h3>
            <div className="advanced-nav-layout">
                <nav className="advanced-sidebar" aria-label="Navigasi utama">
                    <h3 className="sidebar-brand">StudioNav</h3>
                    {navItems.map((item, index) => (
                        <SidebarItem
                            key={index}
                            item={item}
                            isActive={index === activeIndex}
                            onSelect={() => setActiveIndex(index)}
                        />
                    ))}
                </nav>

                <main className="advanced-main">
                    <AnimatePresence mode="wait">
                        <motion.div key={activeIndex} className="page-wrapper">
                            <PageContent activeItem={activeItem} />
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
            <p className="caption">
                Sidebar navigasi dengan transisi halaman yang halus saat item dipilih.
            </p>
        </section>
    )
}
