type CompOneProps = {
   count: number
   onClickHandler: () => void
}

const CompOne = ({ count, onClickHandler }: CompOneProps) => {
   return (
      <div>
         <p>{count}</p>
         <button onClick={onClickHandler}>Increment</button>
      </div>
   )
}

export default CompOne
