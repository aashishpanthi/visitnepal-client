import React from 'react'
import "aos/dist/aos.css";
import Aos from "aos";
import "./styles/home.css"
export default function Home() {
        Aos.init({duration: 1000});
    return (
            <div className="container center column">
                <h1 data-aos="fade-down" className="home-title">COME VISIT HEAVEN ON EARTH</h1>
                <div className="input-wrap shadow" >
                    <input type="text" className="data" placeholder="SEARCH DESTINATION"></input>
                    <button><i className="fas fa-search"></i></button>
                </div>
            </div>   
         
    )
}
