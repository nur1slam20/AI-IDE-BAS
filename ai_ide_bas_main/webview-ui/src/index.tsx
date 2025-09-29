import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App"
import AIIDEApp from "./components/AIIDEApp"
import { AIIDEStateProvider } from "./context/AIIDEStateContext"
import "../node_modules/@vscode/codicons/dist/codicon.css"

import { getHighlighter } from "./utils/highlighter"

// Initialize Shiki early to hide initialization latency (async)
getHighlighter().catch((error: Error) => console.error("Failed to initialize Shiki highlighter:", error))

createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <AIIDEStateProvider>
        <AIIDEApp />
      </AIIDEStateProvider>
    </StrictMode>,
  )
