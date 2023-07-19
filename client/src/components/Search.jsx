import React from 'react';

const Search = ({handleSearch}) => {
  return (
    <div className='search-bar'>
      <input type='text' placeholder='Search...' onChange={(e) => handleSearch(e)}/>
      {/* how do we add functionality to button along with input text */}
      <button className='btn'>Go!</button>
    </div>
  )
}

// if no js then can use ()
// with js use {} and return()

export default Search;