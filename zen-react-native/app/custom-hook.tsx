import { View, Text } from "react-native"

import Topic from "../src/custom-hook"

/**
 * Rute Expo Router untuk topik custom-hook.
 *
 * @returns Layar topik custom-hook.
 */
export default function Screen() {
    return (
        <View style={{ flex: 1, backgroundColor: "#020617", padding: 16, gap: 12 }}>
            <Text style={{ color: "#6b96ff", fontSize: 20, fontWeight: "700" }}>
                {"custom-hook"}
            </Text>
            <Topic />
        </View>
    )
}
