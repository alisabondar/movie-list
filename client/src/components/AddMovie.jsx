import React, {useState} from 'react';

var AddMovie = ({addMovie}) => {

  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(userInput);
    setUserInput('');
  }

  return(
    <form onSubmit = {handleSubmit}>
      <input type='text' placeholder='Add Movie Title Here' onChange={handleChange} />
      <button>Submit!</button>
    </form>
  )
}

export default AddMovie;