import { useMutation, useQueryClient } from "@tanstack/react-query"

const addTodo = async (title: string) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, completed: false, userId: 1 }),
    })
    if (!res.ok) throw new Error("Gagal menambah todo")
    return res.json()
}

/**
 * Demo mutasi data dengan invalidasi cache.
 *
 * @returns Tombol tambah todo dan status mutasi.
 */
export default function MutatingData() {
    const client = useQueryClient()
    const mutation = useMutation({
        mutationFn: addTodo,
        onSuccess: () => client.invalidateQueries({ queryKey: ["todos"] }),
    })

    return (
        <section className="panel" aria-label="Mutation">
            <h3 className="text-lg font-semibold text-blue-400">Mutating Data</h3>
            <button type="button" className="btn" onClick={() => mutation.mutate("Todo baru")}>
                Tambah todo
            </button>
            <p className="text-sm text-slate-400">
                Status:{" "}
                {mutation.isPending ? "Mengirim..." : mutation.isSuccess ? "Berhasil" : "Siap"}
            </p>
        </section>
    )
}
