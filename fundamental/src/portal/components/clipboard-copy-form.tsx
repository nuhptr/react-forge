import { useId, useState, type SubmitEvent } from "react"

import { useClipboardCopy } from "../hooks/use-clipboard-copy"
import ToastNotification from "./toast-notification"

/**
 * Renders a labeled text input form that copies its value to the clipboard
 * and surfaces feedback both inline and via a portaled {@link ToastNotification}.
 *
 * @returns The clipboard copy form component.
 */
const ClipboardCopyForm = () => {
    const textInputId = useId()
    const [textToCopy, setTextToCopy] = useState("")

    const {
        isCopied,
        errorMessage,
        copyToClipboard,
        dismissNotification,
        pauseAutoDismiss,
        resumeAutoDismiss,
    } = useClipboardCopy()

    const isSubmitDisabled = textToCopy.trim().length === 0

    const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        await copyToClipboard(textToCopy)
    }

    return (
        <div className="space-y-3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-end">
                <div className="flex flex-1 flex-col gap-1.5">
                    <label htmlFor={textInputId} className="text-sm font-medium text-slate-700">
                        Text to copy
                    </label>
                    <input
                        id={textInputId}
                        type="text"
                        value={textToCopy}
                        onChange={(event) => setTextToCopy(event.target.value)}
                        placeholder="Type something to copy..."
                        className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitDisabled}
                    className="min-h-9.5 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50">
                    {isCopied ? "Copied!" : "Copy"}
                </button>
            </form>

            {errorMessage && (
                <p role="alert" className="text-sm text-red-600">
                    {errorMessage}
                </p>
            )}

            <ToastNotification
                isVisible={isCopied}
                onDismiss={dismissNotification}
                onPauseDismiss={pauseAutoDismiss}
                onResumeDismiss={resumeAutoDismiss}
            />
        </div>
    )
}

export default ClipboardCopyForm
