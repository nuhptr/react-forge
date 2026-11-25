import { useCallback, useEffect, useRef, useState } from "react"

/**
 * Challenge 2 `useRef`: menyimpan ID `setInterval` di dalam `useRef` agar timer dapat
 * dihentikan, dilanjutkan, dan direset tanpa kehilangan referensi antar-render.
 *
 * @returns Kartu stopwatch detik berbasis `useRef`.
 */
const IntervalTimer = () => {
    const [secondsElapsed, setSecondsElapsed] = useState(0)
    const [isRunning, setIsRunning] = useState(true)
    const intervalIdRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const stopInterval = useCallback(() => {
        if (intervalIdRef.current !== null) {
            clearInterval(intervalIdRef.current)
            intervalIdRef.current = null
        }
    }, [])

    useEffect(() => {
        if (!isRunning) {
            stopInterval()
            return
        }

        intervalIdRef.current = setInterval(() => {
            setSecondsElapsed((prevSeconds) => prevSeconds + 1)
        }, 1000)

        return stopInterval
    }, [isRunning, stopInterval])

    const handleReset = () => {
        setIsRunning(false)
        setSecondsElapsed(0)
    }

    return (
        <div className="card">
            <h2>2. Interval Timer: {secondsElapsed}s</h2>
            <div className="controls">
                <button type="button" onClick={() => setIsRunning((prev) => !prev)}>
                    {isRunning ? "Stop Timer" : "Resume Timer"}
                </button>
                <button type="button" onClick={handleReset}>
                    Reset Timer
                </button>
            </div>
        </div>
    )
}

export default IntervalTimer
