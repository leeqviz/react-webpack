import { jsx as _jsx } from "react/jsx-runtime";
import App from "@/components/app";
import { LazyAbout } from "@/pages/about";
import { LazyShop } from "@/pages/shop";
import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";
var root = document.getElementById("root");
if (!root) {
    throw new Error("Root element not found");
}
var router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
        children: [
            {
                path: "/about",
                element: (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(LazyAbout, {}) })),
            },
            {
                path: "/shop",
                element: (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(LazyShop, {}) })),
            },
        ],
    },
]);
createRoot(root).render(_jsx(RouterProvider, { router: router }));
