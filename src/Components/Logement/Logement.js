
import "./Logement.scss";
import {useLocation} from "react-router-dom";

import LeftArrow from "../../Images/LeftArrow.svg";
import RightArrow from "../../Images/RightArrow.svg";
import StarGray from "../../Images/Star_Gray.svg";
import StarRed from "../../Images/Star_Red.svg";

import LogementsJSON from "../../Json/Logements.json";
import {useEffect, useState} from "react";
import {Collapse} from "../Collapse/Collapse";


export const Logement = ({props}) =>
{
    const Logements = LogementsJSON;
    const [CurrentLogement, setCurrentLogement] = useState("");
    const [CarrouselIndex, setCarrouselIndex] = useState(0);
    const [Rating, setRating] = useState(0);
    const Location = useLocation();
    const Id = Location.state?.id;

    useEffect(() => {

        Logements.map((Logement) => {
            if(Logement.id === Id) {
                setCurrentLogement(Logement);
                setRating(Logement.rating);
            }
        });

        console.log(CurrentLogement);
    })


    const onNext = () =>
    {
        if(CarrouselIndex < CurrentLogement.pictures.length - 1)
            setCarrouselIndex(CarrouselIndex + 1);
        else
            setCarrouselIndex(0);

    }

    const onPrev = () =>
    {
        if(CarrouselIndex > 0)
            setCarrouselIndex(CarrouselIndex - 1 );
        else
            setCarrouselIndex(CurrentLogement.pictures.length - 1);

    }


    return (
        <div className="Logement">

            <div className="Carrousel">
                <img className="Carrousel__Button  Carrousel__Button--Left" src={LeftArrow}
                onClick={onPrev}/>
                <img className="Carrousel__Button Carrousel__Button--Right" src={RightArrow}
                     onClick={onNext} />

                {CurrentLogement !== "" ?
                    <img className="Carrousel__Picture" src={CurrentLogement.pictures[CarrouselIndex]}
                     key={CurrentLogement.pictures[CarrouselIndex]} />
                    :
                    ""
                }

            </div>

            <div className="InfosAndAuthor">

                <div className="LogementInfos">
                    <h2 className="LogementInfos__Title">{CurrentLogement.title}</h2>
                    <h3 className="LogementInfos__Location">{CurrentLogement.location}</h3>
                    <div className="LogementInfos__TagList">
                        {
                            CurrentLogement !== ""
                                ?
                                    CurrentLogement.tags.map((Tag, index) => {
                                             return <span className="TagList__Tag" key={index}>{Tag}</span>
                                      })
                                :
                                    ""
                        }
                    </div>
                </div>

                <div className="AuthorAndRating">
                    <div className="AuthorAndRating__Rating">
                        {
                            [...Array(5)].map((star, index) => {
                                return (
                                    index <= Rating - 1 ? <img key={index} className="Rating__Star" src={StarRed} /> :
                                        <img key={index} className="Rating__Star" src={StarGray} />
                                )
                            })
                        }
                    </div>

                    <div className="AuthorAndRating__Author">
                        <h3 className="Author__Name">{CurrentLogement !== "" ? CurrentLogement.host.name : ""}</h3>
                        <img className="Author__Picture" src={CurrentLogement !== "" ? CurrentLogement.host.picture : ""} />
                    </div>

                </div>

            </div>

            <div className="Collapses">

                <Collapse Description={CurrentLogement.description}
                          Title={"Description"} />
                <Collapse List={CurrentLogement.equipments}
                          Title={"Équipements"} />

            </div>
        </div>
    );
}

