import { Link } from "expo-router"
import { FlatList, Text, View } from "react-native"

import { demos } from "../src/demos"

/**
 * Beranda: daftar 17 topik React Native.
 *
 * Single Responsibility: hanya menampilkan katalog dan tautan; materi ada di
 * masing-masing rute.
 *
 * @returns Daftar topik yang bisa dibuka.
 */
export default function HomeScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: "#020617", padding: 16 }}>
            <Text style={{ color: "#fff", fontSize: 24, fontWeight: "700", marginBottom: 16 }}>
                Zen React Native
            </Text>
            <FlatList
                data={demos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Link
                        href={`/${item.id}`}
                        style={{ padding: 12, borderBottomWidth: 1, borderColor: "#1e293b" }}>
                        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
                            {item.title}
                        </Text>
                        <Text style={{ color: "#94a3b8", fontSize: 12 }}>{item.description}</Text>
                    </Link>
                )}
            />
        </View>
    )
}
