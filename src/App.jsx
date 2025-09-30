import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./css/main.css";

import Movies from "./pages/Movies";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Fav from "./pages/Fav";
import Trailer from "./pages/Trailer";

import Nav from "./components/Nav";
import { createContext, useState } from "react";
import DisplayContext from "./context/DisplayContext";

function App() {
  const [user, setUser] = useState("guest");
  const [favorites, setFavorites] = useState([]);

  return (
    <BrowserRouter>
      <Nav user={user} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route
          path="/movies/:id"
          element={
            <Detail
              favorites={favorites}
              setFavorites={setFavorites}
              user={user}
            />
          }
        ></Route>
        <Route path="*" element={<Error />}></Route>
        <Route
          path="/Login"
          element={<Login setUser={setUser} user={user} />}
        ></Route>
        <Route
          path="/favorites"
          element={
            <Fav
              favorites={favorites}
              setFavorites={setFavorites}
              user={user}
            />
          }
        ></Route>
        <Route path="/trailer/:id" element={<Trailer/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
