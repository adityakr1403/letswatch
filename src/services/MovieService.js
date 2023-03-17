import axios from "axios";

// const BASE_API_URL = "http://192.168.137.1:8080/api/v1/movies";
// const BASE_API_URL = "http://192.168.128.85:8080/api/v1/movies";
const BASE_API_URL = "http://localhost:8080/api/v1/movies";


export const getMovies = () => {
  return axios.get(BASE_API_URL + "/get_all");
};

export const saveMovie = (movieInfo) => {
  if (movieInfo.title === "") {
    return new Promise(() => {
      console.log("Title is empty");
    });
  }
  return axios.post(BASE_API_URL + "/save", movieInfo);
};

export const getMovieDetails = (id) => {
  return axios.get(BASE_API_URL + `/get/${id}`);
};
