import { View, Text } from "react-native"

import Topic from "../src/context"

/**
 * Rute Expo Router untuk topik context.
 *
 * @returns Layar topik context.
 */
export default function Screen() {
    return (
        <View style={{ flex: 1, backgroundColor: "#020617", padding: 16, gap: 12 }}>
            <Text style={{ color: "#6b96ff", fontSize: 20, fontWeight: "700" }}>{"context"}</Text>
            <Topic />
        </View>
    )
}
