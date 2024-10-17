import React from 'react';
import './rightbar.css'

import Message from '../Messages/Message'
import FriendReq from '../FriendReq/FriendReq'

function Right(){
  return (
    <div className='rightBar'>
    <div className="rightbar-container">
      <Message />
      <FriendReq />
    </div>
    </div>
  );
}

export default Right;
