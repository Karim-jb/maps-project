import style from "../css/Footer.module.css";
import { Link } from "react-router-dom";

import google from "../media/icons/Google play.png";
import apple from "../media/icons/App store.png";

import face from "../media/icons/Facebook.webp";
import go from "../media/icons/Google.webp";
import X from "../media/icons/X.svg";
import insta from "../media/icons/insta.webp";

export default function Footer() {
  return (
    <>
      <div className={style.end}>
        <div className={style.footer}>
          <div className={style.flex}>
            <div className={style.contain1}>
              <h1>🧾 Movies-Hub</h1>
              <div>
                <img src={google}></img>
                <img src={apple}></img>
              </div>
            </div>

            <div className={style.colom}>
              <div className={style.container2}>
                <Link style={{ textDecoration: "none" }} to="/">
                  <h1 className={style.h1}>Home</h1>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/movies">
                  <h1 className={style.h1}>Movies</h1>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/Login">
                  <h1 className={style.h1}>Login</h1>
                </Link>
                <Link style={{ textDecoration: "none" }}>
                  <h1 className={style.h1}>AboutUs</h1>
                </Link>
              </div>

              <div className={style.logos}>
                <img src={face}></img>
                <img src={go}></img>
                <img src={X}></img>
                <img src={insta}></img>
              </div>

              <div className={style.last}>
                <p>@2025 all rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
