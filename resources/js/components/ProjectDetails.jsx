import { useEffect } from "react";
import { useParams } from "react-router-dom"

function ProjectDetails(){

    const {id} = useParams();
    const projectId = parseInt(id);

    useEffect(() => {
          document.title = "Projets de Sofiane Dardek - Développeur Web | Portfolio";
      }, []);


// On stocke temporairement les données dans un tableau.
// Plus tard, elles seront enregistrées en base de données pour plus de modularité.
    const projectsData = [
        {
            title : "Projet restaurant",
            desc: "Ce projet de site web pour un restaurant a été conçu et développé dans le cadre de ma formation de développeur junior au CNAM, qui consistait à créer un site pour le restaurant camerounais Oburo.",
            img : "/images/projects/oburo/oburo_index.png",
            video : "/video/oburo/demo_oburo.mp4",
            technologies : ["Laravel", "HTML/CSS", "JS", "SQL"]
        },
        {
            title : "Projet Portfolio",
            desc: "Mon projet de portfolio m'a permis de m'exercer avec la bibliothèque React. Ce projet est important car il me représente et met en valeur mes compétences techniques et créatives. En développant ce portfolio, j'ai pu approfondir davantage mes connaissances.",
            img : "/images/projects/portfolio/portfolio_index.png",
            video : "",
            technologies : ["Laravel", "HTML/CSS", "REACT", "SQL"]
        },
        {
            title : "Projet centre social",
            desc : "Ce site web a été créé lors de mon stage de fin de première année de BTS pour un centre social, en utilisant WordPress et en respectant le cahier des charges. Cette expérience m'a permis d'apprendre WordPress et m'a appris le travail en équipe.",
            img : "/images/projects/school/cs-laruche.png",
            video : "",
            technologies : ["Wordpress", "HTML/CSS", "PHP", "JS"]
        }
    ]

    const project = projectsData[projectId-1];

    

    return <>
        <div className="project-details">
            <h1>{project.title}</h1>
            <div className="flex-container-project">
                <div className="images-container">
                        <img  src={project.img} className="project-image-detail"/>
                </div>
                <p>{project.desc}</p>
            </div>
            {/* On affiche une vidéo si il y'en a une */}
            {project.video && project.video.trim() !== "" && (
                <div className="video-container">
                    <h2>Démonstration</h2>
                    <video controls src={project.video} />
                </div>
            )}

            <div className="languages-container">
                <h2>Technologies utilisées</h2>
                <ul>
                {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                ))}
                </ul>
                </div>
        </div>
    </>
}

export default ProjectDetails