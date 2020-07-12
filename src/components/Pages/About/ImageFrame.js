import React from "react";

const ImageFrame = props => {
    return (
        <div className={props.className}>
            <div className={(props.back? " about-imageframe-base":"")} >
            <img alt="about" className="img-fluid" src={props.imageSrc} />
            </div>
        </div>
    );
}

export default ImageFrame;
