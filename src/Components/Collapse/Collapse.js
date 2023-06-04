import ArrowTop from "../../Images/ArrowTop.svg";
import {useState} from "react";

import "./Collapse.scss";


export const Collapse = ({Title, Description, List}) =>
{
    const [isOpen, setOpen] = useState(false);

    return (
        <section className="Collapse">
            <img className={isOpen ? "Arrow Arrow--CurrentArticle" : "Arrow"} src={ArrowTop}
                 onClick={() => setOpen(!isOpen) } />
            <h2 className="Collapse__Title">{Title}</h2>
            <article className={isOpen ? "Article Article--Open" : "Article"}>
                {

                    Description !== undefined ? <p className="Article__Txt">{Description}</p> :

                        List !== undefined ?
                            <ul className="Article__List">
                                {List.map((item, index) =>  <li key={index} className="Article__List__Item">{item}</li>)}
                            </ul>
                            : ""
                }
            </article>
        </section>
    );
}


