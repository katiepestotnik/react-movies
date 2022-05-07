
const MovieDisplay = ({ movie }) => {
    if (movie) {
        const ratings = movie.Ratings.map((ele, indx) => {
            return (
                <>
                    
                    <div>{ele.Source}</div>
                    <div>Rating: {ele.Value}</div>
                </>
            )
        })
        return (
            <div>
                <h1>Title: {movie.Title}</h1>
                <div>Year: {movie.Year}</div>
                <div>Rated: {movie.Rated}</div>
                <div>Release Date: {movie.Released}</div>
                <div>Actors: {movie.Actors}</div>
                <img src={movie.Poster} alt={movie.Poster}/>
                <div>{ratings}</div>
                <div>Movie Length: {movie.Runtime}</div>
                <div>Awards: {movie.Awards}</div>
                <div>Box Office $: {movie.BoxOffice}</div>
                <div>Country: {movie.Country}</div>
                <div>Director: {movie.Director}</div>
                <div>Genre: {movie.Genre}</div>
            </div>
        )
    } else {
        return (
            <h1>SEARCH for a MOVIE</h1>
        )
    }

}
export default MovieDisplay