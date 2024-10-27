function Projects() {
    return (
        <>
            <div className="content-projects">
                <h1 className="title-page">Mes Projets</h1>
                <hr />
                <div className="projects-container">
                    <div className="project-card">
                        <img src="/images/projet1.jpg" alt="Aperçu du projet 1" className="project-image"/>
                        <h2>Portfolio Personnel</h2>
                        <p>Un site web de portfolio pour présenter mes compétences et expériences. Construit avec HTML, CSS, JavaScript, et React.</p>
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