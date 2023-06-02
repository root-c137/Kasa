
import "./Presentation.scss";
import PresentationImg from "../../Images/Presentation_bg.png";

export const Presentation = () =>
{
    return(
        <section className="Presentation">
            <img src={PresentationImg} className="Background__ImageBg"/>
            <h1 className="Presentation__WelcomeTxt">Chez vous, partout et ailleurs</h1>
        </section>
    );
}

