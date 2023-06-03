

import "./APropos.scss";
import BackgroundImg from "../../Images/APropos_Bg.png";
import {Collapse} from "../Collapse/Collapse";

export const APropos = () =>
{

    return(
        <div className="APropos">
            <div className="BackgroundCard">
                <img src={BackgroundImg} className="BackgroundCard__Img"/>
            </div>

            <section className="AProposList">

                <Collapse Title={"Fiabilité"}
                          Description={"blablablabla"}
                          />
                <Collapse Title={"Respect"}
                          Description={"blablablabla"}
                />
                <Collapse Title={"Service"}
                          Description={"blablablabla"}
                />
                <Collapse Title={"Sécurité"}
                          Description={"blablablabla"}
                />

            </section>

        </div>
    );
}

