import React, { useEffect, useState } from "react";
import { getMovies } from "../services/MovieService";
import Moviecard from "./Moviecard";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies().then((movies) => {
      setMovies(movies.data);
      // console.log(movies);
    });
  }, []);
  return (
    <div className=" min-h-screen">
      <div className=" flex justify-start flex-wrap align-middle mt-3">
        {movies.map((movie) => (
          <Moviecard key={movie.movieId} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movie;
