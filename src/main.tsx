import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/press-start-2p";

// Registro del service worker generado por vite-plugin-pwa
import { registerSW } from "virtual:pwa-register";

createRoot(document.getElementById("root")!).render(<App />);

registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log("Hay una nueva versión disponible. Refresca para actualizar.");
  },
  onOfflineReady() {
    console.log("La app está lista para usarse sin conexión 🚀");
  },
});
