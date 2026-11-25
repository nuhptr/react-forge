import type { ComponentType } from "react"
import ExpenseTracker from "./expense-tracker"
import FormBuilder from "./form-builder"
import LiveCoding from "./live-coding"
import MealsProject from "./meals-project"
import NotesApp from "./notes-app"
import ProjectNotes from "./project-notes"
import QuizApp from "./quiz-app"
import RecipeApp from "./recipe-app"
import TaskListApp from "./task-list-app"
import TodoList from "./todo-list"
import WatchStore from "./watch-store"

/** Kontrak satu entri katalog modul. */
export interface Demo {
    id: string
    title: string
    description: string
    Component: ComponentType
}

/**
 * Katalog modul berurutan abjad (A-Z).
 *
 * Single Responsibility: hanya mendefinisikan daftar modul; tidak merender UI.
 */
export const demos: Demo[] = [
    {
        id: "expense-tracker",
        title: "Expense Tracker",
        description: "Manajemen state transaksi keuangan dengan Zustand.",
        Component: ExpenseTracker,
    },
    {
        id: "form-builder",
        title: "Form Builder",
        description: "State formulir dinamis untuk input yang banyak.",
        Component: FormBuilder,
    },
    {
        id: "live-coding",
        title: "Live Coding",
        description: "Dasar membuat store Zustand dan subscribe state.",
        Component: LiveCoding,
    },
    {
        id: "meals-project",
        title: "Meals Project",
        description: "State daftar makanan dan filter kategori.",
        Component: MealsProject,
    },
    {
        id: "notes-app",
        title: "Notes App",
        description: "State catatan dengan operasi CRUD lengkap.",
        Component: NotesApp,
    },
    {
        id: "project-notes",
        title: "Project Notes",
        description: "State catatan sederhana dengan Zustand.",
        Component: ProjectNotes,
    },
    {
        id: "quiz-app",
        title: "Quiz App",
        description: "State kuis, soal, dan jawaban pengguna.",
        Component: QuizApp,
    },
    {
        id: "recipe-app",
        title: "Recipe App",
        description: "State resep masakan dan bahan-bahan.",
        Component: RecipeApp,
    },
    {
        id: "task-list-app",
        title: "Task List App",
        description: "State daftar tugas dengan sidebar dan modal.",
        Component: TaskListApp,
    },
    {
        id: "todo-list",
        title: "Todo List",
        description: "State todo list klasik dengan Zustand.",
        Component: TodoList,
    },
    {
        id: "watch-store",
        title: "Watch Store",
        description: "State toko jam: katalog produk dan keranjang belanja.",
        Component: WatchStore,
    },
]
