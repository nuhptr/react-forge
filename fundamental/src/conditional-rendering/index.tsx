/**
 * Props for the {@link Password} validation display component.
 */
interface PasswordProps {
    isValid: boolean
}

/** Renders feedback when a password satisfies validation constraints. */
const ValidPassword = () => <h1>Valid Password</h1>

/** Renders feedback when a password fails validation constraints. */
const InvalidPassword = () => <h1>Invalid Password</h1>

/**
 * Selects between {@link ValidPassword} and {@link InvalidPassword} using a ternary expression.
 *
 * @param props Validation state props.
 * @returns Matching password status indicator.
 */
const Password = ({ isValid }: PasswordProps) => (isValid ? <ValidPassword /> : <InvalidPassword />)

/**
 * Demonstrates conditional JSX rendering based on boolean props.
 *
 * @returns Conditional rendering showcase section.
 */
const ConditionalRendering = () => {
    return (
        <section>
            <Password isValid={true} />
        </section>
    )
}

export default ConditionalRendering
