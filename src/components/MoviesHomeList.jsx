import Card from "./Card";
import Flex from "./Flex";
import { flushSync } from "react-dom";

export default function List({ isLoading, moviesList }) {
  return (
    <>
      <Flex>
        {isLoading ? (
          <h1>...LOADING</h1>
        ) : (
          moviesList.map((movie) => <Card movie={movie} isLoading />)
        )}
      </Flex>
    </>
  );
}
