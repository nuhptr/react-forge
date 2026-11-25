import { View, Text } from "react-native"

import Topic from "../src/expo-router"

/**
 * Rute Expo Router untuk topik expo-router.
 *
 * @returns Layar topik expo-router.
 */
export default function Screen() {
    return (
        <View style={{ flex: 1, backgroundColor: "#020617", padding: 16, gap: 12 }}>
            <Text style={{ color: "#6b96ff", fontSize: 20, fontWeight: "700" }}>
                {"expo-router"}
            </Text>
            <Topic />
        </View>
    )
}
