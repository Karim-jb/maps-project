import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from "../css/Trailer.module.css";
import Footer from "../components/Footer";

export default function Trailer() {
  const [ID, setId] = useState("");

  const [isMovie, setIsMovie] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [video, setVideo] = useState("");

  const { id } = useParams();

  const API_key = "a73c33648567116968e549e7b69f43e0";

  const finder = `https://api.themoviedb.org/3/find/${id}?api_key=a73c33648567116968e549e7b69f43e0&external_source=imdb_id`;
  const TMDB_URL = `https://api.themoviedb.org/3/movie/${ID}/videos?api_key=${API_key}`;

setTimeout(() => {
  setIsLoading(false)
}, 500);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/find/${id}?api_key=a73c33648567116968e549e7b69f43e0&external_source=imdb_id`
      );
      const data = await response.json();
      const results = data;
      if (results.movie_results.length !== 0) {
        const newResults = results.movie_results;
        setId(newResults[0].id);
        console.log(newResults[0].id);
        setIsMovie(true);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  useEffect(() => {
    async function getData() {
      if (isLoading == false && isMovie) {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${ID}/videos?api_key=${API_key}`
        );
        const data = await response.json();
        let array = data.results;
        array = array.filter((ele) => {
          return ele.type == "Trailer";
        });
        console.log(array[0]);
        setVideo(array[0]);
      }
    }
    getData();
  }, [isLoading, isMovie]);

  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: 900,
          paddingTop: "20px",
          color: "grey",
        }}
      >
        Trailer
      </div>

      {isMovie ? (
        isLoading ? (
          <div className={style.video}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://media1.tenor.com/m/XasjKGMk_wAAAAAC/load-loading.gif"
              alt=""
            />
          </div>
        ) : (
          <div className={style.video}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.key}?autoplay=1`}
              allow="autoplay;"
            />
          </div>
        )
      ) : (
        <h1 style={{textAlign:"center"}}>we didnt find trailer</h1>
      )}

      <Footer />
    </>
  );
}
