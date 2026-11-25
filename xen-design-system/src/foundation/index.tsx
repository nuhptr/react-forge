/**
 * Token desain: warna dan tipografi.
 *
 * Single Responsibility: konfigurasi token dipisahkan dari komponen.
 */
export const tokens = {
  colors: {
    primary: "#4d7bff",
    surface: "#141823",
    text: "#f3f5f9",
    muted: "#a6adbd",
  },
  radius: "0.75rem",
  font: "system-ui, sans-serif",
} as const;

/**
 * Demo design token.
 *
 * @returns Swatch warna dan tipografi.
 */
export default function Foundation() {
  return (
    <section className="panel" aria-label="Design foundation">
      <h3 className="text-lg font-semibold text-blue-400">Foundation Tokens</h3>
      <div className="flex flex-wrap gap-2">
        {Object.entries(tokens.colors).map(([name, value]) => (
          <div key={name} className="grid gap-1 text-center text-xs">
            <span
              className="h-10 w-10 rounded border border-slate-600"
              style={{ backgroundColor: value }}
            />
            <span className="text-slate-400">{name}</span>
          </div>
        ))}
      </div>
      <p className="text-sm text-slate-400">
        Radius: {tokens.radius} · Font: {tokens.font}
      </p>
    </section>
  );
}
