function Projects() {

    // Création d'un tableau "projects" qui regroupe les projets sous forme d'objets
    const projects = [
        {
            id: 1,
            title: "Projet Restaurant",
            desc: "Ce projet de site web pour un restaurant a été conçu et développé dans le cadre de ma formation de développeur junior au CNAM.",
            img: "/images/projects/oburo/oburo_index.png"
        },
        {
            id: 2,
            title: "Projet Portfolio",
            desc: "Ce projet a pour but de présenter qui je suis.",
            img: "/images/projects/portfolio/portfolio_index.png"
        },
        {
            id: 3,
            title: "Site web pour un centre social",
            desc: "Ce site web a été créé lors de mon stage de fin de première année de BTS.",
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
                        <p>{el.desc}</p>
                        <a href="https://lien-vers-le-projet.com" target="_blank" rel="noopener noreferrer" className="project-link">Voir le projet</a>
                    </div>);
                    }) }
                </div>
            </div>
        </>
    );
}

export default Projects;