import { View, Text } from "react-native"

import Topic from "../src/state"

/**
 * Rute Expo Router untuk topik state.
 *
 * @returns Layar topik state.
 */
export default function Screen() {
    return (
        <View style={{ flex: 1, backgroundColor: "#020617", padding: 16, gap: 12 }}>
            <Text style={{ color: "#6b96ff", fontSize: 20, fontWeight: "700" }}>{"state"}</Text>
            <Topic />
        </View>
    )
}
