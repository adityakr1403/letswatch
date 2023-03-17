import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddMovie from "./components/AddMovie";
import MovieDetails from "./components/MovieDetails";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App bg-black min-h-screen text-white top-0">
      <BrowserRouter>
        <Header />

        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/" element={<Movie />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/add" element={<AddMovie />} />
          <Route path="/content/:id" element={<MovieDetails />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
