

import "./Error.scss";
import {Link} from "react-router-dom";

export const Error = () =>
{
    return (
        <div className="Error">
            <p className="Error__Title">404</p>
            <p className="Error__Txt">Oups! La page que vous demandez n'existe pas.</p>

            <Link className="Error__Link" to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
}

