import { Link, Outlet } from "react-router-dom";

function Navbar(){
    return <>
    <header>
            <nav>
                <Link to="/">Acceuil</Link>
                <Link to="/skills">Compétences</Link>
                <Link to="/projects">Projets</Link>
                <Link to="/contact">Contact</Link>
            </nav>
    </header>
            <Outlet />

    </>
}

export default Navbar;