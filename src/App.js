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
  const movies = ["Jurassic Park", "Blade Runner", "Lord of the Rings", "The Northman", "The Hobbit", "The Dark Knight"]
  const rando = () => {
    let num = Math.floor(Math.random() * movies.length)
    return movies[num]
 }


  //function runs 1 time when the component loads
  //will only repeat if any value in the array changes
  useEffect(() => {
    getMovie(rando())
  },[])
  return (
    <div className="App">
      <Form getMovie={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
