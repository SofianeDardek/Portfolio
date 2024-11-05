import { Link, Outlet, NavLink } from "react-router-dom";
import Footer from "./Footer";

function Navbar(){
    return <>
    <div className="wrapper">
        <header>
                <nav>
                <button className="menu-toggle">Menu</button>
                    <ul>
                        <li><NavLink to="/">Accueil</NavLink></li>
                        <li><NavLink to="/skills">Compétences</NavLink></li>
                        <li><NavLink to="/projects">Projets</NavLink></li>
                        <li><a href="#">Mon CV</a></li>
                    </ul>
                </nav>
                    <Link to="/contact" className="button-contact">Contact</Link>
        </header>
                <div className="outlet-container">
                    <Outlet />
                </div>
        <Footer />
    </div>

    </>
}

export default Navbar;