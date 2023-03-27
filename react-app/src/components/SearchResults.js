import { data } from "autoprefixer"
import { useEffect, useState } from "react"
import Moviecard from "./Moviecard"

export default function Searchresults(){
    const [movies, setMovies] = useState([])
    const [movieInfo, setMovieInfo] = useState([])
    const [resultat, setResultat] = useState([])
    
    const getMovies = async() => {
        const response = await fetch ('http://www.omdbapi.com/?apikey=4ffa912&type=movie&s=james-bond')
        const data = await response.json()
        setMovies(data?.Search)
        console.log(data)
    }
    <>
    const getMovieInfo = async() => {
        const response = await fetch ('http://www.omdbapi.com/?apikey=4ffa912&type=movie&t=james-bond')
        const data = await response.json()
        setMovieInfo(data)
        console.log(data)
    }
    useEffect(() =>{
        getMovieInfo()
    },[])
    </>
    
    useEffect(() =>{
        getMovies()
    },[])
    return(
        <>
        <h2>Her kommer filmer</h2>
        <article>
            

            {movies?.map((movie, index) =>(
                <Moviecard key={index} title={movie?.Title} img={movie?.Poster}  />
            ))}

        </article>
        </>
    )
}