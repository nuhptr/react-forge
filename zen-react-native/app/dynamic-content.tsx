import { View, Text } from "react-native"

import Topic from "../src/dynamic-content"

/**
 * Rute Expo Router untuk topik dynamic-content.
 *
 * @returns Layar topik dynamic-content.
 */
export default function Screen() {
    return (
        <View style={{ flex: 1, backgroundColor: "#020617", padding: 16, gap: 12 }}>
            <Text style={{ color: "#6b96ff", fontSize: 20, fontWeight: "700" }}>
                {"dynamic-content"}
            </Text>
            <Topic />
        </View>
    )
}
