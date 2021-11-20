import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import "./styles/home.css";
import Navbar from "./Navbar.js";
import Destinations from "./Destinations";
import Accomodation from "./Accomodation";
import Experience from "./Experience";
import Bottom from './Bottom';
import Intro from "./Intro";

export default function Home() {
  Aos.init({ duration: 1000 });
  return (
    <>
      <section className="container center column home">
        <Navbar />
        <h1 data-aos="fade-down" className="home-title">
          Come visit heaven on earth
        </h1>

        <form role="search">
          <label for="search">Search for stuff</label>
          <input
            id="search"
            type="search"
            placeholder="Search..."
            autofocus
            required
          />
          <button className="searchIcon" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </section>

      <Intro />
      <Destinations />
      <Accomodation />
      <Bottom />

    </>
  );
}
