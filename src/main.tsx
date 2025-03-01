import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"


const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found. Make sure `index.html` contains `<div id='root'></div>`");
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem} >
      <BrowserRouter basename="/portfolio">
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
