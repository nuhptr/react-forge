import { FiChevronDown } from "react-icons/fi"

interface FilterOption {
    label: string
    value: string
    checked: boolean
}

interface FilterSectionProps {
    title: string
    isOpen: boolean
    onToggle: () => void
    options: FilterOption[]
    onSelect: (value: string) => void
    inputType?: "checkbox" | "radio"
}

/**
 * Satu bagian filter yang bisa dibuka/tutup dengan daftar opsi.
 *
 * Single Responsibility: hanya merender satu grup filter; state filter
 * tetap dipegang komponen induk.
 *
 * Open/Closed: grup baru cukup dengan mengirim opsi berbeda, tanpa mengubah
 * struktur komponen ini.
 */
const FilterSection = ({
    title,
    isOpen,
    onToggle,
    options,
    onSelect,
    inputType = "checkbox",
}: FilterSectionProps) => (
    <div>
        <button
            type="button"
            className="flex w-full items-center justify-between text-left"
            onClick={onToggle}>
            <span className="font-medium">{title}</span>
            <FiChevronDown className={`transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
            <div className="mt-2 space-y-2">
                {options.map((option) => (
                    <label key={option.value} className="flex cursor-pointer items-center">
                        <input
                            type={inputType}
                            checked={option.checked}
                            onChange={() => onSelect(option.value)}
                            className="mr-2"
                        />
                        <span>{option.label}</span>
                    </label>
                ))}
            </div>
        )}
    </div>
)

export default FilterSection
