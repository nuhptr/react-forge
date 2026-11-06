type CompTwoProps = {
   count: number
   onClickHandler: () => void
}

const CompTwo = ({ count, onClickHandler }: CompTwoProps) => {
   return (
      <div>
         <p>{count}</p>
         <button onClick={onClickHandler}>Increment</button>
      </div>
   )
}

export default CompTwo
