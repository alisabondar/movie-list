import React from 'react';
import Movie from './Movie.jsx';

// all movies
var MovieList = ({movies, handleToggle}) => (
  <div className ='movies'>
    <ul>
      {movies.map((title, index) => {
      return (
        <Movie movie={title} key={index} handleToggle={handleToggle}/>
      )
      })}
    </ul>
  </div>
)

export default MovieList;