import { useState } from "react"
import { FiX } from "react-icons/fi"

import { data } from "../db/data"
import { colors, priceRanges } from "../filter-data"
import { useFilterStore } from "../store"
import FilterSection from "./filter-section"
import Navigation from "./Navigation"

interface PriceRangeOption {
    label: string
    min: number
    max: number
}

/** Bentuk rentang harga di store (tanpa label, sesuai state aslinya). */
interface StoredPriceRange {
    min: number
    max: number
    label?: string
}

/**
 * Sidebar filter untuk katalog jam.
 *
 * State dropdown ada di sini; presentasi tiap grup filter didelegasikan ke
 * `FilterSection` (SRP). Opsi filter berada di `filter-data.ts`.
 *
 * @returns Sidebar filter dan overlay.
 */
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [open, setOpen] = useState({ country: false, color: false, price: false })

    const {
        selectedCountries,
        selectedColors,
        selectedPriceRange,
        setSelectedCountries,
        setSelectedColors,
        setSelectedPriceRange,
        clearFilters,
    } = useFilterStore((state) => state)

    const countries = Array.from(new Set(data.map((item) => item.country)))

    const toggle = (key: "country" | "color" | "price") =>
        setOpen((prev) => ({ ...prev, [key]: !prev[key] }))

    const toggleSelection = (
        value: string,
        selected: string[],
        setSelected: (values: string[]) => void,
    ) =>
        setSelected(
            selected.includes(value)
                ? selected.filter((item) => item !== value)
                : [...selected, value],
        )

    const handlePrice = (label: string) => {
        const range: PriceRangeOption | undefined = priceRanges.find(
            (option) => option.label === label,
        )
        setSelectedPriceRange(range ?? null)
    }

    return (
        <>
            <Navigation toggleSidebar={() => setIsOpen(!isOpen)} />

            <div
                className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="flex items-center justify-between border-b p-4">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <button type="button" onClick={() => setIsOpen(!isOpen)} className="text-xl">
                        <FiX />
                    </button>
                </div>

                <div className="space-y-6 p-4">
                    <FilterSection
                        title="Country"
                        isOpen={open.country}
                        onToggle={() => toggle("country")}
                        options={countries.map((country) => ({
                            label: country,
                            value: country,
                            checked: selectedCountries.includes(country),
                        }))}
                        onSelect={(value) =>
                            toggleSelection(value, selectedCountries, setSelectedCountries)
                        }
                    />

                    <FilterSection
                        title="Color"
                        isOpen={open.color}
                        onToggle={() => toggle("color")}
                        options={colors.map((color) => ({
                            label: color,
                            value: color,
                            checked: selectedColors.includes(color),
                        }))}
                        onSelect={(value) =>
                            toggleSelection(value, selectedColors, setSelectedColors)
                        }
                    />

                    <FilterSection
                        title="Price"
                        isOpen={open.price}
                        onToggle={() => toggle("price")}
                        inputType="radio"
                        options={priceRanges.map((range) => ({
                            label: range.label,
                            value: range.label,
                            checked: (selectedPriceRange as StoredPriceRange | null)?.label === range.label,
                        }))}
                        onSelect={handlePrice}
                    />
                </div>

                <div className="flex justify-between border-t p-4">
                    <button
                        type="button"
                        onClick={clearFilters}
                        className="rounded bg-black px-4 py-2 text-white"
                    >
                        Clear all
                    </button>
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black opacity-50"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}

export default Sidebar
