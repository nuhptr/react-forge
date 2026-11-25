import MiddleSection from "./middle-section"
import type { InnerGreetingProps } from "./inner-greeting"

/**
 * Komponen perantara terluar yang meneruskan `userName` ke {@link MiddleSection}
 * meskipun dirinya sendiri tidak memakai nilai tersebut.
 *
 * @param props Props yang diterima dari komponen akar.
 * @returns Pembungkus komponen terluar.
 */
const OuterSection = ({ userName }: InnerGreetingProps) => {
    return <MiddleSection userName={userName} />
}

export default OuterSection
