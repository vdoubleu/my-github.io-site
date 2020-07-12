import React from "react";
import ProjectDisplay from "./projectDisplay";

import sethackSiteImage from "../../../images/projects/sethacks-site.png";
import cosmoImage from "../../../images/projects/cosmo.png";
import securityImage from "../../../images/projects/turr.jpg";
import mathSolverImage from "../../../images/projects/math_equation_solver.png";
import cubeTimerImage from "../../../images/projects/cubetimer.png";
import roboticsPredictionImage from "../../../images/projects/robotPrediction.png";
import ngramImage from "../../../images/projects/ngram.png";
import informImage from "../../../images/projects/inform.png";

import "../../../styles/components/project.css";

const Project = () => {
    const projects = [
        [
            {
                img: sethackSiteImage,
                title: "SetHacks Website",
                body: "Designed, created and maintained the main website for the SetHacks hackathon",
                link: "https://sethacks.ca/#/"
            },
            {
                img: roboticsPredictionImage,
                title: "Robotics Match Predictor v2",
                body: "A collection of models along with my detailed throught process of how I modeled the outcome of VEX robotics matches",
                link: "https://github.com/vdoubleu/robotics-match-predictor-v2"
            }
        ],
        [
            {
                img: cosmoImage,
                title: "Cosmo",
                body: "A custom interpreter for a fully turing complete language that I invented, designed as a lightweight scripting language for the Comrade discord bot",
                link: "https://github.com/vdoubleu/Cosmo"
            },
            {
                img: informImage,
                title: "Inform",
                body: "A dynamic, user sourced news feed that delivers popular and relevant content based on what you like and where you are",
                link: "https://github.com/vdoubleu/Inform"
            },
        ],
        [
            {
                img: ngramImage,
                title: "N-Gram Language Model",
                body: "An N-Gram Language Model trained on wikipedia articles and built using a custom implementation of hash maps and tries",
                link: "https://github.com/vdoubleu/ngram-textgen-v2"
            },
            {
                img: cubeTimerImage, 
                title: "Rubik's Cube Timer",
                body: "A simple Rubik's Cube Timer that stores and plots your solve times",
                link: "https://github.com/vdoubleu/Rubik-s-Timer"
            }
        ],
        [
            {
                img: securityImage,
                title: "Security Turret",
                body: "A security turret that relies on face recognition to locate, track and determine whether a person is a threat",
                link: "https://github.com/vdoubleu/security-turret"
            },
            {
                img: mathSolverImage,
                title: "Math Equation Solver",
                body: "A webapp that takes an image of a math equation as input and solves for the variable",
                link: "https://github.com/vdoubleu/Math-Equation-Solver"
            }
        ]
    ]

    const projectBlock = projects.map(row => {
        return (
        <div className="row">
           <ProjectDisplay image={row[0].img} title={row[0].title} body={row[0].body} link={row[0].link} />
           <ProjectDisplay image={row[1].img} title={row[1].title} body={row[1].body} link={row[0].link} />
        </div>
    )});


    return (
        <div>
            <div>
                <div className="project-gradient-box" />
                <svg className="project-curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#373737" fill-opacity="1" d="M0,96L80,112C160,128,320,160,480,144C640,128,800,64,960,58.7C1120,53,1280,107,1360,133.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <div className="container base-container-wide">
                <h2 className="base-page-header"> Projects </h2>
                <div>
                    {projectBlock}
                </div>
            </div>
        </div>
    )
}

export default Project;
