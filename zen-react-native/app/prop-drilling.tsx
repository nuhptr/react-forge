import { View, Text } from "react-native"

import Topic from "../src/prop-drilling"

/**
 * Rute Expo Router untuk topik prop-drilling.
 *
 * @returns Layar topik prop-drilling.
 */
export default function Screen() {
    return (
        <View style={{ flex: 1, backgroundColor: "#020617", padding: 16, gap: 12 }}>
            <Text style={{ color: "#6b96ff", fontSize: 20, fontWeight: "700" }}>
                {"prop-drilling"}
            </Text>
            <Topic />
        </View>
    )
}
