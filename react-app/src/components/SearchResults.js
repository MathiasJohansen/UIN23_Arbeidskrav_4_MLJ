import { useEffect, useState } from "react"
import Moviecard from "./Moviecard"

export default function Searchresults(){
    const [moviesPrint, setMoviesPrint] = useState([])
    const [input, inputValue] = useState("james-bond")
    
    const getMovies = async() => {
        if(input.length > 2){

        const response = await fetch (`http://www.omdbapi.com/?apikey=4ffa912&type=movie&s=${input.toLowerCase().replace(" ", "-")}`)
        const data = await response.json()
        
        const movieInfo = data?.Search
        const resultat = movieInfo?.map(items => items?.imdbID)

        const findMovieIds = await Promise.all (resultat.map(id => (
            fetch (`http://www.omdbapi.com/?apikey=4ffa912&type=movie&i=${id}`)
        )))

        const useId = await Promise.all (findMovieIds.map(realId => (
             realId.json()
        )))

        setMoviesPrint(useId)

        console.log("getMovieInfo", useId)
        console.log("getmovies", data)

        }else{
            alert("Siden kan ikke returnere resultater under 3 tegn, din hersens dumpapp")
        }
    }

    useEffect(() =>{
        getMovies()
    },[])
    console.log(input)
    
    return(
        <>
        <div className="searchBox">
            <input id="myInput" type="text" placeholder="Søk.." onInput={event => inputValue(event.target.value)} />
            <button onClick={getMovies}  >Søk</button>
        </div>
        <article>
            

            {moviesPrint?.map((movie, index) =>(
                <Moviecard key={index} title={movie?.Title} img={movie?.Poster} release={movie?.Released} genre={movie?.Genre} dir={movie?.Director} actor={movie?.Actors} award={movie?.Awards} />
            ))}

        </article>
        </>
    )
}