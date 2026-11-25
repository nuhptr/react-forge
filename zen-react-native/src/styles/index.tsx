import { StyleSheet, View, Text } from "react-native"

const styles = StyleSheet.create({
    card: { padding: 16, backgroundColor: "#1e293b", borderRadius: 12 },
    title: { color: "#fff", fontSize: 18, fontWeight: "600" },
})

/**
 * Demo StyleSheet: gaya terpusat dan dipakai ulang.
 *
 * @returns Kartu bergaya.
 */
export default function StylesTopic() {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>StyleSheet API</Text>
            <Text style={{ color: "#94a3b8" }}>Gaya inline juga didukung.</Text>
        </View>
    )
}
