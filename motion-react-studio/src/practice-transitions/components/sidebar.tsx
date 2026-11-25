import { motion } from "framer-motion"

interface SidebarProps {
    isOpen: boolean
}

/** Sidebar geser dari samping. */
const Sidebar = ({ isOpen }: SidebarProps) => (
    <motion.aside
        className="practice-sidebar"
        variants={{
            hidden: { x: "-100%", transition: { duration: 0.3 } },
            visible: { x: 0, transition: { type: "spring", stiffness: 300 } },
        }}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}>
        <h4>Sidebar</h4>
        <p>Menu navigasi yang geser dari samping.</p>
    </motion.aside>
)

export default Sidebar
