import React from "react";
import "./Main.css";
import videoMP4 from "../../assets/video/new-datejust-cover-video.webm";

const Main = () => {
    return (
        <div>
            <div className="main-video">
                <video loop muted autoPlay className="fullscreen-bg__video">
                    <source src={videoMP4} type="video/webm" />
                </video>
            </div>
        </div>
    );
};

export default Main;
