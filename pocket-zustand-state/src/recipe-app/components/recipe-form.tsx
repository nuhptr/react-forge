interface RecipeFormProps {
    name: string
    ingredients: string
    instructions: string
    editing: boolean
    onNameChange: (value: string) => void
    onIngredientsChange: (value: string) => void
    onInstructionsChange: (value: string) => void
    onSubmit: () => void
    onCancel: () => void
}

const inputClass =
    "w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"

/**
 * Formulir tambah/edit resep.
 *
 * Single Responsibility: hanya mengumpulkan input; logika simpan ada di induk.
 *
 * @returns Formulir dengan field nama, bahan, dan instruksi.
 */
const RecipeForm = ({
    name,
    ingredients,
    instructions,
    editing,
    onNameChange,
    onIngredientsChange,
    onInstructionsChange,
    onSubmit,
    onCancel,
}: RecipeFormProps) => (
    <div className="mb-6 space-y-4">
        <input
            type="text"
            value={name}
            onChange={(event) => onNameChange(event.target.value)}
            placeholder="Recipe Name"
            className={inputClass}
        />
        <input
            type="text"
            value={ingredients}
            onChange={(event) => onIngredientsChange(event.target.value)}
            placeholder="Ingredients (comma separated)"
            className={inputClass}
        />
        <textarea
            value={instructions}
            onChange={(event) => onInstructionsChange(event.target.value)}
            placeholder="Instructions"
            className={`${inputClass} h-32`}
        />
        <div className="flex justify-between">
            {editing ? (
                <>
                    <button
                        type="button"
                        onClick={onSubmit}
                        className="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
                    >
                        Update Recipe
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="rounded-lg bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                </>
            ) : (
                <button
                    type="button"
                    onClick={onSubmit}
                    className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                >
                    Add Recipe
                </button>
            )}
        </div>
    </div>
)

export default RecipeForm
