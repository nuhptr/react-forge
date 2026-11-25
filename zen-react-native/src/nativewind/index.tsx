import { View, Text } from "react-native"

/**
 * Demo NativeWind: className alih-alih StyleSheet.
 *
 * @returns Kartu dengan kelas Tailwind.
 */
export default function NativeWindTopic() {
    return (
        <View className="flex-1 items-center justify-center bg-slate-900 p-4">
            <Text className="text-lg font-bold text-white">NativeWind aktif</Text>
        </View>
    )
}
