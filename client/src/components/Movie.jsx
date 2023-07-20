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
      return <button onClick={handleClick}>WatchedButton</button>
    } else {
      console.log(movie.watched);
      return <button onClick={handleClick}>To Be WatchedButton</button>
    }
  }

  return(
    <div id='movie'>
      <li title={movie}>{movie.title}</li>
      {button()}
    </div>
  )
}

export default Movie;