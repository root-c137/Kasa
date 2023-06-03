

import "./Gallery.scss";


export const Gallery = ({Logements}) =>
{
    return(
        <section className="Gallery">

            {
                Logements.map((Logement) =>
                        <div className="Gallery__Card" key={Logement.id}>
                            <img className="Card__Img" src={Logement.cover} />
                            <h2 className="Card__Title">{Logement.location}</h2>
                        </div>
                )

            }

        </section>
    );
}

