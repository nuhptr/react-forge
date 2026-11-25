import AccessibleFieldGroup from "./components/accessible-field-group"

/**
 * Mendemonstrasikan keunggulan `useId()` ketika merender beberapa instans form identik
 * pada satu halaman tanpa menimbulkan duplikasi atribut `id` di DOM.
 *
 * @returns Halaman demonstrasi `useId`.
 */
const UniqueIdentifiers = () => {
    return (
        <main>
            <h1>Unique Identifiers (useId)</h1>
            <AccessibleFieldGroup groupTitle="Formulir Peserta Utama" />
            <AccessibleFieldGroup groupTitle="Formulir Peserta Pendamping" />
        </main>
    )
}

export default UniqueIdentifiers
