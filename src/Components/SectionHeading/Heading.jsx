import React from "react";
import './Heading.css'

const Heading = ({heading, subHeading, textPosition}) => {
   

    return(
        <>
        <div className={`title ${textPosition}`}>
            <p className="mb-0">{heading}</p>
            <h2>{subHeading}</h2>
        </div>
        </>
    )
}

export default Heading;