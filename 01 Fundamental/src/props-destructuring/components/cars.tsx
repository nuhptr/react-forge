type CarsProps = {
   name?: string
   type?: string
}

const Cars = ({ name, type }: CarsProps) => {
   return (
      <div>
         <h1>Car name is: {name ?? "Default"}</h1>
         <p>Type: {type ?? "AA"}</p>
      </div>
   )
}

export default Cars
