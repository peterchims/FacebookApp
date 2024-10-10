import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faBell, faEnvelope, faHome, faSearch, faUser} from '@fortawesome/free-solid-svg-icons'



function Nav(){
  return (
  <nav>
    <div className="nav-container">
      <div className="nav-left">
        <Link to='/'>
        <h3 className='logo'> Facebook </h3>
        </Link>

        <Link to='/'>
        <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to='/profile/id'>
        <FontAwesomeIcon icon={faUser} />
        </Link>
        <div className="nav-searchbar">
        <FontAwesomeIcon icon={faSearch} />
        <input type="search" name="" id="" />
        </div>
      </div>

      <div className="nav-right">
        <Link to='/chatbox/id'>
        <FontAwesomeIcon icon={faEnvelope} />
        </Link>
        <Link to='/'>
        <FontAwesomeIcon icon={faBell} />
        </Link>
        <Link to='/'>
        <FontAwesomeIcon icon={faBars} />
        </Link>
      </div>
    </div>
  </nav>
  );
}

export default Nav;
