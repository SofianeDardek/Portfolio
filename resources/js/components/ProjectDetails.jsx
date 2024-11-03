import { useParams } from "react-router-dom"

function ProjectDetails(){
    const {id} = useParams();
    const projectId = parseInt(id);

// On stocke temporairement les données dans un tableau.
// Plus tard, elles seront enregistrées en base de données pour plus de modularité.
    const projectsData = [
        {
            title : "projet 1",
            img : "/images/projects/oburo/oburo_index.png",
            video : "/video/oburo/demo_oburo.mp4"
        },
        {
            title : "projet 2",
            img : "/images/projects/portfolio/portfolio_index.png",
            video : ""
        },
        {
            title : "Projet 3",
            img : "/images/projects/oburo/oburo_index.png",
            video : ""
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
                <p>desc</p>
            </div>
            {/* On affiche une vidéo si il y'en a une */}
            {project.video && project.video.trim() !== "" && (
                <div className="video-container">
                    <h2>Démonstration</h2>
                    <video controls src={project.video} />
                </div>
            )}

            <div className="languages-container">
                <h2>Langages Utilisés</h2>
                <ul>
                    <li>php</li>
                    <p>html</p>
                </ul>
                </div>
        </div>
    </>
}

export default ProjectDetails