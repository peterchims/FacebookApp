import React from 'react';
import './FriendReq.css'
import { Link } from 'react-router-dom';
import FriendReqData from '../../fackApes/FriendReqData'

import './FriendReq.css'

const FriendReq = () => {
  return (
   
   <div className="Friend_request"> 
    <div className="border-div"></div>
    <div className="Message-top">
        
            <h4> Friend Requests </h4>
      <button className=' btnSee All'>See All</button>
        </div>
        <div className="border-div"></div>
   {
    FriendReqData.map(friend=>(
        <div className="request">
            <Link to="/profile/id">
            <div className="info" key={friend.id}>
<div className="user">
    <img src={friend.img} alt="" />
    <h5>{friend.name}</h5>
</div>
<div className="info-name"> 

    <p>{friend.info}</p>
</div>
            </div>
            </Link>
            <div className="action">
                <button className='btn btn-primary'> Confirm </button>
                <button className='btn'> Delete </button>
            </div>
        </div>
    ))
   }
   </div>
  );
}

export default FriendReq;
