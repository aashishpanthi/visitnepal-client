import React from "react";
import { Link } from "react-router-dom";
import "./styles/bottom.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const Bottom = () => {
  return (
    <footer>
      <div className="bottom-box">
        <h1 className="headings flex middle">Welcome to Nepal</h1>
        <p className="about-nepal">
          A trekkers' paradise, Nepal combines Himalayan views, golden temples,
          skyblue lakes, charming hill villages and jungle wildlife watching to
          offer one of the world's great travel destinations. Country with
          historical importance and natural beauty.
        </p>

        <Link to="/" className="learn-more-btn">
          Read more <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>

      <div className="medias">
        <div className="links">
          <Link to="/festivals">Festivals</Link>
          <Link to="/foods-and-drinks">Foods and drinks</Link>
          <Link to="/wildlife-and-nature">Wildlife and nature</Link>
          <Link to="/historical-places">Historical places</Link>
        </div>

        <div className="subscribe">
          <h1 className="box-heading">Get news on your email address</h1>
          <form className="input-wrap">
            <input type="email" placeholder="email@example.com"></input>
            <button>Subscribe</button>
          </form>
        </div>

        <div className="social">
          <h3 className="box-heading">FIND US ON:</h3>
          <Link to="/">
            <InstagramIcon />
          </Link>
          <Link to="/">
            <FacebookIcon />
          </Link>
          <Link to="/">
            <YouTubeIcon />
          </Link>
        </div>
      </div>
      <div className="copyright">
        <span>&copy; All rights reserved by visitnepal, 2021</span>
        <div className="link-box">
          <Link to="/about-us">About us</Link>
          <Link to="/emergency-numbers">Emergency numbers</Link>
          <a href="mailto:aashishpanthi11@gmail.com">Contact us</a>
        </div>
      </div>
    </footer>
  );
};

export default Bottom;
