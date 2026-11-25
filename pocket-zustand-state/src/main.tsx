import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App.tsx"
import "./globals.css"

/**
 * Me-mount playground Pocket Zustand State ke dalam elemen DOM `#root`.
 */
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
