type ProductProps = {
   name: string
   price: number
}

const Product = (props: ProductProps) => {
   return (
      <div>
         <h1>Product Name: {props.name}</h1>
         <p>Product Price: {props.price}</p>
      </div>
   )
}

export default Product
