import React from "react";

const ImageFrame = props => {
    return (
        <div className={props.className}>
            <img alt="about" className="img-fluid" src={props.imageSrc} />
        </div>
    );
}

export default ImageFrame;
