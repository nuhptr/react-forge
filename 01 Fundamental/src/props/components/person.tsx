type PersonProps = {
   name: string
   age: number
}

const Person = (props: PersonProps) => {
   return (
      <div>
         <h1>Name: {props.name}</h1>
         <p>Age: {props.age}</p>
      </div>
   )
}

export default Person
