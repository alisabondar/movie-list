var API_KEY: 'e0e9174b859ee6f60f876ec3f12c8435';

import $ from "jquery";
//https://api.themoviedb.org/3/movie/550?api_key=e0e9174b859ee6f60f876ec3f12c8435

var Parse = {

  readAll: function(callback = ()=>{}) {
    $.ajax({
      type: 'GET',


      url: 'https://api.themoviedb.org/3/search/movie?query{movie.title}',
      contentType: 'application/json',
      // headers: {
      //   accept: 'application/json',
      //   Authorization: 'Bearer ' + API_KEY
      // },
      success: (data) => {
        callback(data.results);
      },
      error: function(error) {
        console.error('MovieList: Failed to fetch data', error);
      }
    })
  }
}

export default Parse;

