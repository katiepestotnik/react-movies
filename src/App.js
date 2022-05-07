import './App.css'
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay';
import { useState, useEffect } from 'react'

function App() {
  const [movie, setMovie] = useState(null)
  const API_KEY = "808cd078"
  const getMovie = async (searchTerm) => {
    //api call
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`)
    //converting to js object
    console.log(response)
    const data = await response.json()
    //updating state
    console.log(data)
    setMovie(data)
  }
  //function runs 1 time when the component loads
  //will only repeat if any value in the array changes
  useEffect(() => {
    getMovie("Jurassic Park")
  },[])
  return (
    <div className="App">
      <Form getMovie={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
