import { useEffect } from "react";
import { Link } from "react-router-dom";

function Projects() {

    useEffect(() => {
        document.title = "Projets de Sofiane Dardek - Développeur Web | Portfolio";
    }, []);

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
            title: "Projet Centre social",
            img: "/images/projects/school/cs-laruche.png"
        }
    ]
    
    return (
        <>
            <div className="content-projects">
                <h1 className="title-page">Projets</h1>
                <hr className="separator" />
                <div className="projects-container">
                    { projects.map((el) => {
                    return (
                    <div key={el.id} className="project-card">
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