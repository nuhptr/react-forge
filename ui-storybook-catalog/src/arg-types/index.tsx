interface ArgType {
  name: string;
  type: string;
  control: string;
}

const argTypes: ArgType[] = [
  { name: "label", type: "string", control: "text" },
  { name: "primary", type: "boolean", control: "boolean" },
  { name: "size", type: "enum", control: "select" },
];

/**
 * Demo ArgTypes: tabel kontrol props story.
 *
 * @returns Tabel argTypes.
 */
export default function ArgTypes() {
  return (
    <section className="panel" aria-label="ArgTypes">
      <h3 className="text-lg font-semibold text-blue-400">ArgTypes</h3>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-slate-400">
            <th className="py-1">Name</th>
            <th>Type</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {argTypes.map((arg) => (
            <tr key={arg.name} className="border-t border-slate-700">
              <td className="py-1">
                <code className="text-blue-300">{arg.name}</code>
              </td>
              <td>{arg.type}</td>
              <td>{arg.control}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
