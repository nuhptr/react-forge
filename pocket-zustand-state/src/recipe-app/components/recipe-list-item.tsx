interface Recipe {
    id: number
    name: string
    ingredients: string[]
    instructions: string
}

interface RecipeListItemProps {
    recipe: Recipe
    onEdit: (recipe: Recipe) => void
    onRemove: (id: number) => void
}

/**
 * Satu kartu resep dalam daftar.
 *
 * Single Responsibility: hanya menampilkan satu resep dan tombol aksinya.
 */
const RecipeListItem = ({ recipe, onEdit, onRemove }: RecipeListItemProps) => (
    <li className="rounded-lg bg-green-50 p-4 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-green-800">{recipe.name}</h2>
        <p className="mb-2 text-gray-700">
            <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
        </p>
        <p className="mb-4 text-gray-700">
            <strong>Instructions:</strong> {recipe.instructions}
        </p>
        <div className="flex justify-between">
            <button
                type="button"
                onClick={() => onEdit(recipe)}
                className="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
            >
                Edit
            </button>
            <button
                type="button"
                onClick={() => onRemove(recipe.id)}
                className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
                Delete
            </button>
        </div>
    </li>
)

export default RecipeListItem
