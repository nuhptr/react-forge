import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App.tsx"

/**
 * Bootstraps the React Hooks application into the `#root` DOM node.
 */
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
