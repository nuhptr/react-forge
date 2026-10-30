type DealerProps = {
   name?: string
   from?: string
}

const Dealer = ({ name, from }: DealerProps) => {
   return (
      <div>
         {/* If value null assign with "Default" and "Indonesia" */}
         <h1>Dealer Name: {name ?? "Default "}</h1>
         <p>From : {from ?? "Indonesia"}</p>
      </div>
   )
}

export default Dealer
