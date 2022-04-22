import {React, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";  
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Dropdown } from './Dropdown/Dropdown';
import { CustomIcon } from '../CustomIcon/CustomIcon';

import './NavBar.scss';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [clickedNav, setClickedNav] = useState("");


  const handleClick = () => setClick(!click);
  const handleDropdown = () => setDropdown(!dropdown);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
     if(window.innerWidth < 960){
       setDropdown(false)
     }else{
       setDropdown(true);
     }
  };

  const onMouseLeave = () => {
    if(window.innerWidth < 960){
      setDropdown(false)
    }else{
      setDropdown(false);
    }
 };
  return (
    <>
      <nav className="NavBar">
          
          <div className="nav-menu-icon" onClick={handleClick}> 
            <i className={click? 'fas fa-times' : 'fas fa-bars'}> </i>
          </div>
          
          {click ? 
            <ul className='nav-menu active'>
              <div className='mobile-inner-nav-menu'>
                <li className="nav-item">
                  <Link to="/about" className="nav-links" > About Me </Link>
                </li>

                <li className="nav-item">
                  <Link to="/artwork" className="nav-links">Artworks </Link>
                </li>
              </div>
            </ul>   
          :
          <div className='nav-menu'>
              <Link to="/" className={ clickedNav === "home" ? "links-selected" : "links"} onClick={() => setClickedNav("home")}> Home </Link>
              <Link to="/artwork" className={ clickedNav === "project" ? "links-selected" : "links"} onClick={() => setClickedNav("project")}> Projects </Link>
              <Link to="/about" className={ clickedNav === "passion" ? "links-selected" : "links"} onClick={() => setClickedNav("passion")}> Passion Works </Link>
              <Link to="/about" className={ clickedNav === "contact" ? "links-selected" : "links"} onClick={() => setClickedNav("contact")}> Contact </Link>
          </div> 
            
          }
    
      </nav>
    </>

  );
}

export { NavBar };
