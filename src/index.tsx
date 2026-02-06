import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/app";
import { LazyAbout } from "./pages/about";
import { LazyShop } from "./pages/shop";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyShop />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(root).render(<RouterProvider router={router} />);
