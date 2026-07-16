import "./style.css";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

export const system = createSystem(defaultConfig, {
  theme: {
    recipes: {
      link: { base: { colorPalette: "teal" } },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);
