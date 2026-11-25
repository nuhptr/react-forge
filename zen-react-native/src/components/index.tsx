import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    box: { padding: 12, backgroundColor: "#1e293b", borderRadius: 8 },
})

/** Kartu sederhana: komponen terkecil yang bisa disusun. */
const Card = ({ title }: { title: string }) => (
    <View style={styles.box}>
        <Text style={{ color: "#fff" }}>{title}</Text>
    </View>
)

/**
 * Demo compositional components.
 *
 * @returns Beberapa kartu yang disusun dari satu komponen dasar.
 */
export default function ComponentsTopic() {
    return (
        <View style={{ gap: 8 }}>
            <Card title="Komponen A" />
            <Card title="Komponen B" />
        </View>
    )
}
