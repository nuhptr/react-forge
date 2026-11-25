import { useState } from "react";

import useStore from "../store";
import RecipeForm from "./recipe-form";
import RecipeListItem from "./recipe-list-item";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
}

/**
 * Halaman resep: state formulir dan aksi CRUD.
 *
 * Single Responsibility: mengelola state + handler; presentasi dipisah ke
 * `RecipeForm` dan `RecipeListItem`.
 *
 * @returns Daftar resep dan formulir tambah/edit.
 */
const RecipeApp = () => {
  const { recipes, addRecipe, removeRecipe } = useStore();
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);

  const resetForm = () => {
    setName("");
    setIngredients("");
    setInstructions("");
    setEditingRecipe(null);
  };

  const parseIngredients = (value: string) =>
    value.split(",").map((ingredient) => ingredient.trim());

  const isValid = () =>
    name.trim() !== "" &&
    ingredients.trim() !== "" &&
    instructions.trim() !== "";

  const handleAdd = () => {
    if (!isValid()) return;
    addRecipe({
      id: Date.now(),
      name,
      ingredients: parseIngredients(ingredients),
      instructions,
    });
    resetForm();
  };

  const handleEdit = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setName(recipe.name);
    setIngredients(recipe.ingredients.join(", "));
    setInstructions(recipe.instructions);
  };

  const handleUpdate = () => {
    if (!isValid() || !editingRecipe) return;
    removeRecipe(editingRecipe.id);
    addRecipe({
      id: editingRecipe.id,
      name,
      ingredients: parseIngredients(ingredients),
      instructions,
    });
    resetForm();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-green-100">
      <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-green-800">
          Recipe Book
        </h1>

        <RecipeForm
          name={name}
          ingredients={ingredients}
          instructions={instructions}
          editing={editingRecipe !== null}
          onNameChange={setName}
          onIngredientsChange={setIngredients}
          onInstructionsChange={setInstructions}
          onSubmit={editingRecipe ? handleUpdate : handleAdd}
          onCancel={resetForm}
        />

        <ul className="space-y-4">
          {recipes.map((recipe) => (
            <RecipeListItem
              key={recipe.id}
              recipe={recipe}
              onEdit={handleEdit}
              onRemove={removeRecipe}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeApp;
