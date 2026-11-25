/**
 * Menampilkan teks sapaan dinamis dan tanggal hari ini menggunakan ekspresi JavaScript di dalam JSX.
 *
 * @returns Blok tampilan sapaan dan tanggal saat ini.
 */
const GreetingContent = () => {
    const greetingMessage = "Hello"
    const currentDate = new Date()

    return (
        <div>
            <h1>{greetingMessage}</h1>
            <p>Date: {currentDate.getDate()}</p>
        </div>
    )
}

export default GreetingContent
