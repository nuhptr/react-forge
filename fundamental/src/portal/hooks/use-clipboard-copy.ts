import { useCallback, useEffect, useRef, useState } from "react"

/**
 * Return contract for the {@link useClipboardCopy} hook.
 */
export interface UseClipboardCopyResult {
    /** Whether the most recent copy operation succeeded and its notification is still active. */
    isCopied: boolean
    /** Error message when clipboard access fails, or `null` otherwise. */
    errorMessage: string | null
    /** Copies the given text to the system clipboard. */
    copyToClipboard: (text: string) => Promise<boolean>
    /** Immediately hides the copied status notification. */
    dismissNotification: () => void
    /** Pauses the auto-dismiss timer (e.g. while keyboard focus is inside the toast). */
    pauseAutoDismiss: () => void
    /** Resumes the auto-dismiss timer after focus leaves the toast. */
    resumeAutoDismiss: () => void
}

/**
 * Manages clipboard write operations and auto-dismiss notification timing.
 *
 * Extracted from UI components to satisfy the Single Responsibility Principle (SRP):
 * clipboard I/O and timer lifecycle stay decoupled from component rendering.
 *
 * @param resetDelayMs Duration in milliseconds before `isCopied` resets to `false`.
 * @returns Clipboard state and control handlers.
 */
export const useClipboardCopy = (resetDelayMs = 3000): UseClipboardCopyResult => {
    const [isCopied, setIsCopied] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const autoDismissTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const clearAutoDismissTimer = useCallback(() => {
        if (autoDismissTimerRef.current !== null) {
            clearTimeout(autoDismissTimerRef.current)
            autoDismissTimerRef.current = null
        }
    }, [])

    const scheduleAutoDismiss = useCallback(() => {
        clearAutoDismissTimer()
        autoDismissTimerRef.current = setTimeout(() => {
            setIsCopied(false)
            autoDismissTimerRef.current = null
        }, resetDelayMs)
    }, [clearAutoDismissTimer, resetDelayMs])

    useEffect(() => clearAutoDismissTimer, [clearAutoDismissTimer])

    const dismissNotification = useCallback(() => {
        clearAutoDismissTimer()
        setIsCopied(false)
    }, [clearAutoDismissTimer])

    const pauseAutoDismiss = useCallback(() => {
        clearAutoDismissTimer()
    }, [clearAutoDismissTimer])

    const resumeAutoDismiss = useCallback(() => {
        if (isCopied) {
            scheduleAutoDismiss()
        }
    }, [isCopied, scheduleAutoDismiss])

    const copyToClipboard = useCallback(
        async (text: string): Promise<boolean> => {
            const trimmedText = text.trim()
            if (!trimmedText) return false

            if (!navigator.clipboard?.writeText) {
                setErrorMessage("Clipboard API is not supported in this browser.")
                setIsCopied(false)
                return false
            }

            try {
                await navigator.clipboard.writeText(trimmedText)
                setErrorMessage(null)
                setIsCopied(true)
                scheduleAutoDismiss()
                return true
            } catch {
                setErrorMessage("Failed to copy text to clipboard.")
                setIsCopied(false)
                return false
            }
        },
        [scheduleAutoDismiss],
    )

    return {
        isCopied,
        errorMessage,
        copyToClipboard,
        dismissNotification,
        pauseAutoDismiss,
        resumeAutoDismiss,
    }
}
