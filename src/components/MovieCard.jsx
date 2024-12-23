

const MovieCard = () => {

    function onFavoriteClick () {
        alert("Clicked")
    }

    const movie = [
        {id: 1, title: "Venom", realise_date: "2023"},
        {id: 2, title: "Moana", realise_date: "2024"},
        {id: 3, title: "Red one", realise_date: "2022"}
    ]

    return (
        <div className="movie-card">
        <div className="movie-poster">
            <img src="{movie.url}" alt={movie.title} />
            <div className="movie-overlay">
                <button onClick={onFavoriteClick} className="favorite-btn">❤️</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.realise_date}</p>

        </div>
        </div>
    )
}

export default MovieCard