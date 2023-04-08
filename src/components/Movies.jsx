import { Movie } from './Movie'


function Movies(props) {
    const {movies} = props;
    console.log(movies);
    return <div className="movies">
       {movies.map(movie => (
          <Movie key={movie.imdbID} {...movie} />
       ))}
    </div>
 }
 

export {Movies}