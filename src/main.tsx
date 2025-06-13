import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing/index.js";

const router = createHashRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/Remake-Valorant",
    element: <Landing />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
