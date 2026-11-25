/**
 * Mendemonstrasikan penyisipan ekspresi JavaScript, variabel, array, pemanggilan fungsi,
 * serta nama class dinamis menggunakan kurung kurawal `{}` di JSX.
 *
 * @returns Section contoh konten dinamis pada JSX.
 */
const DynamicContent = () => {
    const userName = "Anmastery"
    const friendNames = ["Alex", "John", "Waheed", "Jordan"]
    const multiplyNumbers = (first: number, second: number): number => first * second
    const highlightedClassName = "simple-class"

    return (
        <section>
            {/* Ekspresi aritmatika langsung */}
            <p>2 + 2 = {2 + 2}</p>

            {/* Nilai variabel string */}
            <h1>{userName}</h1>

            {/* Ekspresi array yang diformat */}
            <p>My friend list: {friendNames.join(", ")}</p>

            {/* Pemanggilan fungsi helper */}
            <p>2 * 2 = {multiplyNumbers(2, 2)}</p>

            {/* Binding nama class secara dinamis */}
            <p className={highlightedClassName}>This paragraph uses a dynamic class name</p>
        </section>
    )
}

export default DynamicContent
