import { Stack } from "expo-router"
import "../global.css"

/**
 * Layout root Expo Router.
 *
 * @returns Navigator stack untuk seluruh halaman.
 */
export default function RootLayout() {
    return (
        <Stack
            screenOptions={{ headerStyle: { backgroundColor: "#0f172a" }, headerTintColor: "#fff" }}
        />
    )
}
