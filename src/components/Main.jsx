import React, {useState, useEffect}from "react";
import { Movies } from "./Movies";
import { Preloader } from "./Preloader";
import { Search } from "./Search";

const Main=() => {
  
  const [movies, setMovies]=useState([])
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type='all') => {
    setLoading(true);
    fetch(
      `http://www.omdbapi.com/?apikey=113b3d52&s=${str}${
        type !== 'all' ? `&type=${type}` : '' }`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setMovies(data.Search)
      })
  };
 
    useEffect (() => {
      fetch("http://www.omdbapi.com/?apikey=113b3d52&s=matrix")
      .then((response) => response.json())
      .then((data) => {setMovies(data.Search);
                       setLoading(false)} )
      .catch((err) => {
        console.error(err);
       setLoading({loading: false})
      });

    }, [])
  
  
      return (
        <main className="container content">
          <Search searchMovies={searchMovies} />
          {movies && movies.length ? <Movies movies={movies} /> :<Preloader/>}
  
        </main>
      );
    }
  

export { Main };
