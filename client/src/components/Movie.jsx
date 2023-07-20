import React, {useState} from 'react';
// render movie/movieList here
var Movie = ({movie, handleToggle}) => {
  // add state for movie -> watched or not
  const [watched, setWatched] = useState(movie.watched);

  var handleClick = () => {
    setWatched(!watched);
  }

  return(
    <div id='movie'>
      <li title={movie}>{movie.title}</li>
      <button onClick={handleClick}>{watched ? 'Watched' : 'To Be Watched'}</button>
    </div>
  )
}

export default Movie;