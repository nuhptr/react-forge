import { useReducer } from "react"
import { View, Text, Button } from "react-native"

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" }
const reducer = (state: number, action: Action) => {
    switch (action.type) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return 0
    }
}

/**
 * Demo useReducer dengan action union.
 *
 * @returns Counter dengan tiga aksi.
 */
export default function UseReducerTopic() {
    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <View>
            <Text>{count}</Text>
            <Button title="+1" onPress={() => dispatch({ type: "increment" })} />
            <Button title="-1" onPress={() => dispatch({ type: "decrement" })} />
            <Button title="Reset" onPress={() => dispatch({ type: "reset" })} />
        </View>
    )
}
