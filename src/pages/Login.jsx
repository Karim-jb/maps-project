import { useState } from "react";
import style from "../css/Login.module.css";
import Footer from "../components/Footer";

export default function Login({ setUser }) {
  const [Chars, setChars] = useState("");
  const [password, setPassword] = useState("");

  function handelClick(e) {
    e.preventDefault();
    if (Chars == "" || password == "") {
      alert("fiels is empty");
      return;
    }
    setUser(Chars);
    localStorage.setItem("username", Chars);
    localStorage.setItem("password", password);
    setPassword("");
    setChars("");
  }

  function handelLogout() {
    confirm("are u sure u want to logout")
    setUser("guest");
    setChars("");
    setPassword("");
    localStorage.clear();
  }

  return (
    <>
      <div className={style.login}>
        <div className={style.flex}>
          <form>
            <div className={style.box}>
              <h1>Login</h1>
              <input
                type="text"
                value={Chars}
                onChange={(e) => {
                  setChars(e.target.value);
                }}
                placeholder="enter username"
              ></input>
              <input
                type="password"
                placeholder="enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>

              <button type="submit" onClick={(e) => handelClick(e)}>
                Login
              </button>
              <button type="button" onClick={() => handelLogout()}>
                Logout
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
