import { Tabs } from "./tabs"

/**
 * Daftar tab yang diekstrak jadi fungsi lokal dalam file yang sama.
 *
 * Single Responsibility: hanya merender navigasi tab; panel ditangani fungsi
 * terpisah di bawah.
 *
 * @returns Elemen Tabs.List berisi tiga Tabs.Tab.
 */
const TabNavigation = () => (
    <Tabs.List>
        <Tabs.Tab id="satu">Satu</Tabs.Tab>
        <Tabs.Tab id="dua">Dua</Tabs.Tab>
        <Tabs.Tab id="tiga">Tiga</Tabs.Tab>
    </Tabs.List>
)

/**
 * Kumpulan panel yang diekstrak jadi fungsi lokal.
 *
 * @returns Elemen Tabs.Panel untuk tiap tab.
 */
const TabContents = () => (
    <>
        <Tabs.Panel id="satu">Konten panel satu.</Tabs.Panel>
        <Tabs.Panel id="dua">Konten panel dua.</Tabs.Panel>
        <Tabs.Panel id="tiga">Konten panel tiga.</Tabs.Panel>
    </>
)

/**
 * Demo compound component tabs.
 *
 * @returns Tabs dengan navigasi dan panel yang sudah diekstrak.
 */
export default function CompoundComponent() {
    return (
        <Tabs initial="satu">
            <TabNavigation />
            <TabContents />
        </Tabs>
    )
}
