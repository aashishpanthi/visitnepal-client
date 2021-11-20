import React from 'react';
import "aos/dist/aos.css";
import Aos from "aos";
import Nepal from "../images/Nepal.svg";
import "./styles/intro.css"
export default function Intro() {
    Aos.init({ duration: 2000 });
    return (
        <section className="intro-section">
        <div className="main-info">
            <img src={Nepal} alt="map" />
            <p className="info">
                <h1>NEPAL</h1>
                <p className="info-txt">Nepal, officially the Federal Democratic Republic of Nepal is a landlocked country located in
                    South Asia. It is mainly situated in the Himalayas, but also includes parts of the Indo-Gangetic
                    Plain, bordering Tibet of China to the north, and India in the south, east, and west.</p>
                <p className="sources">Source: <a href="https://en.wikipedia.org/wiki/Nepal" target="_blanks">wikipedia <i class="fas fa-external-link-alt"></i></a></p>
            </p>
        </div>
        <div className="info-box-container">
                <p className="info-bar">
                    <span className="info-text">CURRENT DATE</span>
                    <span className="info-text1">27-04-2078 BS</span>
                </p>
                <p className="info-bar">
                    <span className="info-text">CURRENT TIME</span>
                    <span className="info-text1">05:12:50 PM</span>
                </p>
                <p className="info-bar">
                    <span className="info-text">AREA</span>
                    <span className="info-text1">1,47,516 SQ. KM</span>
                </p>
                <p className="info-bar">
                    <span className="info-text">AVERAGE TEMP.</span>
                    <span className="info-text1">14°C</span>
                </p>
            </div>

        </section>

    )
}
