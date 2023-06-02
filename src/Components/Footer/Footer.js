
import "./Footer.scss";
import LogoWhite from "../../Images/Logo_White.svg";

export const Footer = () =>
{
    return(
        <footer>
            <img className="Footer__Logo" src={LogoWhite} />
            <p className="Footer__Copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
