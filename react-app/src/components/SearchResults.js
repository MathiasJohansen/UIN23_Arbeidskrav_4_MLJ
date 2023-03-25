import { useEffect, useState } from "react"
import Moviecard from "./Moviecard"

export default function Searchresults(){
    const [movies, setMovies] = useState([])
    const [resultat, setResultat] = useState([])
    
    const getMovies = async() => {
        const response = await fetch ('http://www.omdbapi.com/?i=tt3896198&apikey=4ffa912&s=james-bond')
        const data = await response.json()
        setMovies(data?.Search)
    }
    console.log(movies)
    
    useEffect(() =>{
        getMovies()
    },[])
    return(
        <>
        <h2>Her kommer filmer</h2>
        <article>
            

            {movies?.map((movie, index) =>(
                <Moviecard key={index} title={movie?.Title} img={movie?.Poster}/>
            ))}

        </article>
        </>
    )
}