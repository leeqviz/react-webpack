import User from "@/assets/account.svg";
import UserIcon from "@/assets/account.svg?url";
import bgIcon from "@/assets/bg.png";
import mapIcon from "@/assets/map.jpg";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./app.module.scss";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${bgIcon})` }}
    >
      <h1>Hello, {__TARGET__}!</h1>
      <div>
        <img src={mapIcon} alt="Map Icon" width={2000} />
      </div>
      <User width={200} height={200} />
      <img src={UserIcon} alt="User Icon" width={200} />
      <Link to="/about">About</Link>
      <br />
      <Link to="/shop">Shop</Link>
      <h1 className={classes.heading}>Count: {count}</h1>
      <button className={classes.button} onClick={increment}>
        Increment
      </button>
      <Outlet />
    </div>
  );
}
