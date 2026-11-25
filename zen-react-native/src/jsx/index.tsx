import { View, Text } from "react-native"

/**
 * Demo JSX: elemen dengan atribut dan ekspresi.
 *
 * @returns Tiga baris teks dengan gaya berbeda.
 */
export default function JsxTopic() {
    const name = "React Native"
    return (
        <View>
            <Text>{`Halo, ${name}!`}</Text>
            <Text style={{ fontWeight: "bold" }}>Teks tebal</Text>
            <Text style={{ color: "#6b96ff" }}>Teks berwarna</Text>
        </View>
    )
}
