import React, {useState} from 'react';
// render movie/movieList here
var Movie = ({movie, updateMovieList}) => {

  const [status, setStatus] = useState(movie.watched ? true : false );

  var handleClick = () => {
    var changeWatched = {...movie, watched: !movie.watched};
    //call movieWatched here
    updateMovieList(changeWatched);
    setStatus(movie.watched ? true: false);
  }

  // conditionally render the button
  const button = () => {
    if (movie.watched) {
      return <input type="checkbox" checked="checked" id='watchButton' onClick={handleClick}></input>
    } else {
      console.log(movie.watched);
      return <input type="checkbox" id='watchButton' onClick={handleClick}></input>
    }
  }

  const panel = () => {
    return (
      <li>
        <details open>
          <summary id='movie'>{movie.title}</summary>
          <p>Year: {movie.Year}</p>
          <p>Runtime: {movie.Runtime} </p>
          <p>Metascore: {movie.Metascore} </p>
          <p>Watched: {movie.watched}</p>
        </details>
      </li>
    )
  }

  return(
    <div id='movie'>
      {/* <li title={movie}>{movie.title}</li> */}
      {panel()}
      {button()}
    </div>
  )
}

export default Movie;