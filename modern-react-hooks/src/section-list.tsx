import { demos } from "./demos"

/**
 * Merender semua section topik secara statis.
 *
 * Single Responsibility: hanya menyusun section dari katalog; App tidak perlu
 * menuliskan puluhan pasangan <section> manual.
 *
 * @returns Daftar section topik.
 */
export default function SectionList() {
    return (
        <>
            {demos.map((demo) => {
                const Component = demo.Component
                return (
                    <section key={demo.id} id={demo.id} className="demo-section">
                        <h2>{demo.title}</h2>
                        <Component />
                    </section>
                )
            })}
        </>
    )
}
