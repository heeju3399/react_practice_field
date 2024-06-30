import "./app.css";
import { useEffect, useState } from "react";
import MovieHeader from "./components/MovieHeader.jsx";
import MovieList from "./components/MovieList.jsx";
import MovieFooter from "./components/MovieFooter.jsx";
import useFetchMovieData from "./hooks/useFetchMovieData.jsx";

function AppMovie() {
  const [movieType, setMovieType] = useState("now_playing");
  const movies = useFetchMovieData(movieType);

  const handleMovies = (id) => {
    console.log(id);
    setMovieType(id);
  };

  return (
    <>
      <MovieHeader onMovieData={handleMovies}></MovieHeader>
      <MovieList movies={movies}></MovieList>
      <MovieFooter></MovieFooter>
    </>
  );
}

export default AppMovie;
