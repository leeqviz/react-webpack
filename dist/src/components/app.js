import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import User from "@/assets/account.svg";
import UserIcon from "@/assets/account.svg?url";
import bgIcon from "@/assets/bg.png";
import mapIcon from "@/assets/map.jpg";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./app.module.scss";
export default function App() {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    function increment() {
        setCount(function (prevCount) { return prevCount + 1; });
    }
    return (_jsxs("div", { className: classes.container, style: { backgroundImage: "url(".concat(bgIcon, ")") }, children: [_jsxs("h1", { children: ["Hello, ", __TARGET__, "!"] }), _jsx("div", { children: _jsx("img", { src: mapIcon, alt: "Map Icon", width: 2000 }) }), _jsx(User, { width: 200, height: 200 }), _jsx("img", { src: UserIcon, alt: "User Icon", width: 200 }), _jsx(Link, { to: "/about", children: "About" }), _jsx("br", {}), _jsx(Link, { to: "/shop", children: "Shop" }), _jsxs("h1", { className: classes.heading, children: ["Count: ", count] }), _jsx("button", { className: classes.button, onClick: increment, children: "Increment" }), _jsx(Outlet, {})] }));
}
