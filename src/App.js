import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay';
import { useState, useEffect } from 'react'

function App() {
  const [movie, setMovie] = useState(null)
  const API_KEY = "808cd078"
  const getMovie = async (searchTerm) => {
    //api call
    const response = await fetch(`http://www.ombdapi.com/?aipkey=${API_KEY}&t=${searchTerm}`)
    //converting to js object
    const data = await response.json()
    //updating state
    setMovie(data)
  }
  return (
    <div className="App">
      <Form />
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
