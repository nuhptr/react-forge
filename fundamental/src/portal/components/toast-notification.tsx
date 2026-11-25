import Portal from "./portal"

/**
 * Props for the {@link ToastNotification} component.
 */
export interface ToastNotificationProps {
    /** Controls whether the toast notification is rendered. */
    isVisible: boolean
    /** Notification text announced and displayed to the user. */
    message?: string
    /** Callback invoked when the user manually closes the notification. */
    onDismiss: () => void
    /** Optional callback to pause auto-dismiss while keyboard focus is inside the toast. */
    onPauseDismiss?: () => void
    /** Optional callback to resume auto-dismiss when focus leaves the toast. */
    onResumeDismiss?: () => void
}

/**
 * Renders an accessible toast notification outside `#root` via {@link Portal}.
 *
 * Uses `role="status"` (`aria-live="polite"`) for non-intrusive screen reader
 * announcements and provides an explicit keyboard-focusable dismiss control.
 *
 * @param props Component properties.
 * @returns The portaled toast element when active, or `null` when hidden.
 */
const ToastNotification = ({
    isVisible,
    message = "Copied to clipboard!",
    onDismiss,
    onPauseDismiss,
    onResumeDismiss,
}: ToastNotificationProps) => {
    if (!isVisible) return null

    return (
        <Portal>
            <div
                role="status"
                aria-live="polite"
                onFocus={onPauseDismiss}
                onBlur={onResumeDismiss}
                className="fixed right-6 bottom-6 z-50 flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-950 px-4 py-3 text-sm font-medium text-emerald-50 shadow-lg">
                <span>{message}</span>
                <button
                    type="button"
                    onClick={onDismiss}
                    className="rounded px-2 py-1 text-xs font-semibold text-emerald-200 hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300">
                    Close
                </button>
            </div>
        </Portal>
    )
}

export default ToastNotification
