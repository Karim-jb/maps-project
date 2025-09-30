import { useEffect, useState } from "react";

import MoviesHomeList from "../components/MoviesHomeList";

export default function MoviesList() {
  const ids = [
    "tt0110912",
    "tt0071562",
    "tt0468569",
    "tt0050083",
    "tt0816692",
    "tt6751668",
  ];
  const URL = "http://www.omdbapi.com/?apikey=[yourkey]&";

  const API_KEY = "9072d01e";

  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function getData() {
      ids.map((id) => {
        async function fetchData() {
          const response = await fetch(
            `http://www.omdbapi.com/?i=${id}&apikey=9072d01e`
          );
          const data = await response.json();
          console.log(data);
          setMoviesList((prev) => [...prev, data]);
        }
        fetchData();
      });
    }
    getData();
  }, []);

  useEffect(() => {
    if (moviesList.length == ids.length) setIsLoading(false);
  }, [moviesList]);

  return (
    <>
    <h1 style={{textAlign:"center",color:"gray",fontSize:"50px",fontWeight:900,textShadow:"1px 1px 2px black"}}>OUR SAMPLES</h1>
      <MoviesHomeList moviesList={moviesList} isLoading={isLoading} id={ids} />
    </>
  );
}
