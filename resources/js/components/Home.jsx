import { useEffect } from "react";

function Home(){

    useEffect(() => {
        document.title = "Sofiane Dardek - Développeur Web Passionné | Portfolio";
    }, []);

    return <>
    <div className="content-home">
        <h1 className="title-page">Accueil</h1>
        <hr className="separator" />
        <div className="img-content">
            <div className="flex-imgProfile-socials">
            <img id="img-profile" src="/images/profile.jpg" />
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer">
                        <img src="/images/socials/linkedin.svg" alt="LinkedIn" className="social-icon" />
                    </a>
                    <a href="https://github.com/ton-profil" target="_blank" rel="noopener noreferrer">
                        <img src="/images/socials/github.svg" alt="GitHub" className="social-icon" />
                    </a>
                </div>
            </div>
            
            <div className="title-text-container">
                <h1>Sofiane Dardek, 24 ans, Développeur Web Passionné</h1>
                <p>
                    Je m'appelle Sofiane Dardek et je suis passionné par le développement web et l'informatique. 
                    Après avoir obtenu mon BTS Systèmes Numériques option Informatique et Réseaux (SNIR), 
                    j'ai renforcé mes compétences en programmation et en réseaux. 
                    Motivé par l'innovation et les défis techniques je souhaite poursuivre mes études en licence 3 informatique au CNAM de Lille en alternance, 
                    afin de continuer à me former tout en acquérant de l'expérience en entreprise. 
                    Ma détermination et ma curiosité me poussent à toujours apprendre et à m'adapter aux nouvelles tendances du secteur.
                </p>
            </div>
        </div>
    </div>
    </>
}

export default Home;