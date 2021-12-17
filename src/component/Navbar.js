import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

 const Navbar = () => {
  const [active, setActive] = useState(false)

  return (
      <nav>
        <Link to="/" className="logo">VisitNepal</Link>
        <div className={`list ${active ? "active": ""}`}>
        <Link to="/" exact className="link">Home</Link>
        <Link to="/destinations" className="link">Destinations</Link>
        <Link to="/accomodation" className="link">Accomodation</Link>
        <Link to="/experiences" className="link">Experiences</Link>
        <Link to="/blog" className="link">Blogs</Link>
        <Link to="/login" className="link link-border">Sign in</Link></div>

        {
          active ? (<CloseIcon onClick={() => setActive(!active)} />):(<MenuIcon onClick={() => setActive(!active)}/>)
        }
        
      </nav>
  )
}

export default Navbar;