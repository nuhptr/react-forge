/**
 * Props for the {@link ShoppingItemsList} component.
 */
interface ShoppingItemsListProps {
    /** Ordered array of shopping item labels. */
    items: string[]
}

/**
 * Renders an ordered list of shopping items using stable item keys.
 *
 * @param props Component properties.
 * @returns Semantic `<ol>` shopping list.
 */
const ShoppingItemsList = ({ items }: ShoppingItemsListProps) => {
    return (
        <ol>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ol>
    )
}

const SHOPPING_ITEMS: string[] = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoodie"]

/**
 * Demonstrates rendering arrays of data with `.map()` and unique `key` props.
 *
 * @returns Shopping list showcase section.
 */
const ListOfData = () => {
    return (
        <section>
            <ShoppingItemsList items={SHOPPING_ITEMS} />
        </section>
    )
}

export default ListOfData
