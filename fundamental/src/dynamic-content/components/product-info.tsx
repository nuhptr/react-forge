const ProductInfo = () => {
   const product = { name: "Laptop", price: 1200, availibility: "In Stock" }

   return (
      <div>
         <h1>Name: {product.name}</h1>
         <p>Price: ${product.price}</p>
         <p>Availibility: {product.availibility}</p>
      </div>
   )
}

export default ProductInfo
