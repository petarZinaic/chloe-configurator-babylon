import { useMemo, useState } from "react";
import { ImageDropdown, ImageSlider } from "./components";


import "./Header.scss";

export default function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const MOBILE_BREAKPOINT = 600;

    const images = [
        ["assets/ui-exports/case-logic.svg", 0],
        ["assets/ui-exports/chloe.svg", 1],
        ["assets/ui-exports/gucci.svg", 2],
    ]

    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
    });


    const selectedComponent = useMemo(() => {
        if(windowWidth <= MOBILE_BREAKPOINT) {
            return <ImageDropdown images={images} initialSelectedImage={images[0][0]} />
        }

        return <ImageSlider initialSelectedImage={images[0][0]} images={images} /> 
    }, [windowWidth]);
  


    return (
        <header>
            {selectedComponent}
            <div className="nav">
                <a href="#"><img src="./assets/ui-exports/help.png" alt="help" id="help" /> <span>Help</span></a>
                <a href="#"><img src="./assets/ui-exports/search.png" alt="search" /></a>
                <a href="#"><img src="./assets/ui-exports/shopping-bag.png" alt="cart" /></a>
                <a href="#"><img src="./assets/ui-exports/menu.png" alt="menu" id="burger" /></a>
            </div>
        </header>
    )
}