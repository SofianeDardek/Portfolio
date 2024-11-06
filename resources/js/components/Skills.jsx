import { useEffect, useState } from "react";

function Skills() {

    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSkills = async () => {

            try {
                const response = await fetch("api/skills");
    
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des compétences");
                }
    
                
                const data = await response.json();
                setSkills(data);
                console.log(skills);
                
            } catch (error) {
                console.error("Erreur de traitement :", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);
    return (
        <>
            <div className="content-skills">
                <h1 className="title-page">Compétences</h1>
                <hr className="separator" />
                <div className="skills-container">
               {  loading ? (
                <p style={{color:"white"}}>chargement...</p>
               ) : (
                    skills.map(skill => (
                    <div className="skill">
                        <h2>{skill.name}</h2>
                        <p>{skill.description}</p>
                    </div>
                    ))
                )}
                    
                </div>
            </div>
        </>
    );
}

export default Skills;