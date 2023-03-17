import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { countriesList } from "../data/countriesList";
import { languageList } from "../data/languageList";
import { genreList } from "../data/genreList";
import { movieFormatForSaving } from "../data/movieBlank";
import { saveMovie } from "../services/MovieService";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [trailerUrl, setTrailerUrl] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [overview, setoverview] = useState("");
  const [imdbRating, setimdbRating] = useState(0);
  const [runtime, setruntime] = useState(0);
  const [budget, setbudget] = useState(0);
  const [revenue, setrevenue] = useState(0);
  const [releaseDate, setreleaseDate] = useState("");
  const [likes, setlikes] = useState(0);
  const [countries, setcountries] = useState(() => new Set());
  const [languages, setLanguages] = useState(() => new Set());
  const [genres, setgenres] = useState(() => new Set());
  const [keywords, setkeywords] = useState("");
  const [companies, setcompanies] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const urlChangeHandler = (e) => {
    setTrailerUrl(e.target.value);
  };
  const overviewChangeHandler = (e) => {
    setoverview(e.target.value);
  };
  const imdbRatingChangeHandler = (e) => {
    setimdbRating(e.target.value);
  };
  const runtimeChangeHandler = (e) => {
    setruntime(e.target.value);
  };
  const budgetChangeHandler = (e) => {
    setbudget(e.target.value);
  };
  const revenueChangeHandler = (e) => {
    setrevenue(e.target.value);
  };
  const releaseDateChangeHandler = (e) => {
    setreleaseDate(e.target.value);
  };
  const likesChangeHandler = (e) => {
    setlikes(e.target.value);
  };

  const countriesAddButtonHandler = (e) => {
    e.preventDefault();
    const selectedCountry = document.getElementById("country_select").value;
    setcountries(new Set(countries).add(selectedCountry));
  };
  const countriesRemoveButtonHandler = (e) => {
    e.preventDefault();
    const selectedCountry = document.getElementById("country_select").value;
    const x = new Set(countries);
    x.delete(selectedCountry);
    setcountries(x);
  };

  const languagesAddButtonHandler = (e) => {
    e.preventDefault();
    const selectedLanguage = document.getElementById("language_select").value;
    setLanguages(new Set(languages).add(selectedLanguage));
  };
  const languagesRemoveButtonHandler = (e) => {
    e.preventDefault();
    const selectedLanguage = document.getElementById("language_select").value;
    const x = new Set(languages);
    x.delete(selectedLanguage);
    setLanguages(x);
  };

  const genresAddButtonHandler = (e) => {
    e.preventDefault();
    const selectedGenre = document.getElementById("genre_select").value;
    setgenres(new Set(genres).add(selectedGenre));
  };
  const genresRemoveButtonHandler = (e) => {
    e.preventDefault();
    const selectedGenre = document.getElementById("genre_select").value;
    const x = new Set(genres);
    x.delete(selectedGenre);
    setgenres(x);
  };

  const keywordsChangeHandler = (e) => {
    setkeywords(e.target.value);
  };

  const companiesChangeHandler = (e) => {
    setcompanies(e.target.value);
  };

  const posterUrlChangeHandler = (e) => {
    setPosterUrl(e.target.value);
  };

  const submitMovieDetails = () => {
    const movieInfo = movieFormatForSaving;
    movieInfo.title = title;
    movieInfo.trailerUrl = trailerUrl;
    movieInfo.posterUrl = posterUrl;
    movieInfo.overview = overview;
    movieInfo.imdbRating = imdbRating;
    movieInfo.runtime = runtime;
    movieInfo.budget = budget;
    movieInfo.revenue = revenue;
    movieInfo.releaseDate = releaseDate;
    movieInfo.likes = likes;
    const countriesList = Array.from(countries);
    const newCountriesList = [];
    countriesList.forEach((element) => {
      const countryDetails = JSON.parse(element);
      const country = {
        countryIsoCode: countryDetails.code,
        countryName: countryDetails.name,
      };
      newCountriesList.push(country);
    });
    movieInfo.countries = newCountriesList;

    const languagesList = Array.from(languages);
    const newLanguagesList = [];
    languagesList.forEach((element) => {
      const languageDetails = JSON.parse(element);
      const language = {
        languageCode: languageDetails.code,
        languageName: languageDetails.name,
      };
      newLanguagesList.push(language);
    });
    movieInfo.languages = newLanguagesList;

    const genresList = Array.from(genres);
    const newGenreList = [];
    genresList.forEach((element) => {
      const genre = {
        genreName: element,
      };
      newGenreList.push(genre);
    });
    movieInfo.genres = newGenreList;
    const keywordsList = [];
    keywords.split(",").forEach((element) => {
      const keyword = {
        keywordName: element.trim(),
      };
      keywordsList.push(keyword);
    });
    movieInfo.keywords = keywordsList;

    const companiesList = [];
    companies.split(",").forEach((element) => {
      const company = {
        companyName: element.trim(),
      };
      companiesList.push(company);
    });
    movieInfo.companies = companiesList;
    saveMovie(movieInfo).then((response) => {
      navigate("/movies");
    });
  };

  const cancelMovieAddition = (e) => {
    navigate("/movies");
  };

  return (
    <div className=" lg:px-20 py-4 px-1">
      <div className=" w-full min-h-[80vh] bg-slate-900 rounded-3xl py-4">
        <h3 className=" text-xl py-4">Add Content</h3>
        <form className=" flex flex-col flex-wrap px-4 md:flex-row md:px-2">
          <div className=" flex flex-col px-3 py-2 flex-grow min-w-[50%] ">
            <label htmlFor="title" className=" text-left ">
              Title :
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => titleChangeHandler(e)}
              className=" rounded-md  py-2 px-2 bg-slate-600 sm:w-full "
            />
          </div>
          <div className=" flex flex-col px-3 py-2 flex-grow min-w-[50%]">
            <label htmlFor="title" className=" text-left">
              Trailer Url :
            </label>
            <input
              type="text"
              name="trailerUrl"
              value={trailerUrl}
              onChange={(e) => urlChangeHandler(e)}
              className=" rounded-md  py-2 px-2 bg-slate-600"
            />
          </div>
          <div className=" flex flex-col px-3 py-2 flex-grow w-full">
            <label htmlFor="title" className=" text-left">
              Overview :
            </label>
            <textarea
              type="text"
              rows="5"
              name="overview"
              value={overview}
              onChange={(e) => overviewChangeHandler(e)}
              className=" rounded-md  py-2 px-2 bg-slate-600 h-fit [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            />
          </div>
          <div className=" flex flex-col px-3 py-2 flex-grow ">
            <label htmlFor="title" className=" text-left">
              IMDB Rating :
            </label>
            <input
              type="number"
              name="imdbRating"
              value={imdbRating}
              onChange={(e) => imdbRatingChangeHandler(e)}
              min="0"
              max="10"
              step="0.1"
              className=" rounded-md  py-2 px-2 bg-slate-600"
            />
          </div>
          <div className=" flex flex-col px-3 py-2 flex-grow ">
            <label htmlFor="title" className=" text-left">
              Runtime / min :
            </label>
            <input
              type="number"
              name="runtime"
              value={runtime}
              onChange={(e) => runtimeChangeHandler(e)}
              className=" rounded-md  py-2 px-2 bg-slate-600"
            />
          </div>
          <div className=" flex flex-col px-3 py-2 flex-grow ">
            <label htmlFor="title" className=" text-left">
              Budget $ :
            </label>
            <input
              type="number"
              name="budget"
              value={budget}
              onChange={(e) => budgetChangeHandler(e)}
              className=" rounded-md  py-2 px-2 bg-slate-600"
            />
          </div>
          <div className=" flex flex-col px-3 py-2 flex-grow ">
            <label htmlFor="title" className=" text-left">
              Revenue $ :
            </label>
            <input
              type="number"
              name="revenue"
              value={revenue}
              onChange={(e) => revenueChangeHandler(e)}
              className=" rounded-md  py-2 px-2 bg-slate-600"
            />
          </div>
          <div className=" flex flex-col px-3 py-2 flex-grow ">
            <label htmlFor="title" className=" text-left">
              Release Date :
            </label>
            <input
              type="Date"
              name="releaseDate"
              value={releaseDate}
              onChange={(e) => releaseDateChangeHandler(e)}
              className=" rounded-md  py-2 px-2 bg-slate-600"
            />
          </div>
          <div className=" flex flex-col px-3 py-2 flex-grow ">
            <label htmlFor="title" className=" text-left">
              Likes :
            </label>
            <input
              type="number"
              name="likes"
              value={likes}
              onChange={(e) => likesChangeHandler(e)}
              min="0"
              className=" rounded-md  py-2 px-2 bg-slate-600"
            />
          </div>
          <div className=" flex flex-col px-3 py-2 flex-grow min-w-[50%]">
            <label htmlFor="title" className=" text-left">
              Countries/Locations :
            </label>
            <div className="flex flex-row">
              <label
                id="country_list_label"
                type="text"
                name="countries"
                className=" rounded-md  py-2 px-2 bg-slate-600 w-full"
              >
                {Array.from(countries).map((c) => JSON.parse(c).name + ",")}
              </label>
              <select
                id="country_select"
                className=" rounded-md  py-2 px-2 bg-slate-600 w-[40%] ml-2 text-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
              >
                {countriesList.map((country, index) => (
                  <option key={index} value={JSON.stringify(country)}>
                    {country.name}, {country.code}{" "}
                  </option>
                ))}
              </select>
              <button
                className="rounded-md bg-teal-700 ml-1"
                onClick={(e) => countriesAddButtonHandler(e)}
              >
                <AiOutlinePlus className=" text-4xl" />
              </button>
              <button
                className="rounded-md bg-red-900 ml-1"
                onClick={(e) => countriesRemoveButtonHandler(e)}
              >
                <AiOutlineMinus className=" text-4xl " />
              </button>
            </div>
          </div>
          <div className=" flex flex-col px-3 py-2 flex-grow min-w-[50%]">
            <label htmlFor="title" className=" text-left">
              Languages :
            </label>
            <div className=" flex flex-row">
              <label
                id="language_list_label"
                type="text"
                className=" rounded-md  py-2 px-2 bg-slate-600 w-full"
              >
                {Array.from(languages).map((l) => JSON.parse(l).name + ",")}
              </label>
              <select
                id="language_select"
                className=" rounded-md  py-2 px-2 bg-slate-600 w-[40%] ml-2 text-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
              >
                {languageList.map((language, index) => (
                  <option key={index} value={JSON.stringify(language)}>
                    {language.name}, {language.nativeName}
                  </option>
                ))}
              </select>
              <button
                className="rounded-md bg-teal-700 ml-1"
                onClick={(e) => {
                  languagesAddButtonHandler(e);
                }}
              >
                <AiOutlinePlus className=" text-4xl" />
              </button>
              <button
                className="rounded-md bg-red-900 ml-1"
                onClick={(e) => {
                  languagesRemoveButtonHandler(e);
                }}
              >
                <AiOutlineMinus className=" text-4xl " />
              </button>
            </div>
          </div>
          <div className=" flex flex-col px-3 py-2 flex-grow min-w-[50%] ">
            <label htmlFor="title" className=" text-left">
              Genres :
            </label>
            <div className=" flex flex-row">
              <label
                id="genre_list_label"
                className=" rounded-md  py-2 px-2 bg-slate-600 w-full"
              >
                {Array.from(genres).map((g) => g + ",")}
              </label>
              <select
                id="genre_select"
                className=" rounded-md  py-2 px-2 bg-slate-600 w-[40%] ml-2 text-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
              >
                {genreList.map((genre, index) => (
                  <option key={index} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
              <button
                className="rounded-md bg-teal-700 ml-1"
                onClick={(e) => {
                  genresAddButtonHandler(e);
                }}
              >
                <AiOutlinePlus className=" text-4xl" />
              </button>
              <button
                className="rounded-md bg-red-900 ml-1"
                onClick={(e) => {
                  genresRemoveButtonHandler(e);
                }}
              >
                <AiOutlineMinus className=" text-4xl " />
              </button>
            </div>
          </div>
          <div className=" flex flex-col px-3 py-2 flex-grow min-w-[50%]">
            <label htmlFor="keywords" className=" text-left">
              Keywords ( , separated ) :
            </label>
            <input
              type="text"
              name="keywords"
              value={keywords}
              onChange={(e) => keywordsChangeHandler(e)}
              className=" rounded-md  py-2 px-2 bg-slate-600"
            />
          </div>
          <div className=" flex flex-col px-3 py-2 flex-grow min-w-[50%]">
            <label htmlFor="companies" className=" text-left">
              Production Companies ( , separated ) :
            </label>
            <input
              type="text"
              name="companies"
              value={companies}
              onChange={(e) => companiesChangeHandler(e)}
              className=" rounded-md  py-2 px-2 bg-slate-600"
            />
          </div>
          <div className=" flex flex-col px-3 py-2 flex-grow min-w-[50%]">
            <label htmlFor="poster-url" className=" text-left">
              Poster URL :
            </label>
            <input
              type="text"
              name="companies"
              value={posterUrl}
              onChange={(e) => posterUrlChangeHandler(e)}
              className=" rounded-md  py-2 px-2 bg-slate-600"
            />
          </div>
        </form>
        <div className=" mt-2">
          <button
            className=" rounded-md bg-teal-700 px-2 py-2 my-2 mx-6"
            onClick={(e) => submitMovieDetails(e)}
          >
            Submit
          </button>
          <button
            className=" rounded-md bg-red-900 px-2 py-2 my-2 mx-6"
            onClick={(e) => {
              cancelMovieAddition(e);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
