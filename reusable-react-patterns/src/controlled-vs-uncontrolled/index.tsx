import ControlledField from "./controlled-field";
import UncontrolledField from "./uncontrolled-field";

/**
 * Perbandingan Controlled vs Uncontrolled component.
 *
 * @returns Dua input: controlled (state) dan uncontrolled (ref).
 */
export default function ControlledVsUncontrolled() {
  return (
    <section className="panel" aria-label="Controlled vs Uncontrolled">
      <h3 className="text-lg font-semibold text-blue-400">
        Controlled vs Uncontrolled
      </h3>
      <ControlledField />
      <UncontrolledField />
    </section>
  );
}
