/**
 * Props for the {@link Person} component.
 */
export interface PersonProps {
    name: string
    age: number
}

/**
 * Displays a person's name and age passed through `props`.
 *
 * @param props Person display properties.
 * @returns Person summary block.
 */
const Person = (props: PersonProps) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default Person
