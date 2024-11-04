import { Link } from "react-router-dom";

function Projects() {

    // Création d'un tableau "projects" qui regroupe les projets sous forme d'objets
    const projects = [
        {
            id: 1,
            title: "Projet Restaurant",
            img: "/images/projects/oburo/oburo_index.png"
        },
        {
            id: 2,
            title: "Projet Portfolio",
            img: "/images/projects/portfolio/portfolio_index.png"
        },
        {
            id: 3,
            title: "Site web pour un centre social",
            img: "/images/projects/school/cs-laruche.png"
        }
    ]
    
    return (
        <>
            <div className="content-projects">
                <h1 className="title-page">Mes Projets</h1>
                <hr />
                <div className="projects-container">
                    { projects.map((el) => {
                    return (
                    <div className="project-card">
                        <img src={el.img} alt="Aperçu du projet 1" className="project-image"/>
                        <h2>{ el.title }</h2>
                        <Link to={`/projects/${el.id}`} className="project-link">Voir le projet</Link>
                    </div>);
                    }) }
                </div>
            </div>
        </>
    );
}

export default Projects;