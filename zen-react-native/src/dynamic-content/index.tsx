import { View, Text } from "react-native"

const formatPrice = (value: number) => `$${value.toFixed(2)}`

/**
 * Demo konten dinamis dari variabel dan fungsi.
 *
 * @returns Harga yang diformat dari hasil pemanggilan fungsi.
 */
export default function DynamicContentTopic() {
    const price = 19.9
    return (
        <View>
            <Text>Harga: {formatPrice(price)}</Text>
            <Text>{1 + 2 === 3 ? "Benar" : "Salah"}</Text>
        </View>
    )
}
