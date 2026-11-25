import { FlatList, Text, View, StyleSheet } from "react-native"

const items = Array.from({ length: 20 }, (_, i) => ({ id: String(i), title: `Item ${i + 1}` }))

/** Satu baris daftar. */
const Row = ({ title }: { title: string }) => (
    <View style={styles.row}>
        <Text style={{ color: "#fff" }}>{title}</Text>
    </View>
)

const styles = StyleSheet.create({
    row: { padding: 12, borderBottomWidth: 1, borderColor: "#334155" },
})

/**
 * Demo FlatList dengan data array objek.
 *
 * @returns Daftar yang bisa di-scroll.
 */
export default function FlatListTopic() {
    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Row title={item.title} />}
        />
    )
}
