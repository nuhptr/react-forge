import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App.tsx"

/**
 * Me-mount aplikasi React Hooks ke dalam elemen DOM `#root`.
 */
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
