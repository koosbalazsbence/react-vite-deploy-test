import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"

const router = createBrowserRouter([
  {
    path: "/react-vite-deploy-test/",
    element: <App />,
    children: [
      {
        path: "/react-vite-deploy-test/",
        element: <Home />,
      },
      {
        path: "/react-vite-deploy-test/contact",
        element: <Contact />,
      },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
