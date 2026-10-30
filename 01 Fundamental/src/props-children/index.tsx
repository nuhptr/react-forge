import Card from "./card"

type CardData = {
   id: number
   title: string
   content: string
}

const PropsChildren = () => {
   const data: CardData[] = [
      {
         id: 1,
         title: "Learn React",
         content: "Build interactive user interfaces with reusable components.",
      },
      {
         id: 2,
         title: "TypeScript Basics",
         content: "Use types to make your application code safer and clearer.",
      },
      {
         id: 3,
         title: "Component Composition",
         content: "Create flexible components by passing content through children.",
      },
   ]

   return (
      <div>
         <h1>My Cards</h1>
         {data.map(({ id, title, content }) => (
            <Card key={id}>
               <h2>{title}</h2>
               <p>{content}</p>
            </Card>
         ))}
      </div>
   )
}

export default PropsChildren
