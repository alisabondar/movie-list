import React from 'react';
// render movie/movieList here
var Movie = ({movie}) => {
  return(
    <div id='movie'>
      <li title={movie}>{movie.title}</li>
      <button>{movie.watched ? 'Watched' : 'To Be Watched'}</button>
    </div>
  )
}

export default Movie;