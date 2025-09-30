import style from "../css/Card.module.css";
import { useNavigate } from "react-router-dom";

export default function ({ movie }) {
  const move = useNavigate();

  function change() {
    move(`/movies/${movie.imdbID}`);
  }

  return (
    <>
      <div className={style.card} onClick={() => change()}>
        <img src={movie.Poster}></img>
        <h1 className={style.title}>{movie.Title}</h1>
        <div className={style.description}>
          <div>
            {movie.imdbRating ? <p>IMBD rating: {movie.imdbRating}</p> : ""}
          </div>
          <div>
            <p>type: {movie.Type}</p>
          </div>

          <p>Year: {movie.Year}</p>

          {movie.Language ? <p>Language: {movie.Language}</p> : ""}
        </div>
      </div>
    </>
  );
}
