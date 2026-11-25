export interface Demo {
    id: string
    title: string
    description: string
}

/** Katalog 17 topik React Native sesuai urutan kurikulum sumber (disesuaikan A-Z). */
export const demos: Demo[] = [
    { id: "components", title: "Components", description: "View, Text, dan komponen composable." },
    {
        id: "conditional-rendering",
        title: "Conditional Rendering",
        description: "Ternary dan guard clause.",
    },
    { id: "context", title: "Context", description: "Context API menghindari prop drilling." },
    {
        id: "custom-hook",
        title: "Custom Hook",
        description: "Hook kustom yang dapat dipakai ulang.",
    },
    { id: "dynamic-content", title: "Dynamic Content", description: "Ekspresi JS di dalam JSX." },
    { id: "expo-router", title: "Expo Router", description: "Navigasi file-based dengan Link." },
    { id: "flat-list", title: "FlatList", description: "Daftar performant dari array objek." },
    { id: "input", title: "Input", description: "TextInput terkontrol." },
    { id: "jsx", title: "JSX", description: "Markup deklaratif React Native." },
    { id: "nativewind", title: "NativeWind", description: "Utility Tailwind di komponen RN." },
    {
        id: "prop-drilling",
        title: "Prop Drilling",
        description: "Propsi dilewatkan lewat perantara.",
    },
    { id: "props", title: "Props", description: "Aliran data induk ke anak." },
    { id: "state", title: "State", description: "useState untuk angka dan objek." },
    { id: "styles", title: "Styles", description: "StyleSheet API dan inline style." },
    { id: "use-effect", title: "useEffect", description: "Efek samping dan cleanup timer." },
    { id: "use-reducer", title: "useReducer", description: "Reducer dengan action union." },
    { id: "zustand", title: "Zustand", description: "State global tanpa Provider." },
]
