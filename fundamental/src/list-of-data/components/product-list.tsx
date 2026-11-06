type Product = {
   id: number
   name: string
   price: string
}

const ProductList = () => {
   const products: Product[] = [
      { id: 1, name: "Phone", price: "$699" },
      { id: 2, name: "Laptop", price: "$1200" },
      { id: 3, name: "Headphones", price: "$199" },
   ]

   return (
      <div>
         {products.map((p) => (
            <div key={p.id}>
               <h1>Name: {p.name}</h1>
               <p>Price: {p.price}</p>
            </div>
         ))}
      </div>
   )
}

export default ProductList
