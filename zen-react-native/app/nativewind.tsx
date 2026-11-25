import { View, Text } from "react-native"

import Topic from "../src/nativewind"

/**
 * Rute Expo Router untuk topik nativewind.
 *
 * @returns Layar topik nativewind.
 */
export default function Screen() {
    return (
        <View style={{ flex: 1, backgroundColor: "#020617", padding: 16, gap: 12 }}>
            <Text style={{ color: "#6b96ff", fontSize: 20, fontWeight: "700" }}>
                {"nativewind"}
            </Text>
            <Topic />
        </View>
    )
}
