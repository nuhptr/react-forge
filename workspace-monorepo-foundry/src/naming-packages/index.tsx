const packages = [
  { name: "@forge/ui", scope: "ui components" },
  { name: "@forge/utils", scope: "shared utilities" },
  { name: "@forge/config", scope: "shared config" },
] as const;

/**
 * Demo konvensi penamaan paket monorepo.
 *
 * @returns Daftar paket dengan scope.
 */
export default function NamingPackages() {
  return (
    <section className="panel" aria-label="Naming packages">
      <h3 className="text-lg font-semibold text-blue-400">Naming Packages</h3>
      <ul className="grid gap-1 text-sm">
        {packages.map((pkg) => (
          <li key={pkg.name} className="rounded border border-slate-700 p-2">
            <code className="text-blue-300">{pkg.name}</code> — {pkg.scope}
          </li>
        ))}
      </ul>
    </section>
  );
}
