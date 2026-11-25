import { useState } from "react"
import { View, Text, Button } from "react-native"

/** Hook kustom: logika counter dipisah dari UI. */
const useCounter = (initial = 0) => {
    const [value, setValue] = useState(initial)

    return {
        value,
        increment: () => setValue((v) => v + 1),
        decrement: () => setValue((v) => v - 1),
    }
}

/**
 * Demo custom hook.
 *
 * @returns UI yang memakai logika hook kustom.
 */
export default function CustomHookTopic() {
    const counter = useCounter()
    return (
        <View>
            <Text>{counter.value}</Text>
            <Button title="+" onPress={counter.increment} />
            <Button title="-" onPress={counter.decrement} />
        </View>
    )
}
