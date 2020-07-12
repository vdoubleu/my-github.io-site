import React from "react";
import { Link } from "react-router-dom";
import LinkedinLogo from "../../../images/linkedinLogo.png";
import GithubLogo from "../../../images/githubLogo.png";

import "../../../styles/components/landing.css";

const Landing = () => {
    return (
        <div id="landing-page" className="container"> 
            <div id="landing-align" >
                <h2> Hello </h2>
                <h1 id="landing-main-title"> <strong> My name is Victor </strong> </h1>
                <h2> I create things that make the world a better place </h2>
            {/*<h4> I build cool apps, play with robots, and explore AI models </h4>*/}
                <div className="row landing-media" >
                    <a href="https://www.linkedin.com/in/victor-yuefeng-wang/">
                        <img alt="linkedin" id="linkedin-logo" className="landing-logo" src={LinkedinLogo} />
                    </a>
                    <a href="https://github.com/vdoubleu">
                        <img alt="github" id="github-logo" className="landing-logo" src={GithubLogo} />
                    </a>
                </div>
                
                <div className="d-flex justify-content-center" >
                    <Link to="about">
                        <button id="landing-info-button"> About Me </button>
                    </Link>
                </div>
                {/*<button id="landing-resume-button"> Resume </button>*/}
                <div id="landing-colorband"/>
            </div>
        </div>
    );
}

export default Landing;
