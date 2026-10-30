type ShoppingData = {
   items: string[]
}

const Shopping = ({ items }: ShoppingData) => {
   console.log(items)

   return (
      <section>
         <ol>
            {items.map((item) => (
               <li key={Math.random() * 5}>{item}</li>
            ))}
         </ol>
      </section>
   )
}

const ListOfData = () => {
   const data: string[] = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"]

   return (
      <section>
         <Shopping items={data} />
      </section>
   )
}

export default ListOfData
