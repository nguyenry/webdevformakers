export default function Project(props: {
    title: string,
    description: string,
    medium: string,
    link: string,
    image: string,
    alt: string,
}) {
    console.log(props)

    return (
        <>
            <a href={props.link} className="project-wrapper">
                <div className="project-box">
                    <img src={props.image} alt={props.alt}></img>
                    <h2>{props.title}</h2>
                    <p>{props.medium}</p>
                    <p>{props.description}</p>
                    <div className="badge"><span>Artwork</span></div>
                </div>
            </a>
        </>
    )
}