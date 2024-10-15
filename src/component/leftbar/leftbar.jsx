import React from 'react';
import './leftbar.css'
import { Link } from 'react-router-dom';
import CurrentUser from '../../fackApes/CurrentUserData';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookMessenger } from '@fortawesome/fontawesome-svg-core';
import {faBars, faBell,faHome, faCameraRetro,faUserFriends, faUsers, faGamepad, faPlayCircle, faStore, faMessage} from '@fortawesome/free-solid-svg-icons'


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
          <FontAwesomeIcon className="icon" icon={faUserFriends} />
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
          <FontAwesomeIcon className="icon" icon={faCameraRetro} />
          <h4> Saved </h4>
          </div>
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon" icon={faStore} />
          <h4> Groups </h4>
          </div>
          </Link>

          
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon" icon={faStore} />
          <h4> Video </h4>
          </div>
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon" icon={faStore} />
          <h4> Marketplace </h4>
          </div>
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon" icon={faStore} />
          <h4> Feeds </h4>
          </div>
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon" icon={faStore} />
          <h4> See More </h4>
          </div>
          </Link>
        </div>
       
     
<hr />
        <div className="menu">
    <h4 className="others">Your Shortcuts </h4>
    <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon" icon={faStore} />
          <h4> Shortcut 1 </h4>
          </div>
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon" icon={faStore} />
          <h4> Shortcut 2 </h4>
          </div>
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon" icon={faStore} />
          <h4> Shortcut 3 </h4>
          </div>
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon" icon={faStore} />
          <h4> Shortcut 4 </h4>
          </div>
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon" icon={faStore} />
          <h4> Shortcut 5 </h4>
          </div>
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon" icon={faStore} />
          <h4> Shortcut 6 </h4>
          </div>
          </Link>
          <Link to='/profile/id'>
          <div className="user">
          <FontAwesomeIcon className="icon" icon={faStore} />
          <h4> Shortcut 7 </h4>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
