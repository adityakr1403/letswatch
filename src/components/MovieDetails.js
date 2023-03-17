import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieFormatForSaving } from "../data/movieBlank";
import { getMovieDetails } from "../services/MovieService";

const MovieDetails = ({ props }) => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(movieFormatForSaving);
  useEffect(() => {
    getMovieDetails(id).then((movieData) => {
      setMovieDetails(movieData.data);
    //   console.log(movieDetails);
    });
  }, []);
  return (
    <div className=" min-h-screen bg-slate-900 px-1 md:px-16">
      <div className="banner min-h-screen overflow-hidden text-xl ">
        <div className="banner-image lg:w-1/2 h-screen absolute right-0 overflow-hidden">
          <img
            src={movieDetails.posterUrl}
            alt=""
            className=" lg:absolute lg:right-0"
          />
        </div>
        <div className=" gradient absolute right-0 w-full lg:w-1/2 h-screen bg-gradient-to-r from-slate-900"></div>
        <div className=" gradient absolute right-0 lg:w-1/2 h-screen bg-gradient-to-r from-slate-900 "></div>
        <div className=" details absolute w-full md:w-2/3 py-4">
          <div className=" left-0 flex flex-col text-left ">
            <h1 className=" text-3xl font-bold">
              {movieDetails.title} ,
              <span className=" text-lg">
                {Math.floor(movieDetails.runtime / 60)} hrs{" "}
                {movieDetails.runtime % 60} min
              </span>
            </h1>
            <h1 className=" italic">
              {new Date(movieDetails.releaseDate).toDateString()},{" "}
              {movieDetails.genres.map((genre, index) => (
                <span key={index} className=" ml-5 font-mono not-italic">
                  {genre.genreName}
                </span>
              ))}
            </h1>
            <h1 className=" mt-3 my-2">
              IMDB Rating : {movieDetails.imdbRating}
            </h1>
            <h1 className=" font-bold font-mono text-xl">Overview : </h1>
            <p className=" text-xl">{movieDetails.overview}</p>
            <h1 className=" mt-3">
              Languages :
              <span>
                {movieDetails.languages.map((language, index) =>
                  language.languageName !== "" ? (
                    <span
                      key={index}
                      className=" rounded-md bg-slate-700 px-3 mx-1 my-1 text-base font-mono"
                    >
                      {language.languageName}
                    </span>
                  ) : null
                )}
              </span>
            </h1>
            <h1 className=" mt-3">
              Locations :
              <span>
                {movieDetails.countries.map((country, index) => (
                  <span key={index} className=" ml-2">
                    {country.countryName}
                  </span>
                ))}
              </span>
            </h1>
            <h1 className=" mt-3">Budget : $ {movieDetails.budget}</h1>
            <h1 className=" mt-3">Revenue : $ {movieDetails.revenue}</h1>
            <div className="flex flex-col mt-3">
              <div className="">
                <h1> Keywords : </h1>
              </div>
              <div className=" flex flex-wrap">
                {movieDetails.keywords.map((keyword, index) =>
                  keyword.keywordName !== "" ? (
                    <span
                      key={index}
                      className=" rounded-md bg-slate-700 px-3 mx-1 my-1 text-base font-mono"
                    >
                      {keyword.keywordName}
                    </span>
                  ) : null
                )}
              </div>
            </div>
            <div className="production-company mt-3">
              <div className="">
                <h1> Production Companies : </h1>
              </div>
              <div className=" flex flex-wrap">
                {movieDetails.companies.map((company, index) =>
                  company.companyName !== "" ? (
                    <span
                      key={index}
                      className=" rounded-md bg-slate-700 px-3 mx-1 my-1 text-base font-mono"
                    >
                      {company.companyName}
                    </span>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
