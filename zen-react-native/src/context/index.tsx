import { createContext, useContext, useState, type ReactNode } from "react"
import { View, Text, Button } from "react-native"

const CountContext = createContext<number | null>(null)

/** Provider menyimpan state bersama. */
const CountProvider = ({ children }: { children: ReactNode }) => {
    const [count, setCount] = useState(0)

    return (
        <CountContext.Provider value={count}>
            <Button title="Tambah" onPress={() => setCount((c) => c + 1)} />
            {children}
        </CountContext.Provider>
    )
}

/** Konsumen membaca konteks tanpa props. */
const Consumer = () => {
    const count = useContext(CountContext)
    return <Text>Count: {count}</Text>
}

/**
 * Demo Context API.
 *
 * @returns Provider dengan konsumen.
 */
export default function ContextTopic() {
    return (
        <View>
            <CountProvider>
                <Consumer />
            </CountProvider>
        </View>
    )
}
