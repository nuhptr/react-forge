import { cva, type VariantProps } from "class-variance-authority";

const button = cva("rounded-lg px-4 py-2 font-semibold transition", {
  variants: {
    intent: {
      primary: "bg-blue-600 text-white hover:bg-blue-500",
      danger: "bg-rose-500 text-white hover:bg-rose-400",
    },
    size: {
      sm: "text-sm",
      lg: "text-lg",
    },
  },
  defaultVariants: { intent: "primary", size: "sm" },
});

interface ButtonProps extends VariantProps<typeof button> {
  children?: React.ReactNode;
}

/**
 * Demo CVA: variant yang diketik dari konfigurasi.
 *
 * Open/Closed: varian baru bisa ditambah di `cva` tanpa ubah komponen.
 *
 * @param props - Intent, size, dan children.
 * @returns Tombol dengan varian.
 */
export default function Cva({ intent, size, children }: ButtonProps) {
  return (
    <section className="panel" aria-label="CVA demo">
      <h3 className="text-lg font-semibold text-blue-400">
        Class Variance Authority
      </h3>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className={button({ intent: "primary", size: "sm" })}
        >
          Primary
        </button>
        <button
          type="button"
          className={button({ intent: "danger", size: "lg" })}
        >
          Danger
        </button>
        <button type="button" className={button({ intent, size })}>
          {children ?? "Default"}
        </button>
      </div>
    </section>
  );
}
