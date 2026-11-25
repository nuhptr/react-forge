/**
 * Props untuk komponen {@link Weather}.
 */
export interface WeatherProps {
    /** Suhu udara dalam derajat Celsius. Nilai bawaan `26`. */
    temperature?: number
}

/**
 * Mengelompokkan kondisi cuaca luar ruangan berdasarkan ambang suhu (`< 15`, `15..25`, `> 25`).
 *
 * @param props Nilai suhu opsional.
 * @returns Pesan kondisi cuaca.
 */
const Weather = ({ temperature = 26 }: WeatherProps) => {
    if (temperature < 15) return <div>It&apos;s cold outside!</div>
    if (temperature <= 25) return <div>It&apos;s nice outside!</div>

    return <div>It&apos;s hot outside!</div>
}

export default Weather
