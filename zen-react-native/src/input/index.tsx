import { useState } from "react"
import { TextInput, View, Text } from "react-native"

/**
 * Demo TextInput terkontrol.
 *
 * @returns Input nama beserta teks yang diketik pengguna.
 */
export default function InputTopic() {
    const [name, setName] = useState("")
    return (
        <View>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Masukkan nama"
                style={{
                    borderWidth: 1,
                    borderColor: "#334155",
                    padding: 10,
                    borderRadius: 8,
                    color: "#fff",
                }}
            />
            <Text>Halo, {name || "..."}!</Text>
        </View>
    )
}
