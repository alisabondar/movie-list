import React, {useState} from 'react';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';

// console.log("here")
var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

var App = (props) => {

  const [movieList, setMovieList] = useState(movies);
  movies.forEach(movie => {
    movie["watched"] = false;
  })

  var watchedList = movies.filter( movie => movie.watched === true);
  var toWatchList = movies.filter( movie => movie.watched === false);
  console.log(toWatchList);

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
    console.log(movieList);
  }

var addMovie = (userInput) => {
  let list = [...movieList];
  list = [...movieList, {title: userInput}];
  setMovieList(list);
}

var handleToggle = (e) => {
  if (movie.watched === false) {
    movie.watched = true;
  } else {
    movie.watched = false;
  }
}

var handleWatchedButton = () => {

}

var handlenNotWatchedButton = () => {

}

  return (
    <div className='mainPage'>
      <div>
        <AddMovie addMovie={addMovie}/>
      </div>
      <div>
        <button>Watched</button>
        <button>Not Watched</button>
        <Search handleSearch={(e) => handleSearch(e)} />
      </div>
      <div className='movielist'>
        <MovieList movies={movieList} />
      </div>

    </div>
  )
};

export default App;