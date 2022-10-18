import projects from "../data/projects";

export async function getServerSideProps(context: any) {
    const projectName = context.params.projectName;
    const project = projects.find(d => d.projectName === projectName);

    if (!project) return {notFound: true};

    return {
        props: {
            title: project.title,
            medium: project.medium,
            description: project.description,
            image: project.image,
            alt: project.alt,
            link: project.link,
        }
    }
}

export default function ProjectPage(props: {
    title: string,
    medium: string,
    description: string,
    link: string,
    image: string,
    alt: string,
}) {
    return (
        <>
            <div id="container">
                <div id="project-page-top">
                    <a href="/">Back home</a>
                    <h1>{props.title}</h1>
                    <p>{props.medium}</p>
                    <p>{props.description} <a href={props.link}>See history.</a></p>
                    <img src={props.image} alt={props.alt} id="proj-pic"/>
                </div>
            </div>
        </>
    )
}