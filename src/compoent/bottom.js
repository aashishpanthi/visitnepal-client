import React from 'react'
import { Link } from 'react-router-dom';
import Insta from "./insta.png"
import Fb from "./FB.png"
import Yt from "./yt.png"
export default function Bottom() {
    return (
        <div className="container flex column">
            <span className="bottom-box">
                <h1 className="headings flex middle">Welcome to Nepal</h1>
                <p className="info-txt">A trekkers' paradise, Nepal combines Himalayan views, golden temples, skyblue lakes, charming hill
                    villages and jungle wildlife watching to offer one of the world's great travel destinations. Country
                    with historical importance and natural beauty.
                </p>
                <span className="flex middle"><button className="accomodation-btn">READ MORE</button></span>
            </span>
            <div className="medias flex space-around center">
                <div className="others flex column">
                    <Link to="/" exact className="link1">Festivals</Link>
                    <Link to="/" exact className="link1">Foods and drinks</Link>
                    <Link to="/" exact className="link1">Wildlife and nature</Link>
                    <Link to="/" exact className="link1">Historical places</Link>
                </div>
                <div className="subscribe">
                    <h1 className="box-heading">Get news on your email address</h1>
                    <div className="input-wrap top" >
                        <input type="text" className="data" placeholder="email@example.com"></input>
                        <button className="btn3">Subscribe</button>
                    </div>
                </div>
                <div className="social">
                    <h3 className="box-heading">FIND US ON:</h3>
                    <img src={Insta} alt="insta"></img>
                    <img src={Fb} alt="fb"></img>
                    <img src={Yt} alt="yt"></img>
                </div>
            </div>
            <div className="footer flex space-around center top">
                <h1 className="footer-heading">All rights reserved, 2021</h1>
                <nav className="link-box flex space-around">
                    <Link to="/" exact className="link1">About us</Link>
                    <Link to="/" exact className="link1">Emergency numbers</Link>
                    <Link to="/" exact className="link1">Contact us</Link>
                    </nav>
            </div>

        </div>
    )
}
