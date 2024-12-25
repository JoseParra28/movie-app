import MovieCard from "../components/MovieCard"
import React, {useEffect, useState} from "react"
import { searchrMovies, getPopularMovies } from "../Services/api"
import "../css/Home.css"


const Home = () => {

    const [ searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularmovies = async ()=> {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }catch(err){
                console.log(err)
                setError("Fail to load movies")
            }
                finally{
                    setLoading(false)
                }
            
        }
        loadPopularmovies()
    }, [])
    

    const handleSearch = async (e) => {
        e.preventDefault()
        if(!searchQuery.trim()) return
        if (loading) return
        setLoading(true) 
        try {
            const searchResults = await searchrMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.lod(err)
            setError("Failed to search movies...")
        } finally{
            setLoading(false)
        }
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

        {error && <div className="error-message">{}error</div>}
        {loading ? <div className="loading">Loading...</div> : <div className="movies-grid">
                {movies.map(
                    (movie) => 
                    (
                        <MovieCard movie={movie} key={movie.id}/>
                     )  
                    )}
            </div>
            } 
        </div>
    )
}

export default Home