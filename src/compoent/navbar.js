import React from 'react';
import { Link } from 'react-router-dom';
export default function navbar() {
  return (
    <div>
      <nav className="bar">
        <h1 className="logo">VISIT NEPAL</h1>
        <div className="list">
        <Link to="/" exact className="link">HOME</Link>
        <Link to="/destinations" className="link">DESTINATIONS</Link>
        <Link to="/accomodation" className="link">ACCOMODATION</Link>
        <Link to="/experiences" className="link">EXPERIENCES</Link>
        <Link to="/blog" className="link">BLOG</Link></div>
      </nav>
    </div>
  )
}
