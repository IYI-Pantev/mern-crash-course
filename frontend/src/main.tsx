import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// BrowserRouter
import { createBrowserRouter, RouterProvider } from "react-router";
import CreatePage from "./pages/CreatePage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/create-page", element: <CreatePage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
    {/* <CreatePage /> */}
  </StrictMode>
);
