import { Link, Outlet } from "react-router-dom";

function Navbar(){
    return <>
    <header>
            <nav>
                <ul>
                    <li><Link to="/">Acceuil</Link></li>
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

    </>
}

export default Navbar;