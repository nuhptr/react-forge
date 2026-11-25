import { demos } from "./demos"
import SectionList from "./section-list"

interface DemoCardProps {
    title: string
    description: string
    to: string
}

const DemoCard = ({ title, description, to }: DemoCardProps) => (
    <article className="demo-card">
        <a href={to} className="demo-link">
            <h3>{title}</h3>
            <p>{description}</p>
        </a>
    </article>
)

/**
 * Komponen utama playground Motion Studio — Framer Motion.
 *
 * @returns Halaman navigasi topik dan semua section demonstrasi.
 */
const App = () => {
    return (
        <main className="playground">
            <header className="playground-header">
                <h1 className="text-2xl font-bold">Motion Studio — Framer Motion</h1>
                <p>Referensi latihan animasi Framer Motion dengan React 19 + TypeScript + Vite.</p>
            </header>

            <nav className="demo-nav" aria-label="Pilih topik">
                {demos.map((demo) => (
                    <DemoCard
                        key={demo.id}
                        title={demo.title}
                        description={demo.description}
                        to={"#" + demo.id}
                    />
                ))}
            </nav>

            <SectionList />
        </main>
    )
}

export default App
