import React, { useState } from "react";

import RightArrow from "../../assets/button-right.svg";
import LeftArrow from "../../assets/button-left.svg";


import "./carousel.css";
export default function Carousel(props) {
    const [itemSelected, setItemSelected] = useState(-1);
    function handleArrow(value) {
        let temp = itemSelected + value;
        if (temp > -2 && temp < 2) {
            setItemSelected(itemSelected + value);
            scrollElement(itemSelected + value);
        }
    }

    function scrollElement(value) {
        if (value === 0) {
            document
                .getElementsByClassName("container-carousel")[0]
                .scrollIntoView({ behavior: "smooth", inline: "center", block: "center" });
        } else if (value === 1) {
            document
                .getElementsByClassName("container-carousel")[0]
                .scrollIntoView({ behavior: "smooth", inline: "end", block: "center" });
        } else {
            document
                .getElementsByClassName("container-carousel")[0]
                .scrollIntoView({ behavior: "smooth", inline: "start", block: "center" });
        }
    }

    return (
        <>
            <div className="arrow-left" onClick={() => handleArrow(-1)}>
                <img src={LeftArrow} alt="leftArrow" />  
                </div>
            <div className="container-carousel">{props.children}</div>
            <div className="arrow-right" onClick={() => handleArrow(1)}>
                <img src={RightArrow} alt="leftArrow" />
            </div>
        </>
    );
}
 
