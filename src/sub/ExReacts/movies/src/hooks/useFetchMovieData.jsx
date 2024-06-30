import { useEffect, useState } from "react";

export default function useFetchMovieData(movieType) {
  const [movies, setMovies] = useState([]);
  const fetchMovieData = (id) => {
    let url = "";
    if (["now_playing", "popular", "top_rated"].includes(id)) {
      url = `https://api.themoviedb.org/3/movie/${id}?language=ko`;
    } else {
      url = `https://api.themoviedb.org/3/search/movie?query=${id}&language=ko`;
    }

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWM5ZGQ1YzkzY2VmMDA4YzNkZmY1NDFiNThjYTRhMyIsInN1YiI6IjY2MWI4YzkwMjljNjI2MDEzYjY1ZDI1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2y4H5AdyaH8xDs1tZ_-tmgq37PVeqDmIHBFGQdGyu8c",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setMovies(response.results);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMovieData(movieType);
  }, [movieType]);

  return movies;
}
