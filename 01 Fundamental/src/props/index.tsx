type UserProps = {
   // Make it nullable
   img?: string
   name?: string
   age?: number
   isMarried?: boolean
   hobbies?: string[]
}

const User = (props: UserProps) => {
   return (
      <section>
         <img src={props.img} alt={props.name} width={200} />
         <h1>Name {props.name}</h1>
         <p>Age {props.age}</p>
         <p>Is married {props.isMarried}</p>
         <p>Hobbies {props.hobbies}</p>
      </section>
   )
}

const Props = () => {
   return (
      <User
         img="https://avatars.githubusercontent.com/u/85052811?v=4"
         name="Anmastery"
         age={18}
         isMarried={false}
         hobbies={["coding", "read books", "sleeping"]}
      />
   )
}

export default Props
