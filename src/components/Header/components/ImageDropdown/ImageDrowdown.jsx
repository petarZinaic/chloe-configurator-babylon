import React, { useMemo } from "react";
import { useState } from "react";

import "./ImageDrowdown.scss";

export default function ImageDropdown({ images = [], initialSelectedImage }) {
    const [selectedImage, setSelectedImage] = useState(initialSelectedImage);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleOnClick = (image,index) => {
        setSelectedImage(image);
        setDropdownOpen(false);
        window.dispatchEvent(new CustomEvent("changeModelButtonClicked",{detail: index}));
    };

    const handleOnToggleDropdownClick = () => {
        setDropdownOpen(!dropdownOpen);



    };
    //TODO image[0] je losa praksa
    const DropdownItems = useMemo(() => images.filter(image => image[0] !== selectedImage).map((image) => (
        <li style={{pointerEvents: "all"}} >
            <button className="selected_btn">
                <img src={image[0]} style={{pointerEvents: "all"}}  key={`${image[0]}-${image[1]}`} onClick={() => handleOnClick(image[0], image[1])} alt={image[1]} />
                </button>
        </li>
    )), [images, selectedImage]);

    return (
        <div className="dropdown">
            <button className="dropdown_btn">
            <img src={selectedImage} alt="test" />
            </button>
            <button className="open_dropdown" onClick={handleOnToggleDropdownClick}>
                { dropdownOpen ? "^" : "v" }
            </button>
            <ul className={dropdownOpen ? "open" : undefined}>
                {DropdownItems}
            </ul>
        </div>
    )
}