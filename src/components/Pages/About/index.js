import React from "react";
import { UncontrolledCarousel } from 'reactstrap';
import ImageFrame from "./ImageFrame";

import myImage from "../../../images/about/me.JPG";
import roboticsImage from "../../../images/about/robotics.jpg";
import setImage from "../../../images/about/set.jpg";
import setImage2 from "../../../images/about/set2.jpg";
import robImage1 from "../../../images/about/rob1.jpg";
import codeImage from "../../../images/about/code.png";
import neuralImage from "../../../images/about/neuralnet.png";

import "../../../styles/components/about.css";

const About = () => {
    const infoTexts = [
        "I'm a CS student at the University of Waterloo. I'm nerdy, driven and love all things tech. I like doing cool projects and exploring what's possible. I can help you expand your vision by showing you what's possible. With my diverse experiences and abilities, there is always something I can help with.",
        "I have real-world experience with all sorts of software development. I'm comfortable with both front-end and back-end development. I can help create unique webapps, websites, or even the servers you need to power them. I have experience developing, deploying and maintaining web applications of all types to a variety of platoforms and hosts. There are few areas that I do not already have some experience with.",
        "I'm interested in all sorts of AI and ML modelling. In my free time, I explore new advancements in ML and try to apply them to new and interesting fields. I have worked with applying models like neural networks, trees, regressions and more to fields like match prediciton, language models, image recognition. Combined with my existing knowledge of writing scripts to collect and process data, I can build complete end to end systems for anything you could need.",
        "Robotics has been a passion of mine for almost as long as I can remember. I've mentored and led several teams (a few who've even made the worlds championships) in highschool and now, I still participate heavily in the community as a mentor and a coach. I also participate in the UWaterloo Mars Rover Robotics Team and the UOttawa RoboRace team in my spare time as a software developer. I enjoy learning about applying my knowledge of control systems and AI to improve the performance in new and interesting ways.",
        "I participate quite heavily in the software and robotics community. I'm one of the original founding members of the SET Foundation, a registered not for profit organisiton that educates and promotes engineering and technology amongst students. We were the very first to organise a yearly highschool oriented student tech conferences in Ottawa. We also organise SetHacks, a unique SET-flavoured hackathon also directed towards helping highschool students explore what they want to do. At this hackathon, I acted as a mentor--guiding new individuals and helping them figure out how to accomplish their projects.",
        "I also enjoy helping out robotics teams and passing on my knowledge to younger members. There were many things that I wish I knew when I was starting out and this is my way of making sure the same mistakes aren't made by others. I've coached and mentored Lego FLL teams as well as highschool VEX teams (some of which have made worlds--GO 2381). This is my life passion and is absolutely something I love doing on the free time."
    ]

    const involvementList = [
        {
            src: setImage,
            altText: "image of SET conference",
            caption: "",
            header: "",
            key: 1
        },
        {
            src: setImage2,
            altText: "image of SET conference",
            caption: "",
            header: "",
            key: 2
        },
        {
            src: robImage1,
            altText: "image of robotics team",
            caption: "",
            header: "",
            key: 3
        }
    ];

    return (
        <div>
            <div className="about-diagonal">
            <div className="container base-container-wide">
                <h2 className="base-page-header" > About Me </h2>
                <div className="row about-info-row">
                    <p className="col-md-6" > {infoTexts[0]} </p>
                    <ImageFrame back="true" imageSrc={myImage} className="col-md-6 d-flex align-items-center about-me-image"/>
                </div>
                
                <div className="row about-info-row" >
                    <div className="col-md-6 about-center" >
                        <h3> Software Development </h3>
                        <p> {infoTexts[1]} </p>
                    </div>
                    <ImageFrame imageSrc={codeImage} className="col-md-6 d-flex align-items-center" />
                </div>
            </div>
            </div>
    
            <div className="about-color-row">
                <div className="container base-container-wide">
                    <div className="row about-info-row about-spacing">
                        <div className="col-md-6 order-md-2 about-center" >
                            <h3> AI Modelling </h3>
                            <p> {infoTexts[2]} </p>
                        </div>
                        <ImageFrame imageSrc={neuralImage} className="col-md-6 order-md-1 d-flex align-items-center" />
                    </div>
                </div>   
            </div>

            <div className="container base-container-wide">
                <div className="row about-info-row">
                    <div className="col-md-6 about-center" >
                        <h3> Robotics </h3>
                        <p> {infoTexts[3]} </p>
                    </div>
                    <ImageFrame imageSrc={roboticsImage} className="col-md-6 d-flex align-items-center" />
                </div>

            <hr />

                <div className="about-center">
                    <h3> Community Involvment </h3>
                    <p> {infoTexts[4]} </p>
                    <p> {infoTexts[5]} </p>
                    <div className="about-car" >
                        <UncontrolledCarousel items={involvementList}/>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default About;
