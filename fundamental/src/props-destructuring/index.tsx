type UserProps = {
   img?: string
   name?: string
   age?: number
   isMarried?: boolean
   hobbies?: string[]
}

// In here call props one by one not by 1 variable only
const User = ({ img, name, age, isMarried, hobbies }: UserProps) => {
   return (
      <section>
         <img src={img} alt={name} width={200} />
         <h1>Name: {name}</h1>
         <p>Age: {age}</p>
         <p>Is married: {isMarried}</p>
         <p>Hobbies: {hobbies} </p>
      </section>
   )
}

const PropsDestructuring = () => {
   return (
      <div>
         <User
            img="https://avatars.githubusercontent.com/u/85052811?v=4"
            name="Anmastery"
            age={18}
            isMarried={true}
            hobbies={["Coding", "Reading", "Sleeping"]}
         />
      </div>
   )
}

export default PropsDestructuring
