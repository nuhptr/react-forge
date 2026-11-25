import { View, Text } from "react-native"

/** Status yang menentukan tampilan. */
const Status = ({ online }: { online: boolean }) => (
    <Text>{online ? "🟢 Online" : "🔴 Offline"}</Text>
)

/**
 * Demo conditional rendering.
 *
 * @returns Dua status dengan kondisi berbeda.
 */
export default function ConditionalRenderingTopic() {
    return (
        <View>
            <Status online />
            <Status online={false} />
        </View>
    )
}
