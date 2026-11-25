import type { ReactNode } from "react"
import { createPortal } from "react-dom"

/**
 * Props for the {@link Portal} component.
 */
export interface PortalProps {
    /** Content to render outside the parent component's DOM hierarchy. */
    children: ReactNode
    /** Target DOM element `id` defined in `index.html`. Defaults to `"portal-root"`. */
    containerId?: string
}

/**
 * Reusable React Portal primitive that mounts children into a dedicated DOM container.
 *
 * Applies Dependency Inversion (DIP) by isolating DOM node lookup from
 * presentational overlay/notification components.
 *
 * @param props Portal configuration props.
 * @returns A React portal bound to the target container, or `null` if unavailable.
 */
const Portal = ({ children, containerId = "portal-root" }: PortalProps) => {
    if (typeof document === "undefined") return null

    const targetContainer = document.getElementById(containerId)
    if (!targetContainer) return null

    return createPortal(children, targetContainer)
}

export default Portal
