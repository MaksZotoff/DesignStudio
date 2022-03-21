import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import on from "./images/img-gallery1.png"
import tw from "./images/img-gallery2.png"
import th from "./images/img-gallery3.png"
import fo from "./images/img-gallery4.png"
import fi from "./images/img-gallery5.png"
import si from "./images/img-gallery6.png"
import se from "./images/img-gallery7.png"

import { Carousel } from 'react-bootstrap';

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return(
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={on}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={tw}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={th}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={fo}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={fi}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={si}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={se}
                        alt="Third slide"
                    />
                </Carousel.Item>


            </Carousel>
        </>
    );
};
export default Slider;