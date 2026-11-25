import { useState } from "react"
import { View, Text, Pressable, Button } from "react-native"

/**
 * Demo state: penghitung dengan batas bawah nol.
 *
 * @returns Tombol tambah/kurang dan nilai terkini.
 */
export default function StateTopic() {
    const [count, setCount] = useState(0)
    return (
        <View>
            <Text style={{ fontSize: 24 }}>{count}</Text>
            <Button title="Tambah" onPress={() => setCount((c) => c + 1)} />
            <Pressable onPress={() => setCount((c) => Math.max(0, c - 1))}>
                <Text>Kurang</Text>
            </Pressable>
        </View>
    )
}
