import "../css/MovieCard.css"

const MovieCard = ({movie}) => {

    function onFavoriteClick () {
        alert("Clicked")
    }


    return (
        <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button onClick={onFavoriteClick} className="favorite-btn">❤️</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.realise_date?.split("-")[0]}</p>

        </div>
        </div>
    )
}

export default MovieCard