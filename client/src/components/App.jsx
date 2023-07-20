import React, {useState} from 'react';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

var App = (props) => {

  const [movieList, setMovieList] = useState(movies);
  // const [watchedMovies, setWatchedMovies] = useState()

  movies.forEach(movie => {
    movie["watched"] = false;
  })
  console.log(movies)

  var watchedList = movies.filter( movie => movie.watched === true);
  var toWatchList = movies.filter( movie => movie.watched === false);

  let timeout = null;
  var handleSearch = (e) => {
    let query = e.target.value;
    var findMatch = () => {
      // var matches = movies.filter(movie => (movie.title === query));
      // setMovieList(matches);
      var matches = [];
      for (var i =0; i < movies.length; i++) {
        if (movies[i].title.toLowerCase().includes(query.toLowerCase())) {
          matches.push(movies[i]);
        }
      }

      if (matches.length > 0) {
        setMovieList(matches);
      } else {
        setMovieList([{title:'Movie not available!'}]);
      }

    }
    clearTimeout(timeout)
    timeout = setTimeout(() => {findMatch()}, 1000)
  }

var addMovie = (userInput) => {
  let list = [...movieList];
  list = [...movieList, {title: userInput}];
  setMovieList(list);
}

var handleToggle = (currentMovie) => {
  // flip T to F and F to T
  currentMovie.watched = !currentMovie.watched;
  // create temp variable and reassign movieList or include state in movie.jsx
}

var handleWatchedButton = () => {
  // var watchedList = movieList.filter( movie => movie.watched === true);
  setMovieList(watchedList);
}

var handleNotWatchedButton = () => {
  // var notWatched = movieList.filter( movie => movie.watched === false);
  setMovieList(toWatchList);
}

  return (
    <div className='mainPage'>
      <div>
        <AddMovie addMovie={addMovie}/>
      </div>
      <div>
        <button onClick={handleWatchedButton}>Watched</button>
        <button onClick={handleNotWatchedButton}>Not Watched</button>
        <Search handleSearch={(e) => handleSearch(e)} />
      </div>
      <div className='movielist'>
        <MovieList movies={movieList} handleToggle={handleToggle}/>
      </div>

    </div>
  )
};

export default App;