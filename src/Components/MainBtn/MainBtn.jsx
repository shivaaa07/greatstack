import React from "react";
// import arrow from "../../assets/icons/arrow.png"
import './MainBtn.css'

const MainBtn = ({btnTitle, icon, arrowStyle, btnBgColor}) => {

    console.log(btnBgColor);

    return (
        <>
            <div className="btn-wrapper">
                <a href="#" className={btnBgColor}>{btnTitle} <img src={icon} alt="arrow" className={arrowStyle} /> </a>
            </div>
        </>
    )
}

export default MainBtn;