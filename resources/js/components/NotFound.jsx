import { Link } from 'react-router-dom';

function NotFound() {
    return <>
        <div className="not-found">
            <h2>Page introuvable</h2>
            <p>La page que vous recherchez n'existe pas.</p>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    
    </>
}

export default NotFound;