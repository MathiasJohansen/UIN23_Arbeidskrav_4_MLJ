import { useEffect, useState } from "react"

export default function Main(){
    const [movies, setMovies] = useState([])
    
    const getMovies = async() => {
        const response = await fetch ('http://www.omdbapi.com/?i=tt3896198&apikey=4ffa912')
        const data = await response.json()
        
        console.log(data)
    }
    
    useEffect(() =>{
        getMovies()
    },[])
    return(
        <>
        <h2>Her kommer filmer</h2>

        //http://www.omdbapi.com/?i=tt3896198&apikey=4ffa912


        </>
    )
}