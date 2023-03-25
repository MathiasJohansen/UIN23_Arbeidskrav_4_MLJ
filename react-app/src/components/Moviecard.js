export default function Moviecard({img, title, ingress}){
    return(
        <article className="movice-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{ingress}</p>
            <a href="#">Les mer</a>
        </article>
    )
}