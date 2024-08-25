import React, { useState, useEffect } from "react";
import { Movies } from "../components/Movies"
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type = 'all') => {
    setLoading(true);
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str == '' ? 'matrix' : str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setMovies(data.Search)

      })
  };

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false)

      })
      .catch((err) => {
        console.error(err);
        setLoading({ loading: false })
      });

  }, [])
  console.log('a')

  return (

    <main className="container content">
      <Search searchMovies={searchMovies} />
      {movies && movies.length ? <Movies movies={movies} /> : <Preloader />}

    </main>
  );
}


export { Main };
