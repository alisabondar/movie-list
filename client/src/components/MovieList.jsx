import React from 'react';
import Movie from './Movie.jsx';

// all movies
var MovieList = ({movies, updateMovieList}) => {

  return (
    <div className ='movies'>
      <ul>
        {movies.map((title, index) => {
          return (
            <Movie movie={title} key={index} updateMovieList={updateMovieList}/>
          )
        })}
      </ul>
  </div>
  )

};

export default MovieList;