import React from 'react'
import "./destination.css"
import Aos from "aos";
import Kathmandu from "./KATHMANDU.jpg"
import Lumbini from "./LUMBINI.jpg"
import Pokhara from "./POKHARA.jpg"

export default function Destinations() {
    Aos.init({duration: 1000});
    return (
        <div className="container flex column">
            <h1 className="headings flex middle">UNFORGETTABLE PLACES</h1>
            <div className="destination-container flex space-around">
                <span className="destination-box" data-aos="zoom-in">
                    <img src={Lumbini} alt="ktm" className="info-img"></img>
                    <h4 className="box-heading">Lumbini</h4>
                    <p>
                        Birth place of lord Buddha e, one of the world's most important spiritual sites and attracts
                        Buddhist pilgrims from around the world.  Walk in the footsteps.
                    </p>
                </span>
                <span className="destination-box" data-aos="zoom-in">
                    <img src={Kathmandu} alt="ktm" className="info-img"></img>
                    <h4 className="box-heading">Kathmandu</h4>
                    <p>
                        Kathmandu, the capital of Nepal is a melting pot of cultures and a rich mix of the east and west,
                        the old and the new, where tradition jostles with modernity ...
                    </p>
                </span>
                <span className="destination-box" data-aos="zoom-in">
                    <img src={Pokhara} alt="ktm" className="info-img"></img>
                    <h4 className="box-heading">Pokhara</h4>
                    <p>
                        Pokhara is a city on Phewa Lake, known as a gateway to the Annapurna Circuit, a popular trail in the Himalayas.
                        Pokhara is also famous for boating, trekking...
                    </p>
                </span>
            </div>
           <div className="flex middle"><button className="btn">See more places </button></div>
        </div>
    )
}
