import Footer from "../components/Footer";
import Flex from "../components/Flex";
import Card from "../components/Card";
import style from "../css/Fav.module.css";
import { useEffect, useState } from "react";
import { use } from "react";

export default function Fav({ user, favorites, setFavorites }) {
  useEffect(() => {
    if (user == "guest") setFavorites([]);
    console.log(favorites);
  }, [user]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => setIsLoading(false), 100);
  }, []);

  return (
    <>
      {favorites.length == 0 ? (
        <h1 className={style.favEmpty}>the favorites list is empty</h1>
      ) : (
        <>
          <h1 className={style.favList}>List of favorites</h1>
          <Flex>
            {isLoading
              ? "..pls wait"
              : favorites.map((movie) => <Card movie={movie} />)}
          </Flex>
        </>
      )}

      <Footer />
    </>
  );
}
