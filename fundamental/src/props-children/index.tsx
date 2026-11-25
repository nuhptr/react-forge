import Card from "./components/card"

/**
 * Struktur data materi yang dirender ke dalam setiap komponen {@link Card}.
 */
interface LearningCardItem {
    id: number
    title: string
    description: string
}

const LEARNING_CARDS: LearningCardItem[] = [
    {
        id: 1,
        title: "Learn React",
        description: "Build interactive user interfaces with reusable components.",
    },
    {
        id: 2,
        title: "TypeScript Basics",
        description: "Use types to make your application code safer and clearer.",
    },
    {
        id: 3,
        title: "Component Composition",
        description: "Create flexible components by passing content through children.",
    },
]

/**
 * Mendemonstrasikan pengiriman elemen JSX bersarang secara fleksibel melalui prop `children`.
 *
 * @returns Daftar komponen `Card` hasil komposisi.
 */
const PropsChildren = () => {
    return (
        <section>
            <h1>My Cards</h1>
            {LEARNING_CARDS.map(({ id, title, description }) => (
                <Card key={id}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </Card>
            ))}
        </section>
    )
}

export default PropsChildren
