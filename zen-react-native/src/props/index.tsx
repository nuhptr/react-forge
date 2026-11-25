import { View, Text } from "react-native"

interface BadgeProps {
    label: string
    tone?: "info" | "danger"
}

/** Komponen anak menerima data lewat props. */
const Badge = ({ label, tone = "info" }: BadgeProps) => (
    <Text style={{ color: tone === "danger" ? "#ff8a93" : "#6b96ff" }}>{label}</Text>
)

/**
 * Demo props: induk mengirim data ke anak.
 *
 * @returns Dua badge dengan tone berbeda.
 */
export default function PropsTopic() {
    return (
        <View>
            <Badge label="Info" />
            <Badge label="Error" tone="danger" />
        </View>
    )
}
