import type { ReactNode } from "react"

/**
 * Props for the {@link Card} container component.
 */
export interface CardProps {
    /** Arbitrary JSX content projected inside the card wrapper. */
    children: ReactNode
}

/**
 * Generic container component demonstrating slot projection via `props.children`.
 *
 * Satisfies the Open/Closed Principle (OCP): callers extend card content
 * through composition without modifying `Card` itself.
 *
 * @param props Card wrapper props.
 * @returns Semantic `<article>` containing `children`.
 */
const Card = ({ children }: CardProps) => {
    return <article>{children}</article>
}

export default Card
