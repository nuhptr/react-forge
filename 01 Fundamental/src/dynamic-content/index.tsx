const DynamicContent = () => {
   const myName: string = "Anmastery"
   const multiply = (a: number, b: number) => a * b
   const specialClass = "simple-class"

   return (
      <section>
         {/* Rendering expression */}
         <p>2 + 2 = {2 + 2}</p>

         {/* Rendering variable value */}
         <h1>{myName}</h1>

         {/* Rendering Array */}
         <p>My friend list: {["Alex", "John", "Waheed", "Jordan"]}</p>

         {/* Rendering function value */}
         <p>2 * 2 = {multiply(2, 2)}</p>

         {/* Rendering class */}
         <p className={specialClass}>This is special class</p>
      </section>
   )
}

export default DynamicContent
