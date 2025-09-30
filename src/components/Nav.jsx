import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import style from "../css/Nav.module.css";
import "../css/main.css";
import { useState } from "react";

export default function Nav({ user }) {
  const [theme, setTheme] = useState("Light");

  function change() {
    let body = document.querySelector("body");
    body.classList.toggle("change");
    let btn = document.getElementById("btn");
    console.log(btn);
    if (theme == "Light") setTheme("Dark");
    else setTheme("Light");
  }

  return (
    <div className={style.nav}>
      <h1>🧾MOVIES-HUB</h1>
      <div className={style.container}>
        <NavLink
          to="/"
          //       style={isActive => ({
          //   backgroundColor: isActive ? "green" : "blue"
          // })}
        >
          <button>Home</button>
        </NavLink>
        <Link to="/movies">
          <button>Movies</button>
        </Link>
      </div>
      <NavLink
        className={style.link}
        to="/Login"
        // style={isActive => ({
        // textDecoration : isActive ? "underline" : "none"     })}
      >
        LOGIN/{user}
      </NavLink>
      <NavLink
        className={style.link}
        to="/favorites"
        // style={isActive => ({
        // textDecoration : isActive ? "underline" : "none"     })}
      >
        Favorites
      </NavLink>
      <button className={style.display} id="btn" onClick={() => change()}>
        {theme}
      </button>
    </div>
  );
}
