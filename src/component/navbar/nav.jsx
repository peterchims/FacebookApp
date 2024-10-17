import React, {useState} from 'react';
import './nav.css'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookMessenger } from '@fortawesome/fontawesome-svg-core';
import {faBars, faBell,faHome, faSearch, faUsers, faGamepad, faPlayCircle, faStore, faMessage} from '@fortawesome/free-solid-svg-icons'
import CurrentUser from '../../fackApes/CurrentUserData';
import coverPhoto from '../../assets/icons/fb_logo.png'




function Nav(){
  const [isFocused, setIsFocused] = useState(false);
  return (
  <nav>
    <div className="nav-container">

      {/* Left Navigation */}
      <div className="nav-left">
        <Link to='/'>
       <img src={coverPhoto} alt="fb_logo" className='fb-logo' />

        </Link>
        <div className="nav-searchbar">
      {/* Conditional rendering: only show the icon if the input field is not focused */}
      {!isFocused && (
        <FontAwesomeIcon className='fa-search' icon={faSearch} />
      )}

      {/* Input field */}
      <input
        type="search"
        placeholder='Search here...'
        onFocus={() => setIsFocused(true)}  // Hide the icon on focus
        onBlur={() => setIsFocused(false)}   // Show the icon back on blur
      />
    </div>
      </div>

<div className="nav-center">
      

        <Link to='/' className='center-link'>
        <FontAwesomeIcon className="home-icon" icon={faHome} />
        </Link>
        <Link to='/' className='center-link'>
        <FontAwesomeIcon className="icon" icon={faPlayCircle} />
        </Link>
        <Link to='/' className='center-link'>
        <FontAwesomeIcon className="icon" icon={faStore} />
        </Link>
      
        <Link to='/' className='center-link'>
        <FontAwesomeIcon className="icon" icon={faUsers} />
        </Link>
        <Link to='/' className='center-link'>
        <FontAwesomeIcon className="icon" icon={faGamepad} />
        </Link>
        
        
      </div>
{/*  Right Navigation */}
      <div className="nav-right">
        <Link to='/' className='navlink-right'>
        <FontAwesomeIcon className='right-icon' id='navbar-bars' icon={faBars} />
        </Link>
        <Link to='/chatbox/id' className='navlink-right'>
        <FontAwesomeIcon icon={faMessage} className='right-icon' />
        </Link> 
       
        <Link to='/' className='navlink-right'>
        <FontAwesomeIcon icon={faBell} className='right-icon' />
        </Link>
        <div className="user">
          <img src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Nav;
