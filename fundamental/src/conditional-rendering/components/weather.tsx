/**
 * Props for the {@link Weather} component.
 */
export interface WeatherProps {
    /** Ambient temperature in degrees Celsius. Defaults to `26`. */
    temperature?: number
}

/**
 * Classifies outdoor comfort based on temperature thresholds (`< 15`, `15..25`, `> 25`).
 *
 * @param props Optional temperature reading.
 * @returns Weather summary message.
 */
const Weather = ({ temperature = 26 }: WeatherProps) => {
    if (temperature < 15) return <div>It&apos;s cold outside!</div>
    if (temperature <= 25) return <div>It&apos;s nice outside!</div>
    return <div>It&apos;s hot outside!</div>
}

export default Weather
