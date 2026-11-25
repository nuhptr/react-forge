import { useId, useState, type SubmitEvent } from "react"

/**
 * Represents an entry in the shopping list state.
 */
interface ShoppingItem {
    id: string
    name: string
    quantity: number
}

/**
 * State challenge 3: validated form managing an array of `{ id, name, quantity }` objects.
 *
 * @returns Shopping list manager component.
 */
const ShoppingList = () => {
    const itemNameInputId = useId()
    const itemQuantityInputId = useId()
    const [items, setItems] = useState<ShoppingItem[]>([])
    const [itemName, setItemName] = useState("")
    const [itemQuantity, setItemQuantity] = useState("")

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()

        const trimmedName = itemName.trim()
        const parsedQuantity = Number.parseInt(itemQuantity, 10)

        if (!trimmedName || !Number.isInteger(parsedQuantity) || parsedQuantity <= 0) return

        const newItem: ShoppingItem = {
            id: crypto.randomUUID(),
            name: trimmedName,
            quantity: parsedQuantity,
        }

        setItems((prevItems) => [...prevItems, newItem])
        setItemName("")
        setItemQuantity("")
    }

    return (
        <div>
            <h2>Shopping List</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor={itemNameInputId}>Item: </label>
                <input
                    id={itemNameInputId}
                    type="text"
                    placeholder="Item name"
                    value={itemName}
                    onChange={(event) => setItemName(event.target.value)}
                />

                <label htmlFor={itemQuantityInputId}>Quantity: </label>
                <input
                    id={itemQuantityInputId}
                    type="number"
                    min={1}
                    placeholder="Quantity"
                    value={itemQuantity}
                    onChange={(event) => setItemQuantity(event.target.value)}
                />

                <button type="submit">Add Item</button>
            </form>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList
