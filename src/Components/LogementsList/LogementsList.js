

import "./LogementsList.scss";
import {Link} from "react-router-dom";


export const LogementsList = ({Logements}) =>
{
    return(
        <section className="Gallery">

            {
                Logements.map((Logement, index) =>
                    <div className="Gallery__Card" key={Logement.id}>
                        <Link className="Gallery__Card__Link" to={
                            "/logement/" + Logement.title.toLowerCase()
                                .replace(/[^a-z0-9]+/g, '-')
                                .replace(/(^-|-$)+/g, '')
                        }

                              state={{id: Logement.id}}
                        >
                            <img className="Card__Img" src={Logement.cover} />
                            <h2 className="Card__Title">{Logement.title}</h2>
                        </Link>
                    </div>
                )

            }

        </section>
    );
}

