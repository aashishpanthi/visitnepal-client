import React from 'react'
import Stay from "./Stay.jpg";
import Mountain from "./mountain.jpg"
export default function Accomodation() {
    return (
        <div className="container flex column">
            <div className="accomodation-container flex space-around">
                <img src={Stay} alt="stay" className="accomodation-img"></img>
                <div className="accomodation-box">
                    <h3 className="headings">Stay how you live</h3>
                    <p>We provide you the hotels that best fits for you. We help you to filter 
                        out your best choice out of many confusions.</p>
                        <button className="accomodation-btn">Book now</button>
                </div>
            </div>
            <div className="accomodation-container flex space-around">
                <div className="accomodation-box">
                <h3>Enjoy cultures</h3>
                    <p>Stay in the traditional houses of Nepalese, learning about their cultures, festivals. local food and get to 
                        know humble Nepalese.</p>
                        <button className="accomodation-btn">Learn more</button>
                </div>
                <img src={Mountain} alt="mountain" className="accomodation-img"></img>
            </div>

        </div>
    )
}
