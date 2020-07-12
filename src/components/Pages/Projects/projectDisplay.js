import React from "react";

import "../../../styles/components/projectDisplay.css";

const ProjectDisplay = props => {
    const projectImage = props.image;
    const title = props.title;
    const body = props.body;
    const link = props.link;

    return(
        <div className="col-md-6" >
            <a href={link} >
                <div className="display-box" >
                    <img alt="project" className="img-fluid display-img" src={projectImage} />
                    <div className="display-overlay" >
                        <p className="display-text"> {body} </p>
                    </div>
                </div>
            </a>

            <h4 className="display-title"> {title} </h4>
        </div>
    )
}

export default ProjectDisplay;
