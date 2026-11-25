import type { ReactNode } from "react"

/**
 * Props untuk komponen pembungkus {@link Card}.
 */
export interface CardProps {
    /** Konten JSX bebas yang disisipkan di dalam kartu. */
    children: ReactNode
}

/**
 * Komponen kontainer generik yang mendemonstrasikan komposisi slot melalui `props.children`.
 *
 * Menerapkan Open/Closed Principle (OCP): komponen pemanggil bebas memperluas isi kartu
 * lewat komposisi tanpa perlu mengubah kode internal `Card`.
 *
 * @param props Properti pembungkus kartu.
 * @returns Elemen `<article>` semantik yang membungkus `children`.
 */
const Card = ({ children }: CardProps) => {
    return <article>{children}</article>
}

export default Card
