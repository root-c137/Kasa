import ArrowTop from "../../Images/ArrowTop.svg";
import {useState} from "react";

import "./Collapse.scss";


export const Collapse = ({Title, Description}) =>
{
    const [isOpen, setOpen] = useState(false);

    return (
        <section className="Collapse">
            <img className={isOpen ? "Arrow Arrow--CurrentArticle" : "Arrow"} src={ArrowTop}
                 onClick={() => setOpen(!isOpen) } />
            <h2 className="Collapse__Title">{Title}</h2>
            <article className={isOpen ? "Article Article--Open" : "Article"}>
                <p className="Article__Txt">{Description}</p>
            </article>
        </section>
    );
}


