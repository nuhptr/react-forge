import { useEffect, useState } from "react"
import { View, Text } from "react-native"

/**
 * Demo useEffect: timer yang dibersihkan saat unmount.
 *
 * @returns Hitungan detik berjalan.
 */
export default function UseEffectTopic() {
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        const id = setInterval(() => setSeconds((s) => s + 1), 1000)
        return () => clearInterval(id)
    }, [])
    return (
        <View>
            <Text>{seconds} detik</Text>
        </View>
    )
}
