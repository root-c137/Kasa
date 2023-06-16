

import "../LogementsList/LogementsList.scss";
import LeftArrow from "../../Images/LeftArrow.svg";
import RightArrow from "../../Images/RightArrow.svg";
import {useState} from "react";


export const Gallery = ({pictures}) =>
{

    const [CarrouselIndex, setCarrouselIndex] = useState(0);

    const onNext = () =>
    {
        if(CarrouselIndex < pictures.length - 1)
            setCarrouselIndex(CarrouselIndex + 1);
        else
            setCarrouselIndex(0);

    }

    const onPrev = () =>
    {
        if(CarrouselIndex > 0)
            setCarrouselIndex(CarrouselIndex - 1 );
        else
            setCarrouselIndex(pictures.length - 1);

    }


    return(
        <div className="Carrousel">

            {
                    pictures.length > 1 ?
                    <>
                        <img className="Carrousel__Button  Carrousel__Button--Left" src={LeftArrow}
                             onClick={onPrev} />
                        <img className="Carrousel__Button Carrousel__Button--Right" src={RightArrow}
                             onClick={onNext} />
                    </>
                    :
                    ""
            }

                <img className="Carrousel__Picture" src={pictures[CarrouselIndex]}/>

        </div>
    );
}

