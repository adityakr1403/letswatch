import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const Moviecard = ({ props, movie }) => {
  return (
    <div className="flex flex-col w-[200px] bg-slate-900 mx-3 my-2 m-auto rounded-xl overflow-hidden ">
      <div className="poster w-full h-[300px] overflow-hidden">
        <img src={movie.posterUrl} alt="" />
      </div>
      <div className="gradient absolute w-[200px]  h-[300px] bg-gradient-to-t from-slate-900 via-transparent "></div>
      <div className="description h-[100px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ">
        <Link to={`/content/${movie.movieId}`}>{movie.title}</Link>
      </div>
      <div className="rating absolute mx-2 my-3">
        <span className=" flex align-middle justify-center font-bold text-amber-300 ">
          <h3 className="  text-lg [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            {movie.imdbRating}
          </h3>
          <AiFillStar className=" text-xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]" />
        </span>
      </div>
    </div>
  );
};

export default Moviecard;
