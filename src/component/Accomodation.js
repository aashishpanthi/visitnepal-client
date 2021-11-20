import React from "react";
import Stay from "../images/Stay.jpg";
import Mountain from "../images/mountain.jpg";
import "./styles/accomodation.css";

export default function Accomodation() {
  return (
    <section className="accomodation">
      <div className="accomodation-container">
        <div className="image-container-accomodation">
          <img src={Stay} alt="stay" className="accomodation-img"/>
        </div>
        <div className="accomodation-box">
          <h3 className="headings">Stay how you live</h3>
          <p>
            We provide you the hotels that best fits for you. We help you to
            filter out your best choice out of many confusions.
          </p>
          <button className="accomodation-btn">Book now</button>
        </div>
      </div>
      <div className="accomodation-container">
        <div className="accomodation-box">
          <h3>Enjoy cultures</h3>
          <p>
            Stay in the traditional houses of Nepalese, learning about their
            cultures, festivals. local food and get to know humble Nepalese.
          </p>
          <button className="accomodation-btn">Learn more</button>
        </div>

        <div className="image-container-accomodation">
          <img src={Mountain} alt="mountain" className="accomodation-img"/>
        </div>
      </div>
    </section>
  );
}
