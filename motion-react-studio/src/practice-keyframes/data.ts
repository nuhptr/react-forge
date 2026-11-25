/** Konfigurasi satu animasi keyframes. */
export interface KeyframeConfig {
    keyframes: Record<string, string | number>[]
    duration: number
    ease?: string
}

/** Tujuh contoh keyframes yang dipakai modul practice-keyframes. */
export const keyframeExamples = {
    bounce: {
        keyframes: [
            { y: 0, backgroundColor: "#6b96ff" },
            { y: -40, backgroundColor: "#4d7bff" },
            { y: 0, backgroundColor: "#6b96ff" },
        ],
        duration: 1,
        ease: "easeInOut",
    },
    pulse: {
        keyframes: [
            { scale: 1, backgroundColor: "#6b96ff" },
            { scale: 1.05, backgroundColor: "#4d7bff" },
            { scale: 1, backgroundColor: "#6b96ff" },
        ],
        duration: 2,
    },
    color: {
        keyframes: [
            { backgroundColor: "#6b96ff" },
            { backgroundColor: "#ff8a93" },
            { backgroundColor: "#8ae39a" },
            { backgroundColor: "#6b96ff" },
        ],
        duration: 3,
        ease: "linear",
    },
    slide: {
        keyframes: [
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1 },
            { x: 50, opacity: 0 },
        ],
        duration: 3,
    },
    zigzag: {
        keyframes: [
            { x: 0, y: 0 },
            { x: 20, y: -20 },
            { x: -20, y: -20 },
            { x: 20, y: -20 },
            { x: 0, y: 0 },
        ],
        duration: 2,
        ease: "linear",
    },
    wave: {
        keyframes: [{ y: 0 }, { y: -15 }, { y: 0 }],
        duration: 1,
        ease: "easeInOut",
    },
    background: {
        keyframes: [
            { backgroundColor: "#141823" },
            { backgroundColor: "#1a2030" },
            { backgroundColor: "#141823" },
        ],
        duration: 4,
        ease: "easeInOut",
    },
} satisfies Record<string, KeyframeConfig>
