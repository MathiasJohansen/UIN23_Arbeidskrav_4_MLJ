export default function Moviecard({img, title, release, genre, dir, actor, award}){
    return(
        <article className="movie-card">
            <h3>{title}</h3>
            <img src={img == "N/A" ?  "https://cdn.pixabay.com/photo/2023/03/17/16/55/man-7859085_960_720.jpg" : img} alt={title} />
            <ul>
                <li>Filmen ble gitt ut den {release}</li>
                <li>Sjanger: {genre}</li>
                <li>Regissør: {dir}</li>
                <li>Skuespillere i filmen: {actor}</li>
                <li>Antall priser: {award}</li>
            </ul>
            <a href="#">Les mer</a>
        </article>
    )
}