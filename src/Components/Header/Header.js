
import './Header.scss';
import {Link, useLocation} from 'react-router-dom'


import Logo from "../../Images/LOGO.svg";
import {useEffect, useState} from "react";
export const Header = () =>
{
    const Location = useLocation();
    const CurrentLinkClass = "Nav__Link--CurrentLink";
    const [AddClassHome, setAddClassHome] = useState("");
    const [AddClassApropos, setAddClassAPropos] = useState("");


    useEffect( () =>
    {
        if(Location.pathname === "/")
        {
            setAddClassHome(CurrentLinkClass);
            setAddClassAPropos("");
        }
        if(Location.pathname === "/a-propos")
        {
            setAddClassAPropos(CurrentLinkClass);
            setAddClassHome("");
        }
        if(Location.pathname !== "/" && Location.pathname !== "a-propos")
        {
            setAddClassHome("");
        }
    })


    return(
        <header>
            <img className="Header__Logo" src={Logo} />
            <nav className="Header__Nav">
                <Link className={"Nav__Link "+AddClassHome} to="/">Accueil</Link>
        <Link className={"Nav__Link "+AddClassApropos} to="a-propos">A Propos</Link>
            </nav>
        </header>
    );
}

