import { Link } from "expo-router"
import { View, Text } from "react-native"

/**
 * Demo navigasi Expo Router via komponen Link.
 *
 * @returns Tautan ke几个 rute contoh.
 */
export default function ExpoRouterTopic() {
    return (
        <View>
            <Text>Navigasi Expo Router</Text>
            <Link href="/">Ke Beranda</Link>
            <Link href="/state">Ke State</Link>
        </View>
    )
}
