import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppErrorBoundary } from "./components/AppErrorBoundary";
import { captureReferral } from "./lib/referral";

captureReferral();

createRoot(document.getElementById("root")!).render(<AppErrorBoundary><App /></AppErrorBoundary>);

// A new deploy removes the old hashed files: reload once so the page picks up the new ones.
window.addEventListener("vite:preloadError", () => {
  try {
    if (!sessionStorage.getItem("chunk-reloaded")) { sessionStorage.setItem("chunk-reloaded", "1"); window.location.reload(); }
  } catch { /* ignore */ }
});
