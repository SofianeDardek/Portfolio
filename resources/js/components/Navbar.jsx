import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

function Navbar(){
    return <>
    <header>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/skills">Compétences</Link></li>
                    <li><Link to="/projects">Projets</Link></li>
                    <li><a href="#">Mon CV</a></li>
                </ul>
            </nav>
                <Link to="/contact" className="button-contact">Contact</Link>
    </header>
            <div className="outlet-container">
                <Outlet />
            </div>
    <Footer />

    </>
}

export default Navbar;