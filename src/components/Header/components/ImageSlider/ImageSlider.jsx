import React, { useMemo } from "react";
import { useState } from "react";

import "./ImageSlider.scss";

export default function ImageSlider({ images = [], initialSelectedImage }) {
    const [selectedImage, setSelectedImage] = useState(initialSelectedImage);

    const handleOnClick = (image) => {
        setSelectedImage(image[0]);
        window.dispatchEvent(new CustomEvent("changeModelButtonClicked",{detail: image[1]}));
    };

    const Slides = useMemo(() => images.map((image) => (
        <button key={`${image[0]}-${image[1]}`}>
            <img  onClick={() => handleOnClick(image)} className={`${selectedImage === image[0] && "selected" }`} src={image[0]} alt={image[0]}/>
        </button> 
    )), [images, selectedImage]);

    return (
        <div className="slider">
            {Slides}
        </div>
    )
}