import { useState, type ChangeEvent } from "react"

type ShoppingItem = {
   name: string
   quantity: number
}

const ShoppingList = () => {
   const [items, setItems] = useState<ShoppingItem[]>([])
   const [name, setName] = useState("")
   const [quantity, setQuantity] = useState("")

   const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
      event.preventDefault()

      const trimmedName = name.trim()
      const parsedQuantity = Number.parseInt(quantity, 10)

      if (!trimmedName || !Number.isInteger(parsedQuantity) || parsedQuantity <= 0) return

      const newItem: ShoppingItem = {
         name: trimmedName,
         quantity: parsedQuantity,
      }

      setItems((prevItems) => [...prevItems, newItem])

      setName("")
      setQuantity("")
   }

   return (
      <div>
         <h1>Shopping List</h1>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="Item name"
               value={name}
               onChange={(event) => setName(event.target.value)}
            />
            <input
               type="number"
               placeholder="Quantity"
               value={quantity}
               onChange={(event) => setQuantity(event.target.value)}
            />
            <button type="submit">Add Item</button>
         </form>

         <ul>
            {items.map((item, index) => (
               <li key={`${item.name}-${index}`}>
                  {item.name} - Quantity: {item.quantity}
               </li>
            ))}
         </ul>
      </div>
   )
}

export default ShoppingList
