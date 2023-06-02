
import './Header.scss';

import Logo from "../../Images/LOGO.svg";
export const Header = () =>
{
    return(
        <header>
            <img className="Header__Logo" src={Logo} />
            <nav className="Header__Nav">
                <a className="Nav__Link Nav__Link--CurrentLink" href="#">Accueil</a>
                <a className="Nav__Link" href="#">A Propos</a>
            </nav>
        </header>
    );
}

