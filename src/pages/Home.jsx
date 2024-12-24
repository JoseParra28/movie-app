import MovieCard from "../components/MovieCard"
import React, {useState} from "react"
import "../css/Home.css"


const Home = () => {

    const [ searchQuery, setSearchQuery] = useState("")

    const movies = [
        {id: 1, title: "Venom", realise_date: "2023"},
        {id: 2, title: "Moana", realise_date: "2024"},
        {id: 3, title: "Red one", realise_date: "2022"}
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("Search again...")
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form" action="">
                <input type="text" 
                placeholder="Search for movies..." 
                className="search-imput" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="Submit" 
                className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(
                    (movie) => 
                    (
                        <MovieCard movie={movie} key={movie.id}/>
                     )  
                    )}
            </div>
        </div>
    )
}

export default Home