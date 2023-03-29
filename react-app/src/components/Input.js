export default function Input({getMovies, inputValue}){
    return(
        <>
        <div className="searchBox">
            <input type="text" placeholder="Søk.." onInput={event => inputValue(event.target.value)} />
            <button onClick={getMovies} >Søk</button>
        </div>
        </>
    )
}