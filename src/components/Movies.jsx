import { Movie } from './Movie';
import { useMemo } from 'react';

function Movies({ movies }) {
   // Memoize the list of movie components
   const movieComponents = useMemo(() => {
      return movies.map((movie) => (
         <Movie key={movie.imdbID} {...movie} />
      ));
   }, [movies]);

   // Ensure movieComponents is invoked in JSX
   return <div className="movies">{movieComponents}</div>;
}

export { Movies };
