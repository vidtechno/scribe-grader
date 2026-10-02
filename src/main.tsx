import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { captureReferralFromUrl } from "./lib/referral";

captureReferralFromUrl();
createRoot(document.getElementById("root")!).render(<App />);
