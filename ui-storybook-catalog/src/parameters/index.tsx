const parameters = {
  layout: "centered",
  backgrounds: { default: "dark" },
  viewport: { defaultViewport: "mobile1" },
} as const;

/**
 * Demo Parameters: konfigurasi global story.
 *
 * @returns Daftar parameter.
 */
export default function Parameters() {
  return (
    <section className="panel" aria-label="Story parameters">
      <h3 className="text-lg font-semibold text-blue-400">Parameters</h3>
      <ul className="grid gap-1 text-sm">
        {Object.entries(parameters).map(([key, value]) => (
          <li key={key} className="rounded border border-slate-700 p-2">
            <code className="text-blue-300">{key}</code>:{" "}
            {JSON.stringify(value)}
          </li>
        ))}
      </ul>
    </section>
  );
}
