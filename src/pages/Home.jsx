import MovieCard from "../components/MovieCard"

const Home = () => {

    const movies = [
        {id: 1, title: "Venom", realise_date: "2023"},
        {id: 2, title: "Moana", realise_date: "2024"},
        {id: 3, title: "Red one", realise_date: "2022"}
    ]

    return (
        <div className="home">
            <div className="movies-grid">
                {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
            </div>
        </div>
    )
}

export default Home