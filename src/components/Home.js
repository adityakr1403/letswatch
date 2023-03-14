import React from "react";
import { getMovies } from "../services/MovieService";
import Moviecard from "./Moviecard";

const Home = () => {
  return (
    <div className=" flex justify-start flex-wrap align-middle mt-3">
      {getMovies().map((movie) => (
        <Moviecard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
