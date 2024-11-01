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
            img: ""
        },
        {
            id: 3,
            title: "Site web pour un centre social",
            desc: "Ce site web a été créé lors de mon stage de fin de première année de BTS.",
            img: ""
        }
    ]
    
    return (
        <>
            <div className="content-projects">
                <h1 className="title-page">Mes Projets</h1>
                <hr />
                <div className="projects-container">
                    <div className="project-card">
                        <img src="/images/projects/oburo/oburo_index.png" alt="Aperçu du projet 1" className="project-image"/>
                        <h2>Projet Restaurant</h2>
                        <p>Ce projet de site web pour un restaurant a été conçu et développé dans le cadre de ma formation de développeur junior au CNAM. </p>
                        <a href="https://lien-vers-le-projet.com" target="_blank" rel="noopener noreferrer" className="project-link">Voir le projet</a>
                    </div>
                    <div className="project-card">
                        <img src="/images/projet2.jpg" alt="Aperçu du projet 2" className="project-image"/>
                        <h2>Application de Gestion de Tâches</h2>
                        <p>Une application de gestion de tâches développée en Laravel et Vue.js pour organiser le travail en équipe.</p>
                        <a href="https://lien-vers-le-projet.com" target="_blank" rel="noopener noreferrer" className="project-link">Voir le projet</a>
                    </div>
                    <div className="project-card">
                        <img src="/images/projet3.jpg" alt="Aperçu du projet 3" className="project-image"/>
                        <h2>Site E-commerce</h2>
                        <p>Un site e-commerce complet avec intégration de paiement en ligne, réalisé avec PHP et MySQL.</p>
                        <a href="https://lien-vers-le-projet.com" target="_blank" rel="noopener noreferrer" className="project-link">Voir le projet</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;