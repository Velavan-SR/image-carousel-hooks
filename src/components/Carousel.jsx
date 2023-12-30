import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handelNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const handelPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    const currentImage = images[currentIndex];

    return (
        <div className="main">
            <ArrowBackIosIcon onClick={handelPrev} className="arrow" />
            <div className="content">
                <img src={currentImage.img} alt={currentImage.title}/>
                <div className="texts">
                    <h2>{currentImage.title}</h2>
                    <p>{currentImage.subtitle}</p>
                </div>
            </div>
            <ArrowForwardIosIcon onClick={handelNext} className="arrow" />
        </div>
    )

}

export default Carousel;