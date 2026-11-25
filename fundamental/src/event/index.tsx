/**
 * Mencetak bilangan bulat acak antara `0` hingga `10` ke konsol saat tombol diklik.
 */
const RandomNumberButton = () => {
    const handleClick = () => {
        console.log(Math.round(Math.random() * 10))
    }

    return (
        <button type="button" onClick={handleClick}>
            Generate Random Number
        </button>
    )
}

/**
 * Mencetak pesan peringatan ke konsol ketika pengguna menyalin teks paragraf.
 */
const CopyProtectedText = () => {
    const handleCopy = () => {
        console.log("Stop stealing my content")
    }

    return <p onCopy={handleCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
}

/**
 * Mencetak pesan ke konsol saat kursor masuk ke area elemen paragraf.
 */
const HoverTrackerText = () => {
    const handleMouseEnter = () => {
        console.log("Mouse enter event fired!")
    }

    return (
        <p onMouseEnter={handleMouseEnter}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    )
}

/**
 * Mendemonstrasikan pemasangan event handler DOM (`onClick`, `onCopy`, `onMouseEnter`) pada JSX.
 *
 * @returns Kumpulan contoh interaksi event dasar.
 */
const EventExamples = () => {
    return (
        <>
            <RandomNumberButton />
            <CopyProtectedText />
            <HoverTrackerText />
        </>
    )
}

export default EventExamples
