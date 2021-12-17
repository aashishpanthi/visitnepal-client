import React from "react";
import "./styles/destination.css";
import Aos from "aos";
import Kathmandu from "../images/KATHMANDU.jpg";
import Lumbini from "../images/LUMBINI.jpg";
import Pokhara from "../images/POKHARA.jpg";
import { Link } from 'react-router-dom'

export default function Destinations() {
  Aos.init({ duration: 1000 });
  return (
    <section className="destination">
      <h1>Unforgatable places</h1>
      <div className="destination-container">
        <Link to="/place/lumbini" className="destination-box" data-aos="zoom-in">
          <div className="img-container">
            <img src={Lumbini} alt="lumbini" className="info-img"></img>
          </div>
          <h4 className="box-heading">Lumbini</h4>
          <p>
            Birth place of lord Buddha e, one of the world's most important
            spiritual sites and attracts Buddhist pilgrims from around the
            world. Walk in the footsteps.
          </p>
        </Link>

        <Link to="/place/lumbini" className="destination-box" data-aos="zoom-in">
          <div className="img-container">
            <img src={Kathmandu} alt="kathmandu" className="info-img"></img>
          </div>
          <h4 className="box-heading">Kathmandu</h4>
          <p>
            Kathmandu, the capital of Nepal is a melting pot of cultures and a
            rich mix of the east and west, the old and the new, where tradition
            jostles with modernity ...
          </p>
        </Link>

        <Link to="/place/lumbini" className="destination-box" data-aos="zoom-in">
          <div className="img-container">
            <img src={Pokhara} alt="pokhara" className="info-img"></img>
          </div>
          <h4 className="box-heading">Pokhara</h4>
          <p>
            Pokhara is a city on Phewa Lake, known as a gateway to the Annapurna
            Circuit, a popular trail in the Himalayas. Pokhara is also famous
            for boating, trekking...
          </p>
        </Link>
      </div>
        <Link to="/destinations" className="more-places-btn">See more places <i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
    </section>
  );
}
