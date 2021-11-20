import React from 'react';
import "aos/dist/aos.css";
import Aos from "aos";
import Nepal from "../images/Nepal.svg";
import "./styles/intro.css"
export default function Intro() {
    Aos.init({ duration: 2000 });
    return (
        <div>
        <div className="container space-around">
            <img src={Nepal} alt="map" className="info" />
            <span className="info">
                <h1>NEPAL</h1>
                <p className="info-txt">Nepal, officially the Federal Democratic Republic of Nepal is a landlocked country located in
                    South Asia. It is mainly situated in the Himalayas, but also includes parts of the Indo-Gangetic
                    Plain, bordering Tibet of China to the north, and India in the south, east, and west.</p>
                <p className="sources">Source: <a href="https://en.wikipedia.org/wiki/Nepal">wikipedia<i class="fas fa-external-link-alt"></i></a></p>
            </span>
        </div>
        <div className="info-box flex space-around">
                <span className="info-bar">
                    <h6 className="info-text">CURRENT DATE</h6>
                    <h5 className="info-text1"></h5>
                </span>
                <span className="info-bar">
                    <h6 className="info-text">CURRENT TIME</h6>
                    <h5 className="info-text1"></h5>
                </span>
                <span className="info-bar">
                    <h6 className="info-text">AREA</h6>
                    <h5 className="info-text1">1,47,516 SQ. KM</h5>
                </span>
                <span className="info-bar">
                    <h6 className="info-text">AVERAGE TEMP.</h6>
                    <h5 className="info-text1">14°C</h5>
                </span>
            </div>
        </div>

    )
}
