import React from 'react';
import './chatbox.css'
import Stories from '../../component/myStories/Stories';
import CurrentUser from '../../fackApes/CurrentUserData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowAltCircleRight, faFileAlt } from '@fortawesome/free-solid-svg-icons';

function Chatbox() {
  return (
   <> 
   <Stories />
   <div className="chatbox">
    <div className="chatBoxTop">
<img src={CurrentUser.map(user=>(user.ProfileImage))} alt="" />
<div className="username">
  <h3>{CurrentUser.map(user=>(user.name))}</h3>
  <h5>{CurrentUser.map(user=>(user.username))}</h5>
</div>
    </div>
    <div className="chatBoxBottom">
<form action="">
  <input type="text" placeholder='Write Something' />
  <button type='submit' className='btn btn-primary'> <FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
  <label htmlFor='FileAlt'>
    <input type="file" id='FileAlt' />
     <FontAwesomeIcon icon={faFileAlt}/>
     </label>
</form>
    </div> 
   </div>
   </>

  );
}

export default Chatbox;
