import { View, Text } from "react-native"

/** Komponen terdalam. */
const Leaf = ({ message }: { message: string }) => <Text>{message}</Text>
/** Perantara yang meneruskan props. */
const Middle = ({ message }: { message: string }) => <Leaf message={message} />

/**
 * Demo prop drilling lewat satu tingkat perantara.
 *
 * @returns Pesan yang sampai ke komponen terdalam.
 */
export default function PropDrillingTopic() {
    return (
        <View>
            <Middle message="Halo dari Root" />
        </View>
    )
}
