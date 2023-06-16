

import "./APropos.scss";
import BackgroundImg from "../../Images/APropos_Bg.png";
import {Collapse} from "../../Components/Collapse/Collapse";

export const APropos = () =>
{

    return(
        <div className="APropos">
            <div className="BackgroundCard">
                <img src={BackgroundImg} className="BackgroundCard__Img"/>
            </div>

            <section className="AProposList">

                <Collapse Title={"Fiabilité"}
                          Description={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les " +
                              "photos sont conformes aux logements et toutes les informations sont régulièrement " +
                              "vérifiées par nos équipes."}
                          />
                <Collapse Title={"Respect"}
                          Description={"La bienveillance fait partie des valeurs fondatrices de kasa. " +
                              "Tout comportements discriminatoire ou de perturbation du voisinage " +
                              "entrainera une exclusion de notre plateforme."}
                />
                <Collapse Title={"Service"}
                          Description={"La bienveillance fait partie des valeurs fondatrices de kasa. " +
                              "Tout comportements discriminatoire ou de perturbation du voisinage " +
                              "entrainera une exclusion de notre plateforme."}
                />
                <Collapse Title={"Sécurité"}
                          Description={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos voyageurs, " +
                              "chaque logement correspond aux critères de sécurité établis par nos services. En laissant " +
                              "une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes que les standards " +
                              "sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. "}
                />

            </section>

        </div>
    );
}

