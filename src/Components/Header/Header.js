
import './Header.scss';
import { Link } from 'react-router-dom'


import Logo from "../../Images/LOGO.svg";
export const Header = () =>
{
    return(
        <header>
            <img className="Header__Logo" src={Logo} />
            <nav className="Header__Nav">
                <Link className="Nav__Link Nav__Link--CurrentLink" to="/">Accueil</Link>
                <Link className="Nav__Link" to="a-propos">A Propos</Link>
            </nav>
        </header>
    );
}

