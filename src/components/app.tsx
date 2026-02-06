import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./app.module.scss";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <h1>Hello, World!</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/shop">Shop</Link>
      <h1 className={styles.heading}>Count: {count}</h1>
      <button className={styles.button} onClick={increment}>
        Increment
      </button>
      <Outlet />
    </div>
  );
}
