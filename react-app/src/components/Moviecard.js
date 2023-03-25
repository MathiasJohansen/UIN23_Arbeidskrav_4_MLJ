export default function Moviecard({img, title, ingress}){
    return(
        <article className="movie-card">
            <h3>{title}</h3>
            <img src={img} alt={title} />
            
            <p>{ingress}</p>
            <a href="#">Les mer</a>
        </article>
    )
}