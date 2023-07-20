import React, {useState} from 'react';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';

var movies = [
  {title: 'Mean Girls', Year: 1995, Runtime: '345min', Metascore: 46, watched: false},
  {title: 'Hackers', Year: 1992, Runtime: '14min', Metascore: 765, watched: false},
  {title: 'The Grey', Year: 1924, Runtime: '135min', Metascore: 543, watched: false},
  {title: 'Sunshine', Year: 1945, Runtime: '1247min', Metascore: 674, watched: false},
  {title: 'Ex Machina', Year: 1965, Runtime: '112min', Metascore: 642, watched: false},
];

var App = (props) => {

  const [movieList, setMovieList] = useState(movies);

  console.log(movies);

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

// create function that updates movies and state and then pass it down
var updateMovieList = (currentMovie) => {
  // update list with watched property
  // iterate through movies === currentMovie
  // currentMovie -> watched property
  // update list
  for (var i = 0; i < movieList.length; i++) {
    if (movieList[i].title === currentMovie.title) {
      movieList[i].watched = currentMovie.watched;
    }
  }
  setMovieList(movieList);
 }

var handleWatchedButton = () => {
  setMovieList(movies);
  var watchedList = [];
  for (var i = 0; i < movies.length; i++) {
    if (movies[i].watched === true) {
      watchedList.push(movies[i]);
    }
  }
  console.log(watchedList)
  setMovieList(watchedList);
}

var handleNotWatchedButton = () => {
  setMovieList(movies);
  var notWatched = [];
  for (var i = 0; i < movies.length; i++) {
    if (movies[i].watched === false) {
      notWatched.push(movies[i]);
    }
  }
  console.log(notWatched)
  setMovieList(notWatched);
}

  return (
    <div className='mainPage'>
      <div>
        <AddMovie addMovie={addMovie}/>
      </div>
      <div>
        <Search handleSearch={(e) => handleSearch(e)} />
      </div>
      <div className='movielist'>
        <button onClick={handleWatchedButton}>Watched</button>
        <button onClick={handleNotWatchedButton}>Not Watched</button>
        <MovieList movies={movieList} updateMovieList ={updateMovieList} />
      </div>
    </div >
  )
};

export default App;