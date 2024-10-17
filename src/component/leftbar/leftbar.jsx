import React from 'react';
import './leftbar.css'
import { Link } from 'react-router-dom';
import CurrentUser from '../../fackApes/CurrentUserData';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookMessenger } from '@fortawesome/fontawesome-svg-core';
import {
  faTv, 
  faBookmark, 
  faCameraRetro,
  faUserFriends, 
  faUsers,
  faCalendar, 
  faStore,
  faCalendarAlt, 
  faChevronDown,
  faTicketSimple,
  faMusic,
  faSadTear} 
  from '@fortawesome/free-solid-svg-icons'
  import Darkmode from '../DarkMode/Darkmode';


function Leftbar() {
  return (
    <div className="leftBar">
      <div className="left-container">
        <div className="menu">
          <Link to='/profile/id'>
          <div className="user">
          <img src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
          <h4 > Demo App </h4>
          </div>
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon fauser" icon={faUserFriends} />
          <h4> Friends </h4>
          </div>
          </Link>
         
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon" icon={faCameraRetro} />
     
          <h4> Memories </h4>
          </div>
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon bk" icon={faBookmark} />


          <h4> Saved </h4>
          </div>
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon fauser" icon={faUsers} />


          <h4> Groups </h4>
          </div>
          </Link>

          
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon bk" icon={faTv} />

          <h4> Video </h4>
          </div>
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon fauser" icon={faStore} />
          <h4> Marketplace </h4>
          </div>
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon" icon={faCalendar} />

          <h4> Feeds </h4>
          </div>
          
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon bk" icon={faCalendarAlt} />

          <h4> Events </h4>
          </div>
          
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon drp" icon={faChevronDown} />


          <h4> See More </h4>
          </div>
          </Link>
        </div>  
<hr className='divider'/>
        <div className="menu">
    <h4 className="others">Your Shortcuts </h4>
    <Link to='/profile/id'>
          <div className="user">
          <img src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
          <h4> Singles, Married , Divorce , Relationships Group Chat </h4>
          </div>
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon bk" icon={faBookmark} />
          <h4> Saved  </h4>
          </div>
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon" icon={faStore} />
          <h4> Stores</h4>
          </div>
          </Link>
         
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon" icon={faMusic} />
          <h4> MusicHub </h4>
          </div>
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon" icon={faSadTear} />
          <h4> Community Challenge </h4>
          </div>
          </Link>
        </div>
        <Darkmode />
      </div>
    </div>
  );
}

export default Leftbar;
