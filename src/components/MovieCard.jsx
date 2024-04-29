import React, { useEffect, useState } from "react";
import Movies from "../data/Movies.json";

const MovieCard = () => {
  const [filteredMovies, setFilteredMovies] = useState(Movies);

  const handleClickAll = () => {
    setFilteredMovies(Movies);
  };
  const handleClickComedy = () => {
    const comedyMovies = Movies.filter((movie) =>
      movie.moviegenres.includes("Comedy")
    );

    setFilteredMovies(comedyMovies);
  };
  const handleClickAction = () => {
    const comedyMovies = Movies.filter((movie) =>
      movie.moviegenres.includes("Action")
    );

    setFilteredMovies(comedyMovies);
  };

  const handleClickRomance = () => {
    const comedyMovies = Movies.filter((movie) =>
      movie.moviegenres.includes("Romance")
    );

    setFilteredMovies(comedyMovies);
  };

  const handleClickDrama = () => {
    const comedyMovies = Movies.filter((movie) =>
      movie.moviegenres.includes("Drama")
    );

    setFilteredMovies(comedyMovies);
  };
  const handleClickIndia = () => {
    const comedyMovies = Movies.filter((movie) =>
      movie.moviecountries.includes("India")
    );

    setFilteredMovies(comedyMovies);
  };
  const handleClickUk = () => {
    const comedyMovies = Movies.filter((movie) =>
      movie.moviecountries.includes("United Kingdom")
    );

    setFilteredMovies(comedyMovies);
  };
  const handleClickFrance = () => {
    const comedyMovies = Movies.filter((movie) =>
      movie.moviecountries.includes("France")
    );

    setFilteredMovies(comedyMovies);
  };
  const handleClickIsrael = () => {
    const comedyMovies = Movies.filter((movie) =>
      movie.moviecountries.includes("Israel")
    );

    setFilteredMovies(comedyMovies);
  };

  return (
    <div>
      <div className="mb-5 flex items-center gap-8">
        <h1
          className=" text-white font-Catamaran font-bold text-[28px] cursor-pointer "
          onClick={handleClickAll}
        >
          Movies
        </h1>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-white text-black  font-Catamaran font-medium text-[16px] px-2 py-[0.5rem] hover:bg-white"
          >
            Genres
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={handleClickAction}>
              <a>Action</a>
            </li>
            <li onClick={handleClickComedy}>
              <a>Comedy</a>
            </li>
            <li onClick={handleClickRomance}>
              <a>Romance</a>
            </li>
            <li onClick={handleClickDrama}>
              <a>Drama</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-white text-black  font-Catamaran font-medium text-[16px] px-2 py-[0.5rem] hover:bg-white"
          >
            Country
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={handleClickIndia}>
              <a>India</a>
            </li>
            <li onClick={handleClickUk}>
              <a>UnitedKingdom</a>
            </li>
            <li onClick={handleClickFrance}>
              <a>France</a>
            </li>
            <li onClick={handleClickIsrael}>
              <a>Israel</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-xs:grid-cols-1 ">
        {filteredMovies.map((movie) => {
          return (
            <div key={movie.imdbmovieid}>
              <div className="flex flex-col gap-5 max-xs:items-center">
                <div>
                  <img src={movie.moviemainphotos} className=" h-[300px]" />
                </div>
                <div className=" text-white font-Catamaran font-bold text-[20px] ">
                  {movie.movietitle}
                  <div className=" text-[14px] font-normal pt-3">
                    {movie.moviegenres}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;
