interface StoryButtonProps {
  label?: string;
  primary?: boolean;
}

/**
 * Komponen Button yang divariasikan seperti story Storybook.
 *
 * @param props - Label dan status primary.
 * @returns Tombol story.
 */
export default function RenderingButton({ label, primary }: StoryButtonProps) {
  return (
    <section className="panel" aria-label="Storybook button story">
      <h3 className="text-lg font-semibold text-blue-400">
        Rendering Button (Story)
      </h3>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="btn">
          {label ?? "Default"}
        </button>
        <button type="button" className="btn ring-2 ring-blue-400">
          {label ?? "Primary"} {primary ? "★" : ""}
        </button>
      </div>
    </section>
  );
}
