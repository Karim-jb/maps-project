import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "../css/Detail.module.css";

import star from "../media/icons/star.png";

import Footer from "../components/Footer";

export default function Detail({ favorites, setFavorites, user }) {
  
  function store() {
    if (user == "guest") {
      alert("please log in first");
      return;
    }
    if (isLoading == false){ setFavorites([...favorites, movie])
      alert("movie saved succesefully")
    };
  }

  const navigate = useNavigate();

  function move() {
    navigate(`/trailer/${id}`);
  }

  const URL = "http://www.omdbapi.com/?apikey=[yourkey]&";
  const API_KEY = "9072d01e";

  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const array = [1, 1, 1, 1];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
      );
      const data = await response.json();
      setMovie(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={style.gif}>
          <img src="https://media1.tenor.com/m/XasjKGMk_wAAAAAC/load-loading.gif"></img>
        </div>
      ) : (
        <div className={style.box}>
          <div className={style.imgBox}>
            <img src={movie.Poster}></img>
          </div>

          <div className={style.descriptionBox}>
            <h1>{movie.Title}</h1>

            <div className={style.flex}>
              <p>{movie.Year}</p>
              <p>{movie.Runtime}</p>
              <p>{movie.Genre}</p>
            </div>

            <div className={style.stars}>
              {array.map((ele) => (
                <img src={star}></img>
              ))}
            </div>

            <p className={style.p}>{movie.Plot}</p>

            <div className={style.last}>
              <div>
                <p>type: {movie.Type}</p>
              </div>
              <div>
                <p>Directed by: {movie.Director}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={style.btn}>
        <button
          onClick={() => {
            store();
          }}
        >
          Add to favorites
        </button>
        <button onClick={() => move()}>Watch trailer</button>
      </div>

      <Footer />
    </>
  );
}
