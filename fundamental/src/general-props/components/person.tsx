/**
 * Props untuk komponen {@link Person}.
 */
export interface PersonProps {
    name: string
    age: number
}

/**
 * Menampilkan nama dan usia seseorang yang dikirim melalui `props`.
 *
 * @param props Properti data orang.
 * @returns Blok informasi nama dan usia.
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
