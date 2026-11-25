/**
 * Props untuk komponen {@link Car}.
 */
export interface CarProps {
    modelName?: string
    bodyType?: string
}

/**
 * Merender informasi satu unit mobil menggunakan destructuring `props` dan nilai default.
 *
 * @param props Nama model dan tipe bodi kendaraan opsional.
 * @returns Blok informasi kendaraan.
 */
const Car = ({ modelName = "Default", bodyType = "MPV" }: CarProps) => {
    return (
        <div>
            <h2>Car Model: {modelName}</h2>
            <p>Body Type: {bodyType}</p>
        </div>
    )
}

export default Car
