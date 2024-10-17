import React from 'react';
import './profile.css'

// Components
import Profile from '../../component/UserProfile/UserProfile';
import AddPost from '../../component/addPost/addPost';
import Feeds from '../../component/Feeds/Feeds';


function profile() {
    return (
     <>
     <Profile />
     <AddPost />
     <Feeds />
     </>
      );
}



export default profile;
