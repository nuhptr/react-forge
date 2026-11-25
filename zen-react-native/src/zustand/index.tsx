import { create } from "zustand"
import { View, Text, Button } from "react-native"

interface CounterStore {
    count: number
    increment: () => void
}

/** Store global Zustand. */
export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    increment: () => set((s) => ({ count: s.count + 1 })),
}))

/**
 * Demo Zustand: state tanpa Provider.
 *
 * @returns Tombol yang mengupdate store global.
 */
export default function ZustandTopic() {
    const count = useCounterStore((s) => s.count)
    const increment = useCounterStore((s) => s.increment)
    return (
        <View>
            <Text>{count}</Text>
            <Button title="Tambah" onPress={increment} />
        </View>
    )
}
