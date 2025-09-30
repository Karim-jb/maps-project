import { useState, useEffect } from "react";
import style from "../css/Movies.module.css";
import Card from "./Card";
import Flex from "./Flex";

export default function () {
  const URL = "http://www.omdbapi.com/?apikey=[yourkey]&";
  const key = "9072d01e";

  const [movie, setMovie] = useState("Lord of the rings");
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?s=${movie}&apikey=${key}`
        );
        const data = await response.json();
        setList(data.Search);
      } catch (error) {
        console.log("error :" + error);
      } finally {
        setIsLoading(false);
        console.log(list);
      }
    }
    fetchData();
  }, []);

  async function handelSubmit(e) {
    try {
      e.preventDefault();
      const response = await fetch(
        `http://www.omdbapi.com/?s=${movie}&apikey=9072d01e`
      );
      const data = await response.json();
      if (data.Response == "True") {
        console.log(data.Search);
        setList(data.Search);
        console.log(list);
      } else {
        alert("Response Is False ," + data.Error);
        return;
      }
    } catch (error) {
      alert("error: " + error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className={style.flex}>
        <input
          type="text"
          placeholder="enter Movie Title"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        ></input>
        <button type="submit" onClick={(e) => handelSubmit(e)}>
          Search
        </button>
      </div>

      <Flex>
        {isLoading
          ? "..Loading"
          : list.map((movie) => <Card movie={movie}></Card>)}
      </Flex>
    </>
  );
}
