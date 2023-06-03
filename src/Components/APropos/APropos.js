

import "./APropos.scss";
import BackgroundImg from "../../Images/APropos_Bg.png";
import ArrowTop from "../../Images/ArrowTop.svg";
import {useState} from "react";

export const APropos = () =>
{
    const [FiabiliteisOpen, setFiabiliteOpen] = useState(false);
    const [RespectisOpen, setRespectOpen] = useState(false);
    const [ServiceisOpen, setServiceOpen] = useState(false);
    const [SecurityisOpen, setSecurityOpen] = useState(false);

    return(
        <div className="APropos">
            <div className="BackgroundCard">
                <img src={BackgroundImg} className="BackgroundCard__Img"/>
            </div>

            <section className="AProposList">

                <section className="Fiabilite AProposList__Section">
                    <img className={FiabiliteisOpen ? "Arrow Arrow--CurrentArticle" : "Arrow"} src={ArrowTop}
                         onClick={() => setFiabiliteOpen(!FiabiliteisOpen) } />
                    <h2 className="AProposList__Title">Fiabilité</h2>
                    <article className={FiabiliteisOpen ? "Article Article--Open" : "Article"}>
                        <p className="Article__Txt">blablabalblablablablablbala</p>
                    </article>
                </section>

                <section className="Respect AProposList__Section">
                    <img className={RespectisOpen ? "Arrow Arrow--CurrentArticle" : "Arrow"} src={ArrowTop}
                         onClick={() => setRespectOpen(!RespectisOpen) } />
                    <h2 className="AProposList__Title">Respect</h2>
                    <article className={RespectisOpen ? "Article Article--Open" : "Article"}>
                        <p className="Article__Txt">blablabalblablablablablbala</p>
                    </article>
                </section>

                <section className="Service AProposList__Section">
                    <img className={ServiceisOpen ? "Arrow Arrow--CurrentArticle" : "Arrow"} src={ArrowTop}
                         onClick={() => setServiceOpen(!ServiceisOpen) } />
                    <h2 className="AProposList__Title">Service</h2>
                    <article className={ServiceisOpen ? "Article Article--Open" : "Article"}>
                        <p className="Article__Txt">blablabalblablablablablbala</p>
                    </article>
                </section>

                <section className="Security AProposList__Section">
                    <img className={SecurityisOpen ? "Arrow Arrow--CurrentArticle" : "Arrow"} src={ArrowTop}
                         onClick={() => setSecurityOpen(!SecurityisOpen) } />
                    <h2 className="AProposList__Title">Sécurité</h2>
                    <article className={SecurityisOpen ? "Article Article--Open" : "Article"}>
                        <p className="Article__Txt">blablabalblablablablablbala</p>
                    </article>
                </section>



            </section>

        </div>
    );
}

