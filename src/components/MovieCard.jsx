

const MovieCard = () => {

    function onFavoriteClick () {
        alert("Clicked")
    }


    return (
        <div className="movie-card">
        <div className="movie-poster">
            <img src="{movie.url}" alt={MovieCard.title} />
            <div className="movie-overlay">
                <button onClick={onFavoriteClick} className="favorite-btn">❤️</button>
            </div>
        </div>
        </div>
    )
}

export default MovieCard