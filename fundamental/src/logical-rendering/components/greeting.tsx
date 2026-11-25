/**
 * Pilihan waktu sapaan yang didukung oleh komponen {@link Greeting}.
 */
export type TimeOfDay = "morning" | "afternoon" | "evening"

/**
 * Props untuk komponen {@link Greeting}.
 */
export interface GreetingProps {
    timeOfDay: TimeOfDay
}

/**
 * Merender pesan sapaan kontekstual berdasarkan waktu (`timeOfDay`).
 *
 * @param props Konfigurasi periode waktu.
 * @returns Pesan sapaan sesuai waktu.
 */
const Greeting = ({ timeOfDay }: GreetingProps) => {
    if (timeOfDay === "morning") return <div>Good Morning!</div>
    if (timeOfDay === "afternoon") return <div>Good Afternoon!</div>

    return <div>Good Evening!</div>
}

export default Greeting
