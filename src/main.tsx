import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { captureReferral } from "./lib/referral";

captureReferral();

createRoot(document.getElementById("root")!).render(<App />);
