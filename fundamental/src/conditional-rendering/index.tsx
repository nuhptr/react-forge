type PasswordProps = {
   isValid: boolean
}

const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>Invalid Password</h1>

const Password = ({ isValid }: PasswordProps) => (isValid ? <ValidPassword /> : <InvalidPassword />)

const ConditionalRendering = () => {
   return (
      <section>
         <Password isValid={true} />
      </section>
   )
}

export default ConditionalRendering
