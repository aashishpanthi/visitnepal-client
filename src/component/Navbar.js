import React from 'react';
import { Link } from 'react-router-dom';
export default function navbar() {
  return (
      <nav>
        <h1 className="logo">VisitNepal</h1>
        <div className="list">
        <Link to="/" exact className="link">Home</Link>
        <Link to="/destinations" className="link">Destinations</Link>
        <Link to="/accomodation" className="link">Accomodation</Link>
        <Link to="/experiences" className="link">Experiences</Link>
        <Link to="/blog" className="link">Blogs</Link></div>
      </nav>
  )
}
