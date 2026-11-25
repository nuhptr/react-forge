import { View, Text } from "react-native"

import Topic from "../src/flat-list"

/**
 * Rute Expo Router untuk topik flat-list.
 *
 * @returns Layar topik flat-list.
 */
export default function Screen() {
    return (
        <View style={{ flex: 1, backgroundColor: "#020617", padding: 16, gap: 12 }}>
            <Text style={{ color: "#6b96ff", fontSize: 20, fontWeight: "700" }}>{"flat-list"}</Text>
            <Topic />
        </View>
    )
}
