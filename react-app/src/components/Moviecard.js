export default function Moviecard({img, title, release, genre, dir, actor, award}){
    return(
        <article className="movie-card">
            <h3>{title}</h3>
            <img src={img} alt={title} />
            <p>{release}</p>
            <p>{genre}</p>
            <p>{dir}</p>
            <p>{actor}</p>
            <p>{award}</p>
            <a href="#">Les mer</a>
        </article>
    )
}