import React from 'react';
import './home.css'
import Stories from '../../component/myStories/Stories'
import AddPost from '../../component/addPost/addPost';
import Feeds from '../../component/Feeds/Feeds';

function Home() {
  return (
    <div>
      <AddPost />
    <Stories />
    
    <Feeds />
    </div>
  );
}

export default Home;
